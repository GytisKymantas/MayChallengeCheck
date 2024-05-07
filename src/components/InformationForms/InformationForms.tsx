import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TInputFieldSchema,
  InputFieldSchema,
  StorageKeys,
  PlaceInfo,
} from '../../utils/types';
import { InputField } from '../input/InputField';
import { Flex } from '../Flex';
import { Box } from '../Box';
import styled from 'styled-components';
import {
  AddressAutocomplete,
  GOOGLE_GEOLOCATION_KEY,
} from '../input/AdressAutocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { getAddressDetails } from '../../utils/address-autocomplete';
import { countries, usStates } from '../../utils/countries';
import { getValue } from '@testing-library/user-event/dist/utils';
import { Selector } from '../input/Select';
import { ReactComponent as CardLogo } from './icons/cards.svg';
import { ReactComponent as Lock } from './icons/lock.svg';
import { tabletMF, useQuery } from '../../styles/useQuery';
import { constants } from 'fs/promises';

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
  const [selectedOption, setSelectedOption] = useState(null);
  const { isTabletMF } = useQuery();

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  console.log(errors, 'errors');
  console.log(getValues(), 'current values');
  console.log(getValues('city'), 'city');
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

  // const hiddenClick = (e: { shiftKey: boolean }) => {
  //   const date = new Date();

  //   if (e?.shiftKey) {
  //     setData({
  //       first_name: 'McColum',
  //       last_name: 'Broom',
  //       address_1: 'Best street 64',
  //       country: 'US',
  //       state: 'AL',
  //       city: 'Los Palangeles',
  //       postal_code: '12345',
  //       phone: '+1 234 568 4455',
  //       email: `qa+${date.getMonth()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}@kilo.health`,
  //       sms_marketing_agreement: true,
  //       privacy_policy_agreement: true,
  //       email_marketing_agreement: true,
  //     });
  //   }
  // };

  console.log(errors['state'], 'errors');
  const isAddressError = errors?.['addressAuto']?.message;

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <ContactContainer
          flexDirection='column'
          gap={isTabletMF ? '16px' : '12px'}
        >
          <H2>Contact</H2>
          <InputField
            name={StorageKeys.email}
            placeholder='Email Address'
            register={register}
            errors={errors?.['email']?.message}
            value={watch('email')}
          />
        </ContactContainer>

        <DeliveryContainer
          flexDirection='column'
          gap={isTabletMF ? '16px' : '12px'}
        >
          <H2>Delivery</H2>
          <Flex gap='12px'>
            <InputField
              name={StorageKeys.name}
              placeholder='First Name'
              register={register}
              errors={errors?.['name']?.message}
              value={watch('name')}
            />
            <InputField
              name={StorageKeys.lastName}
              placeholder='Last Name'
              register={register}
              errors={errors?.['lastName']?.message}
              value={watch('lastName')}
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
              value={watch('city')}
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
              value={watch('zip')}
            />
          </Flex>
          <InputField
            name={StorageKeys.country}
            placeholder='Country'
            register={register}
            errors={errors?.['country']?.message}
            value={watch('country')}
          />
        </DeliveryContainer>
      </Box>
      <PaymentContainer>
        <Box>
          <H2>Payment</H2>
          <StyledSpan fontSize='12px'>
            All transactions are secure and encrypted.
          </StyledSpan>
        </Box>

        <Flex flexDirection='column'>
          <RadioInputContainer justifyContent='space-between'>
            <Label id='label'>
              <RadioInput
                type='radio'
                value='option1'
                checked={selectedOption === 'option1'}
                onChange={(e: any) => handleOptionChange(e)}
              />
              Credit Card
            </Label>
            <CardLogo />
          </RadioInputContainer>
          <FlexStyled flexDirection='column' gap='12px'>
            <InputField
              name={StorageKeys.cardNumber}
              placeholder='Card Number'
              register={register}
              errors={errors?.['cardNumber']?.message}
              value={watch('cardNumber')}
            />
            <Flex gap='12px'>
              <InputField
                name={StorageKeys.expiration}
                placeholder='Expiration (MM/YY)'
                register={register}
                errors={errors?.['expirationDate']?.message}
                value={watch('expirationDate')}
              />
              <InputField
                name={StorageKeys.securityCode}
                placeholder='Security code'
                register={register}
                errors={errors?.['securityCode']?.message}
                value={watch('securityCode')}
              />
            </Flex>
            <InputField
              name={StorageKeys.nameOnCard}
              placeholder='Name on card'
              register={register}
              errors={errors?.['name']?.message}
              value={watch('name')}
            />
          </FlexStyled>
        </Flex>
      </PaymentContainer>

      <Box>
        <StyledButton type='submit'>complete order</StyledButton>
        <Flex justifyContent='center' gap='8px' alignItems='center'>
          <Lock />
          <StyledSpan>All transactions are secure and encrypted</StyledSpan>
        </Flex>
      </Box>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  max-width: 559px;
  margin-top: 16px;
  padding-bottom: 16px;

  @media ${tabletMF} {
    margin-top: 40px;
    margin-right: 38px;
    padding-bottom: 24px;

    /* margin-right: 38px; */
  }
`;

const ContactContainer = styled(Flex)`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 24px 16px;
  @media ${tabletMF} {
    padding: 0;
    border: none;
  }
`;

const DeliveryContainer = styled(Flex)`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px;
  @media ${tabletMF} {
    padding: 32px 0;
    border: none;
  }
`;

const PaymentContainer = styled(Box)`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px;
  @media ${tabletMF} {
    padding: 0;
    border: none;
  }
`;

const H2 = styled.h2`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 0;
`;

const FlexStyled = styled(Flex)`
  padding: 12px 12px 12px 12px;
  background: #fafafa;
`;

const RadioInputContainer = styled(Flex)`
  border-radius: 6px 6px 0px 0px;
  background: #f0f5ff;
  border: 1px solid #3362ab;
  padding: 16px;
  margin-top: 12px;

  @media ${tabletMF} {
    margin-top: 16px;
  }
`;

const RadioInput = styled.input`
  margin-right: 16px;
  width: 20px;
  height: 20px;
`;

const StyledButton = styled.button`
  width: 100%;
  border: none;
  text-transform: uppercase;
  padding: 16px 32px;
  background: #009900;
  color: White;
  border-radius: 4px;
  font-weight: 600;
  margin: 16px 0;
  cursor: pointer;
  box-shadow: 0px 4px 10px 0px rgba(67, 40, 16, 0.24);

  /* Color emphasis on hover */
  &:hover {
    background: #007700;
  }

  /* Color emphasis when active */
  &:active {
    background: #00cc00;
  }
`;

const StyledSpan = styled.span<{ fontSize?: string }>`
  color: #828282;
  font-size: ${({ fontSize }) => fontSize || '14px'};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
