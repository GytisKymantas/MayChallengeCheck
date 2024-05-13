import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TInputFieldSchema,
  InputFieldSchema,
  StorageKeys,
} from '../../utils/types';
import { InputField } from '../input/InputField';
import { Flex } from '../Flex';
import { Box } from '../Box';
import styled from 'styled-components';
import { AddressAutocomplete } from '../input/AdressAutocomplete';

import { countries } from '../../utils/countries';
import { Selector } from '../input/Select';
import { ReactComponent as CardLogo } from './icons/cards.svg';
import { ReactComponent as Lock } from './icons/lock.svg';
import { tabletMF, useQuery } from '../../styles/useQuery';
import { setToLocalStorage } from '../../utils/storageHandler';

import { CardInputField } from '../input/CardInputField';
import { theme } from '../../styles/theme';

export const InformationForms = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    setError,
    clearErrors,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TInputFieldSchema>({
    resolver: zodResolver(InputFieldSchema),
    defaultValues: {
      country: 'United States',
    },
  });
  const [selectedOption, setSelectedOption] = useState('option1');

  const { isTabletMF } = useQuery();

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const onSubmit = (data: TInputFieldSchema) => {
    const serializedObject = JSON.stringify(data);
    setToLocalStorage('data', serializedObject);
  };

  const isAddressError = errors?.[StorageKeys.address]?.message;

  const hiddenClick = (e: { shiftKey: boolean }) => {
    if (e?.shiftKey) {
      setValue('city', 'Houston');
      setValue('country', 'United States');
      setValue('name', 'Todd');
      setValue('lastName', 'Baker');
      setValue('email', 'TestEmail@gmail.com');
      setValue('cardNumber', '4242424242424242');
      setValue('address', 'Easy Street 1');
      setValue('zip', '49416');
      setValue('nameOnCard', 'Todd Baker');
      setValue('expirationDate', '11/24');
      setValue('securityCode', '112');
      setValue('state', 'NY');
      clearErrors();
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div onClick={hiddenClick}>Shift+click to prefill</div>
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
            errors={errors?.[StorageKeys.email]?.message}
            value={watch(StorageKeys.email)}
            type={StorageKeys.email}
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
              errors={errors?.[StorageKeys.name]?.message}
              value={watch(StorageKeys.name)}
            />
            <InputField
              name={StorageKeys.lastName}
              placeholder='Last Name'
              register={register}
              errors={errors?.[StorageKeys.lastName]?.message}
              value={watch(StorageKeys.lastName)}
            />
          </Flex>

          <AddressAutocomplete
            control={control}
            setValue={setValue}
            isAddressError={isAddressError}
            initialData={watch('address')}
            getValues={getValues}
            setError={setError}
          />

          {!isTabletMF && (
            <InputField
              name={StorageKeys.city}
              placeholder='City'
              register={register}
              errors={errors?.[StorageKeys.city]?.message}
              value={watch(StorageKeys.city)}
              watch={watch}
            />
          )}
          <Flex gap='12px'>
            {isTabletMF && (
              <InputField
                name={StorageKeys.city}
                placeholder='City'
                register={register}
                errors={errors?.[StorageKeys.city]?.message}
                value={watch(StorageKeys.city)}
              />
            )}

            <Selector
              watch={watch}
              name={StorageKeys.state}
              register={register}
              getValues={getValues}
              setValue={setValue}
              errors={errors?.[StorageKeys.state]?.message}
            />
            <InputField
              name={StorageKeys.zip}
              placeholder='Zip / Postal Code'
              register={register}
              errors={errors?.[StorageKeys.zip]?.message}
              value={watch(StorageKeys.zip)}
            />
          </Flex>
          <Selector
            watch={watch}
            countries={countries}
            name={StorageKeys.country}
            register={register}
            getValues={getValues}
            setValue={setValue}
            errors={errors?.[StorageKeys.country]?.message}
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
            <CardInputField
              name={StorageKeys.cardNumber}
              placeholder='Card Number'
              register={register}
              errors={errors?.[StorageKeys.cardNumber]?.message}
              value={watch(StorageKeys.cardNumber)}
              setValue={setValue}
              getValues={getValues}
            />
            <Flex gap='12px'>
              <CardInputField
                name={StorageKeys.expirationDate}
                placeholder='Expiration (MM/YY)'
                register={register}
                errors={errors?.[StorageKeys.expirationDate]?.message}
                value={watch(StorageKeys.expirationDate)}
                setValue={setValue}
                getValues={getValues}
              />
              <CardInputField
                name={StorageKeys.securityCode}
                placeholder='Security code'
                register={register}
                errors={errors?.[StorageKeys.securityCode]?.message}
                value={watch(StorageKeys.securityCode)}
                setValue={setValue}
                getValues={getValues}
              />
            </Flex>

            <CardInputField
              name={StorageKeys.nameOnCard}
              placeholder='Name on card'
              register={register}
              errors={errors?.[StorageKeys.nameOnCard]?.message}
              value={watch(StorageKeys.nameOnCard)}
              setValue={setValue}
              getValues={getValues}
            />
          </FlexStyled>
        </Flex>
      </PaymentContainer>

      <ButtonContainer>
        <StyledButton type='submit'>
          {isSubmitting ? 'loading' : 'complete order'}
        </StyledButton>
        <Flex justifyContent='center' gap='8px' alignItems='center'>
          <Lock />
          <StyledSpan>All transactions are secure and encrypted</StyledSpan>
        </Flex>
      </ButtonContainer>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  max-width: 559px;
  margin-left: auto;
  margin-right: auto;

  @media ${tabletMF} {
    margin-top: 40px;
    margin-right: 38px;
    padding-bottom: 24px;
  }
`;

const ContactContainer = styled(Flex)`
  border-bottom: 1px solid ${theme.colors.gray};
  padding: 24px 16px;
  margin-bottom: 16px;
  background: ${theme.colors.white};
  @media ${tabletMF} {
    padding: 0;
    border: none;
  }
`;

const DeliveryContainer = styled(Flex)`
  border-top: 1px solid ${theme.colors.gray};
  border-bottom: 1px solid ${theme.colors.gray};
  padding: 16px;
  margin: 16px 0;
  background: ${theme.colors.white};
  @media ${tabletMF} {
    padding: 32px 0;
    border: none;
  }
`;

const PaymentContainer = styled(Box)`
  border-top: 1px solid ${theme.colors.gray};
  padding: 16px;
  margin-top: 16px;
  background: ${theme.colors.white};
  @media ${tabletMF} {
    padding: 0;
    border: none;
  }
`;

const ButtonContainer = styled(Box)`
  background: ${theme.colors.white};
  padding: 0 16px 16px 16px;
`;

const H2 = styled.h2`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 0;
`;

const FlexStyled = styled(Flex)`
  padding: 12px 12px 12px 12px;
  background: ${theme.colors.gray2};
  border: 1px solid ${theme.colors.gray};
`;

const RadioInputContainer = styled(Flex)`
  border-radius: 6px 6px 0px 0px;
  background: ${theme.colors.gray3};
  border: 1px solid ${theme.colors.blue};
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
  background: ${theme.colors.green};
  color: ${theme.colors.white};
  border-radius: 4px;
  font-weight: 600;
  margin: 16px 0;
  cursor: pointer;
  box-shadow: 0px 4px 10px 0px rgba(67, 40, 16, 0.24);

  &:hover {
    background: ${theme.colors.green2};
  }

  &:active {
    background: ${theme.colors.green3};
  }
`;

const StyledSpan = styled.span<{ fontSize?: string }>`
  color: ${theme.colors.gray4};
  font-size: ${({ fontSize }) => fontSize || '14px'};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
