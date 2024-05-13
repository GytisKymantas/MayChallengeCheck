import { ICountry, IState } from '../../utils/countries';
import styled, { css } from 'styled-components';
import { Flex } from '../Flex';
import { ReactComponent as ArrowDown } from '../ProductSummary/icons/arrow_down.svg';
import { Box } from '../Box';
import {
  StorageKeys,
  TInputFieldKey,
  TInputFieldSchema,
} from '../../utils/types';
import { caStates, usStates } from '../../utils/countries';
import { theme } from '../../styles/theme';
import {
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { boolean } from 'zod';

interface SelectorProps {
  watch: UseFormWatch<TInputFieldSchema>;
  getValues: UseFormGetValues<TInputFieldSchema>;
  setValue: UseFormSetValue<TInputFieldSchema>;
  register: any;
  name: TInputFieldKey;
  errors?: any;
  countries?: ICountry[];
}

export const Selector = ({
  watch,
  getValues,
  setValue,
  register,
  errors,
  name,
  countries,
}: SelectorProps) => {
  const isCountrySelector = name === StorageKeys.country;

  const States =
    getValues(StorageKeys.country) === 'Canada' ? caStates : usStates;
  const AdjustedsDataArray = isCountrySelector ? countries : States;

  const hasInput = !!getValues(name);

  return (
    <>
      <FlexStyled
        flexDirection='column'
        justifyContent='flex-end'
        hasInput={hasInput}
      >
        <LabelContainer isError={!!errors}>
          {isCountrySelector ? 'Country' : 'State / Province'}
        </LabelContainer>
        <Box position='absolute' top='15px' right='15px'>
          <ArrowDown />
        </Box>
        <StyledSelect
          {...register(name)}
          isError={!!errors}
          hasInput={hasInput}
          value={getValues(name)}
        >
          {!hasInput && <option value=''>Select state</option>}

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

const FlexStyled = styled(Flex)<{ hasInput?: boolean }>`
  height: 49.5px;

  position: relative;
`;

export const LabelContainer = styled(Flex)<{ isError?: boolean }>`
  width: 100% !important;
  position: absolute;
  top: 2.6px;
  left: 12px;
  color: ${theme.colors.gray4};
  ${({ isError }) =>
    isError &&
    css`
      color: ${theme.colors.red};
    `}
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
      border: 1px solid ${theme.colors.red};
      color: ${theme.colors.red};
    `}

  ${({ hasInput }) =>
    hasInput &&
    css`
      border: 1px solid ${theme.colors.green};
    `}
`;

export const ErrorSpan = styled.span`
  position: absolute;
  color: ${theme.colors.red};
  font-size: 12px;
  font-weight: 400;
  bottom: -22px;
`;
