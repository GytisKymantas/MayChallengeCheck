import React from 'react';
import { IState } from '../../utils/countries';
import styled, { css } from 'styled-components';
import { FieldError } from 'react-hook-form';

interface SelectorProps {
  states: IState[];
  watch: any;
  getValues: any;
  errors?: string;
  setValue: any;
}

export const Selector = ({
  states,
  watch,
  getValues,
  setValue,
  errors,
}: SelectorProps) => {
  const handleChangeSelector = (event: any) => {
    const selectedState = event.target.value;
    setValue('state', selectedState);
    console.log(selectedState, 'selected state');
  };

  const AdjustedStatesArray = states.filter(
    (state) => state.value !== getValues('state')
  );
  console.log(errors, 'in selector');

  return (
    <StyledSelect
      id='stateSelect'
      onChange={handleChangeSelector}
      isError={!!errors}
    >
      <OptionStyled>
        {watch('state') ? getValues('state') : 'State/Province'}
      </OptionStyled>
      {AdjustedStatesArray.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select<{ isError?: boolean }>`
  width: 100%;
  height: 100%;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;

  transition: all 0.2s ease-out;
  ${({ isError }) =>
    isError &&
    css`
      margin-bottom: 0.6rem;
      border: 1px solid red;
      color: red;
    `}
`;

const OptionStyled = styled.option`
  color: #828282;
`;
