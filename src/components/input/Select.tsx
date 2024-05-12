import { useState } from 'react';
import { ICountry, IState } from '../../utils/countries';
import styled, { css } from 'styled-components';
import { ErrorSpan } from './InputField';
import { Flex } from '../Flex';
import { ReactComponent as ArrowDown } from '../ProductSummary/icons/arrow_down.svg';
import { Box } from '../Box';
import { StorageKeys } from '../../utils/types';
import { caStates, usStates } from '../../utils/countries';
import { theme } from '../../styles/theme';

interface SelectorProps {
  watch: any;
  getValues: any;
  errors?: string;
  setValue: any;
  countries?: ICountry[];
  name?: any;
}

export const Selector = ({
  watch,
  getValues,
  setValue,
  errors,
  name,
  countries,
}: SelectorProps) => {
  const [stateSelected, setStateSelected] = useState(false);
  const isCountrySelector = name === StorageKeys.country;
  const handleChangeSelector = (event: any) => {
    const selectedState = event.target.value;
    setValue(name, selectedState);
    setStateSelected(true);
  };

  const States =
    getValues(StorageKeys.country) === 'Canada' ? caStates : usStates;
  const AdjustedsDataArray = isCountrySelector ? countries : States;

  const hasInput = !errors && !!watch(name);

  return (
    <>
      <FlexStyled flexDirection='column' justifyContent='flex-end'>
        <LabelContainer>
          {isCountrySelector ? 'Country' : 'State / Province'}
        </LabelContainer>
        <Box position='absolute' top='15px' right='15px'>
          <ArrowDown />
        </Box>
        <StyledSelect
          id='stateSelect'
          onChange={handleChangeSelector}
          isError={!!errors}
          hasInput={hasInput}
          value={getValues(name)}
        >
          {!stateSelected && !isCountrySelector && (
            <option>Select state</option>
          )}

          {AdjustedsDataArray?.map(({ value, label }, index) => {
            return (
              <>
                <option key={index} value={isCountrySelector ? label : value}>
                  {label}
                </option>
              </>
            );
          })}
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
  color: ${theme.colors.gray4};
  font-size: 12px;
`;

const StyledSelect = styled.select<{ isError?: boolean; hasInput?: boolean }>`
  width: 100%;
  height: 49.5px;
  padding: 11px;
  border: 1px solid ${theme.colors.gray};
  border-radius: 0.5rem;
  appearance: none;
  transition: all 0.2s ease-out;

  ${({ isError }) =>
    isError &&
    css`
      margin-bottom: 0.6rem;
      border: 1px solid ${theme.colors.red};
      color: ${theme.colors.red};
    `}

  ${({ hasInput }) =>
    hasInput &&
    css`
      border: 1px solid ${theme.colors.green};
    `}
`;

const OptionStyled = styled.option`
  color: ${theme.colors.gray4};
`;
