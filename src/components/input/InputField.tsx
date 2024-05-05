import React from 'react';
import { FieldError } from 'react-hook-form';
import styled, { css } from 'styled-components';

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
  watch,
  setValue,
}: InputFieldProps) => {
  return (
    <>
      <InputStyled
        isError={true}
        {...register(name)}
        // onChange={(e: any) => setValue(name, e.target.value)}
        placeholder={placeholder}
      />
      {/* <p>{errors}</p> */}
      {errors && <ErrorSpan>{errors}</ErrorSpan>}
    </>
  );
};

const Wrapper = styled.div<{ isError?: boolean }>`
  ${({ isError }) =>
    isError &&
    css`
      margin-bottom: 0.6rem;
      border-color: black;
    `}
`;

const InputStyled = styled.input<{ isError?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 16px;
  transition: all 0.2s ease-out;
  color: black;
  border: 1px solid #e0e0e0;
  background-clip: padding-box;
  border-radius: 0.5rem;

  &::placeholder {
    color: #828282;
  }

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
  font-size: 1.4rem;
  margin-bottom: 0.45rem;
  font-weight: 400;
`;
