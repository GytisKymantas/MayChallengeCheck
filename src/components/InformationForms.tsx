import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TInputFieldSchema,
  InputFieldSchema,
  StorageKeys,
  PlaceInfo,
} from '../utils/types';
import { InputField } from './input/InputField';
import { Flex } from './Flex';
import { Box } from './Box';
import styled from 'styled-components';
import {
  AddressAutocomplete,
  GOOGLE_GEOLOCATION_KEY,
} from './input/AdressAutocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { getAddressDetails } from '../utils/address-autocomplete';
import { countries, usStates } from '../utils/countries';
import { getValue } from '@testing-library/user-event/dist/utils';
import { Selector } from './input/Select';

export const InformationForms = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TInputFieldSchema>({
    resolver: zodResolver(InputFieldSchema),
  });

  console.log(errors, 'errors');
  console.log(getValues(), 'current values');

  const onSubmit = async (data: any) => {
    console.log(data, 'hello');
    // if (
    //   getValues(StorageKeys.email) === Credentials.AdminUsername &&
    //   getValues(StorageKeys.password) === Credentials.PasswordUsername
    // ) {
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   sessionStorage.setItem(
    //     StorageKeys.loggedInUser,
    //     getValues(StorageKeys.email)
    //   );
    //   router.push(Routes.Home);
    // } else {
    //   toast.error("Incorrect email or password'");
    // }
  };

  console.log(errors['state'], 'errors');
  const isAddressError = errors?.['addressAuto']?.message;

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Flex flexDirection='column' gap='16px'>
          <H2>Contact</H2>
          <InputField
            name={StorageKeys.email}
            placeholder='Email Address'
            register={register}
            // setValue={setValue}
            errors={errors?.['email']?.message}
          />
        </Flex>

        <Flex flexDirection='column' gap='16px'>
          <H2>Delivery</H2>
          <Flex gap='12px'>
            <InputField
              name={StorageKeys.name}
              placeholder='First Name'
              register={register}
              errors={errors?.['name']?.message}
              // setValue={setValue}
              watch={watch}
            />
            <InputField
              name={StorageKeys.lastName}
              placeholder='Last Name'
              register={register}
              errors={errors?.['lastName']?.message}
            />
          </Flex>

          <AddressAutocomplete
            control={control}
            setValue={setValue}
            isAddressError={isAddressError}
            getValues={getValues}
          />

          <Flex gap='12px'>
            <InputField
              name={StorageKeys.city}
              placeholder='City'
              register={register}
              errors={errors?.['city']?.message}
              value={getValues('city')}
            />

            <Selector
              watch={watch}
              states={usStates}
              getValues={getValues}
              setValue={setValue}
              errors={errors?.['state']?.message}
            />
            <InputField
              name={StorageKeys.zip}
              placeholder='Zip / Postal Code'
              register={register}
              errors={errors?.['zip']?.message}
              value={getValues('zip')}
            />
          </Flex>
          <InputField
            name={StorageKeys.country}
            placeholder='Country'
            register={register}
            errors={errors?.['country']?.message}
            value={getValues('country')}
          />
        </Flex>
      </Box>
      <Box>
        <Box>
          <H2>Payment</H2>
          <p>All transactions are secure and encrypted.</p>
        </Box>

        <Flex flexDirection='column' gap='15px'>
          <InputField
            name={StorageKeys.cardNumber}
            placeholder='Card Number'
            register={register}
            errors={errors?.['cardNumber']?.message}
          />
          <Flex gap='16px'>
            <InputField
              name={StorageKeys.expiration}
              placeholder='Expiration (MM/YY)'
              register={register}
              errors={errors?.['expirationDate']?.message}
            />
            <InputField
              name={StorageKeys.securityCode}
              placeholder='Security code'
              register={register}
              errors={errors?.['securityCode']?.message}
            />
          </Flex>
          <InputField
            name={StorageKeys.nameOnCard}
            placeholder='Name on card'
            register={register}
            errors={errors?.['name']?.message}
          />
        </Flex>
      </Box>

      <button type='submit'>Submit</button>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  max-width: 559px;
`;

const H2 = styled.h2`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 0;
`;
