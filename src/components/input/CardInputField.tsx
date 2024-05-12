import { getValue } from '@testing-library/user-event/dist/utils';
import { watch } from 'fs';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { StorageKeys } from '../../utils/types';
import { handleChangeExpiration } from '../../utils/validationFunctions';
import { Flex } from '../Flex';

interface InputFieldProps {
  name: string;
  placeholder: String;
  register: any;
  errors?: any;
  value?: string;
  setValue?: any;
  watch?: any;
  type?: any;
  getValues?: any;
}

export const CardInputField = ({
  name,
  placeholder,
  register,
  errors,
  value,
  type = 'text',
  setValue,
  getValues,
}: InputFieldProps) => {
  const hasInput = !!value && !errors;

  const onChangeValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const trimmedValue = value.replace(/\s/g, '').replace(/\D/g, '');

    if (name === StorageKeys.cardNumber) {
      if (value.length <= 16) {
        return setValue(name, trimmedValue);
      }
    }

    if (name === StorageKeys.securityCode) {
      if (value.length <= 3) {
        return setValue(name, trimmedValue);
      }
    }

    if (name === StorageKeys.expirationDate) {
      if (value.length <= 5) {
        return setValue(name, trimmedValue);
      }
    }

    return;
  };

  return (
    <FlexStyled flexDirection='column'>
      <LabelContainer>
        <Label hasInput={hasInput} error={!!errors}>
          {placeholder}
        </Label>
      </LabelContainer>

      <InputStyled
        type={type}
        isError={!!errors}
        hasInput={hasInput}
        {...register(name)}
        value={getValues(name)}
        onChange={(e: any) => onChangeValidation(e)}
      />

      {errors && <ErrorSpan>{errors}</ErrorSpan>}
    </FlexStyled>
  );
};

const FlexStyled = styled(Flex)`
  position: relative;
`;

export const LabelContainer = styled(Flex)`
  width: 100% !important;
  position: absolute;
  top: -15.6px;
  left: 0;
`;

export const Label = styled.label<{
  hasInput?: boolean;
  error: boolean;
  isAddress?: boolean;
}>`
  z-index: 4;
  pointer-events: none;
  transform: ${(props) =>
    props.hasInput
      ? 'translate(18px, 18px) scale(0.8)'
      : 'translate(18px, 32px) scale(1)'};
  transform-origin: left;

  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: ${({ error }) =>
    error ? `${theme.colors.red}` : `${theme.colors.gray4}`};
  font-size: 14px;
  line-height: 1;
`;

const InputStyled = styled.input<{ isError?: boolean; hasInput?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 49.5px;
  padding: 16px;
  transition: all 0.2s ease-out;
  color: ${theme.colors.black};
  border: 1px solid ${theme.colors.gray};
  background-clip: padding-box;
  border-radius: 6px;

  ${({ hasInput }) =>
    hasInput &&
    css`
      border-color: ${theme.colors.green};
    `}

  &:focus,
  &:active {
    border-color: ${({ isError }) =>
      isError ? `${theme.colors.red}` : `${theme.colors.black}`};
    outline: none;
  }

  ${({ isError }) =>
    isError &&
    css`
      margin-bottom: 0.6rem;
      border-color: ${theme.colors.red};
    `}
`;

export const ErrorSpan = styled.span`
  color: ${theme.colors.red};
  font-size: 12px;
  margin-bottom: 0.45rem;
  font-weight: 400;
`;
