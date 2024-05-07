import { useState } from 'react';
import { IState } from '../../utils/countries';
import styled, { css } from 'styled-components';
import { ErrorSpan } from './InputField';
import { Flex } from '../Flex';
import { ReactComponent as ArrowDown } from '../ProductSummary/icons/arrow_down.svg';
import { Box } from '../Box';

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
  const [stateSelected, setStateSelected] = useState(false);
  const handleChangeSelector = (event: any) => {
    const selectedState = event.target.value;
    setValue('state', selectedState);
    setStateSelected(true);
  };

  const AdjustedStatesArray = states.filter(
    (state) => state.value !== getValues('state')
  );
  const hasInput = !errors && !!watch('state');

  return (
    <>
      <FlexStyled flexDirection='column' justifyContent='flex-end'>
        <LabelContainer>State / Province</LabelContainer>
        <Box position='absolute' top='15px' right='15px'>
          <ArrowDown />
        </Box>
        <StyledSelect
          id='stateSelect'
          onChange={handleChangeSelector}
          isError={!!errors}
          hasInput={hasInput}
        >
          {AdjustedStatesArray.map(({ value, label }, index) => (
            <>
              <option key={index} value={value}>
                {label}
              </option>
            </>
          ))}
        </StyledSelect>
        {!!errors && <ErrorSpan>{errors}</ErrorSpan>}
      </FlexStyled>
    </>
  );
};

const FlexStyled = styled(Flex)`
  position: relative;
`;

export const LabelContainer = styled(Flex)`
  width: 100% !important;
  position: absolute;
  top: 2.6px;
  left: 12px;
  color: #828282;
  font-size: 12px;
`;

const StyledSelect = styled.select<{ isError?: boolean; hasInput?: boolean }>`
  width: 100%;
  height: 49.5px;
  padding: 11px;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  appearance: none;
  transition: all 0.2s ease-out;

  ${({ isError }) =>
    isError &&
    css`
      margin-bottom: 0.6rem;
      border: 1px solid red;
      color: red;
    `}

  ${({ hasInput }) =>
    hasInput &&
    css`
      border: 1px solid green;
    `}
`;

const OptionStyled = styled.option`
  color: #828282;
`;
