import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {
  Control,
  Controller,
  UseFormGetValues,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form';
import { getAddressDetails } from '../../utils/address-autocomplete';
import { countries } from '../../utils/countries';
import { ErrorSpan } from './InputField';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { theme } from '../../styles/theme';
import { TInputFieldSchema } from '../../utils/types';

interface AddressAutoProps {
  control: Control<TInputFieldSchema>;
  isAddressError?: string;
  initialData?: string;
  getValues: UseFormGetValues<TInputFieldSchema>;
  setValue: UseFormSetValue<TInputFieldSchema>;
  setError: UseFormSetError<TInputFieldSchema>;
}

export const GOOGLE_GEOLOCATION_KEY = 'AIzaSyAiAZ_gPFKxGR39WiYMIrlV2p0YjXWgx0c';

export const AddressAutocomplete = ({
  control,
  setValue,
  isAddressError,
  getValues,
  setError,
  initialData,
}: AddressAutoProps) => {
  const [data, setData] = useState(initialData);
  const [key, setKey] = useState<any>(new Date().getTime());
  const handleAddressSelect = async () => {
    const details = await getAddressDetails(getValues('address'));
    const country = countries.find(
      (country) => country?.value === details?.country
    );

    const state = country?.states?.find(
      (state) => state?.value === details?.state
    );
    if (details && country && state) {
      setValue('zip', details.postalCode ?? '');
      setValue('country', country.label ?? '');
      setValue('city', details.city ?? '');
      setValue('state', state.value ?? '');
      setError('address', {
        type: 'manual',
        message: '',
      });
      setError('city', {
        type: 'manual',
        message: '',
      });
      setError('state', {
        type: 'manual',
        message: '',
      });
      setError('zip', {
        type: 'manual',
        message: '',
      });
    }
  };

  const handleInputChange = (
    inputValue: string,
    { action }: { action: string }
  ) => {
    if (action === 'input-change') {
      setValue('address', inputValue);
      setData(inputValue);
    }
  };

  const getSelectStyles = (isError?: boolean, hasInput?: boolean) => ({
    control: (provided: any) => ({
      ...provided,
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      padding: '8.5px 8.5px 8.5px 12px',
      transition: 'all 0.2s ease-out',
      color: isError ? `${theme.colors.red}` : `${theme.colors.black}`,
      border:
        hasInput && !isError
          ? `1px solid ${theme.colors.green}`
          : isError
          ? `1px solid ${theme.colors.red}`
          : `1px solid ${theme.colors.gray}`,
      borderRadius: '0.5rem',
    }),
  });
  console.log(isAddressError, 'isAddressError inside address');

  return (
    <Controller
      control={control}
      name='address'
      render={({ field: { onChange } }) => {
        const handleChange = (selectedAddress: any) => {
          onChange(selectedAddress);
          handleAddressSelect();
          setKey(new Date().getTime());
          setValue('address', selectedAddress.label);
          setData(selectedAddress.label);
        };

        return (
          <Box position='relative'>
            <LabelContainer>
              {' '}
              <Label
                hasInput={!!data || !!initialData}
                isAddress={true}
                error={!!isAddressError}
              >
                Address{' '}
              </Label>
            </LabelContainer>

            <GooglePlacesAutocomplete
              apiKey={GOOGLE_GEOLOCATION_KEY}
              apiOptions={{ language: 'en' }}
              autocompletionRequest={{
                types: ['address'],
                componentRestrictions: {
                  country: ['us', 'ca'],
                },
              }}
              selectProps={{
                // @ts-ignore
                key,
                value: data
                  ? ({ label: data, value: data } as any)
                  : ('' as any),
                inputValue: initialData,
                noOptionsMessage: () => null,
                onChange: handleChange,
                onInputChange: handleInputChange,
                placeholder: '',
                styles: getSelectStyles(!!isAddressError, !!initialData),

                components: {
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                },
              }}
            />
            {!!isAddressError && <ErrorSpan>{isAddressError}</ErrorSpan>}
          </Box>
        );
      }}
    />
  );
};

export const LabelContainer = styled(Flex)`
  width: 100% !important;
  position: absolute;
  top: -32.6px;
  left: 0;
`;

const Label = styled.label<{
  hasInput?: boolean;
  error: boolean;
  isAddress?: boolean;
}>`
  z-index: 4;
  pointer-events: none;
  transform: ${(props) =>
    props.hasInput
      ? 'translate(16px, 35px) scale(0.8)'
      : 'translate(18px, 50px) scale(1)'};
  transform-origin: left;

  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: ${({ error }) =>
    error ? `${theme.colors.red}` : `${theme.colors.gray4}`};
  line-height: 1;
`;
