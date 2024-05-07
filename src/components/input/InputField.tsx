import styled, { css } from 'styled-components';
import { Flex } from '../Flex';

interface InputFieldProps {
  name: string;
  placeholder: String;
  register: any;
  errors?: any;
  value?: string;
  setValue?: any;
  watch?: any;
}

export const InputField = ({
  name,
  placeholder,
  register,
  errors,
  value,
}: InputFieldProps) => {
  const hasInput = !!value && !errors;
  console.log(value, 'has input');
  return (
    <FlexStyled flexDirection='column'>
      <LabelContainer>
        <Label hasInput={hasInput} error={!!errors}>
          {placeholder}
        </Label>
      </LabelContainer>

      <InputStyled isError={!!errors} hasInput={hasInput} {...register(name)} />

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
  color: ${({ error }) => (error ? 'red' : '#828282')};
  font-size: 14px;
  line-height: 1;
`;

const InputStyled = styled.input<{ isError?: boolean; hasInput?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 49.5px;
  padding: 16px;
  transition: all 0.2s ease-out;
  color: black;
  border: 1px solid #e0e0e0;
  background-clip: padding-box;
  border-radius: 6px;
  /* font-size:14px; */

  ${({ hasInput }) =>
    hasInput &&
    css`
      border-color: green;
    `}

  /* &::placeholder {
    color: #828282;
    ${({ isError }) =>
      isError &&
      css`
        color: red;
      `}
  } */

  &:focus,
  &:active {
    border-color${({ isError }) => (isError ? 'red' : 'black')};
    outline: none;
    
  }

  ${({ isError }) =>
    isError &&
    css`
      margin-bottom: 0.6rem;
      border-color: red;
    `}
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 0.45rem;
  font-weight: 400;
`;
