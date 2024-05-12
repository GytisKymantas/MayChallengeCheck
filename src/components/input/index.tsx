import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

interface InputProps extends PropsWithChildren<{}> {
  value: string;
  name: string;
  placeholder: string;
  isError?: boolean;
  errorMsg?: string;
  wrapperClassName?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  [key: string]: unknown;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  id?: string;
  dataTestId?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  name,
  placeholder,
  isError,
  errorMsg,
  onChange,
  isRequired,
  children,
  id,
  dataTestId,
  ...others
}) => {
  return (
    <Wrapper isError={isError || !!errorMsg}>
      <InputField
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        id={id}
        data-testId={dataTestId}
        isError={isError}
        {...others}
      />

      {!!errorMsg && <Error>{errorMsg}</Error>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isError?: boolean }>`
  ${({ isError }) =>
    isError &&
    css`
      margin-bottom: 0.6rem;
      border-color: ${theme.colors.black};
    `}
`;

const InputField = styled.input<{ isError?: boolean }>`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  transition: all 0.2s ease-out;
  color: ${theme.colors.black};
  border: 1px solid ${theme.colors.black};
  background-clip: padding-box;
  border-radius: 0.5rem;

  &:focus,
  &:active {
    border-color: ${theme.colors.black};
    box-shadow: 0 0 0 1px ${theme.colors.black};
    outline: none;
  }

  ${({ isError }) =>
    isError &&
    css`
      margin-bottom: 0.6rem;
      border-color: ${theme.colors.red};
    `}
`;

const Error = styled.div`
  color: ${theme.colors.red};
  font-size: 1.4rem;
  margin-bottom: 0.45rem;
  font-weight: 400;
`;
