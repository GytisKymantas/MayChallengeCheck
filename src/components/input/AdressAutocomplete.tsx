import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Controller } from 'react-hook-form';
import { getAddressDetails } from '../../utils/address-autocomplete';
import { countries } from '../../utils/countries';
import { ErrorSpan } from './InputField';

interface AddressAutoProps {
  control: any;
  // setKey: any;
  setValue: any;
  isAddressError?: string; // Assuming isAddressError is a string or null
  getValues: any;
  // setData?: any;
  // data?: any;
}

export const GOOGLE_GEOLOCATION_KEY = 'AIzaSyAiAZ_gPFKxGR39WiYMIrlV2p0YjXWgx0c';

export const AddressAutocomplete = ({
  control,
  // setKey,
  setValue,
  isAddressError,
  getValues,
}: // setData,
// data,
AddressAutoProps) => {
  const [data, setData] = useState();
  const [key, setKey] = useState<any>(new Date().getTime());
  const handleAddressSelect = async () => {
    const details = await getAddressDetails(getValues('addressAuto'));

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
      setValue('state', state.label ?? '');

      // setData((prev) => ({
      //   ...prev,
      //   country: country?.label ?? '',
      //   state: state?.label ?? '',
      //   city: details?.city ?? '',
      //   zip: details?.postalCode ?? '',
      // }));
    }
  };

  const handleInputChange = (
    inputValue: any,
    { action }: { action: string }
  ) => {
    if (action === 'input-change') {
      setValue('address', inputValue);
      console.log(inputValue, 'input valueezz');
      setData(inputValue);
    }
  };

  const getSelectStyles = (isError?: boolean) => ({
    control: (provided: any, state: { isFocused: boolean }) => ({
      ...provided,
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      padding: '10.5px',
      transition: 'all 0.2s ease-out',
      color: isError ? 'red' : 'black',
      border: isError ? '1px solid red' : '1px solid #e0e0e0',
      backgroundClip: 'padding-box',
      borderRadius: '0.5rem',
    }),
  });
  return (
    <Controller
      control={control}
      name='addressAuto'
      render={({ field: { value: bam, onChange } }) => {
        const handleChange = (selectedAddress: any) => {
          onChange(selectedAddress);
          handleAddressSelect();
          setKey(new Date().getTime());
          setValue('address', selectedAddress.label);
          setData(selectedAddress.label);
        };

        return (
          <>
            <GooglePlacesAutocomplete
              apiKey={GOOGLE_GEOLOCATION_KEY}
              apiOptions={{ language: 'en' }}
              autocompletionRequest={{
                types: ['address'],
                componentRestrictions: {
                  country: 'us',
                },
              }}
              selectProps={{
                // @ts-ignore
                key,
                value: data
                  ? ({ label: data, value: data } as any)
                  : ('' as any),
                inputValue: data as any,
                noOptionsMessage: () => null,
                onChange: handleChange,
                onInputChange: handleInputChange,
                placeholder: 'Address',
                styles: getSelectStyles(!!isAddressError),

                components: {
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                },
              }}
            />
            {!!isAddressError && <ErrorSpan>{isAddressError}</ErrorSpan>}
          </>
        );
      }}
    />
  );
};
