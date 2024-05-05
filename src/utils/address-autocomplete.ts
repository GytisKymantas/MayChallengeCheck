import { geocodeByAddress } from "react-google-places-autocomplete";

const getStreetAddress = (
    street?: string,
    streetNumber?: string,
    apt?: string,
  ) => {
    let address = '';
  
    if (street) {
      address = street;
    }
  
    if (address && streetNumber) {
      address = `${streetNumber} ${address}`;
    }
  
    if (address && apt) {
      address = `${address} ${apt}`;
    }
  
    return address;
  };

const parseStreet = (address: string) => {
    const commaInx = address.indexOf(',');
  
    if (commaInx !== -1) {
      return address.slice(0, commaInx);
    }
  
    return '';
  };
  

export const getAddressDetails = async (selectedAddress?: any) => {
    if (!selectedAddress) {
      return null;
    }
    const addressDetails = (await geocodeByAddress(selectedAddress.label))?.[0];
  
    if (!addressDetails) {
      return null;
    }
  
    const country = addressDetails?.address_components?.find(item =>
      item?.types?.includes('country'),
    )?.short_name;
  
    const state = addressDetails?.address_components?.find(item =>
      item?.types?.includes('administrative_area_level_1'),
    )?.short_name;
  
    const city = addressDetails?.address_components?.find(item =>
      item?.types?.includes('locality'),
    )?.long_name;
  
    const postalCode = addressDetails?.address_components?.find(item =>
      item?.types?.includes('postal_code'),
    )?.long_name;
  
    const streetNumber = addressDetails?.address_components?.find(item =>
      item?.types?.includes('street_number'),
    )?.long_name;
  
    const street = addressDetails?.address_components?.find(item =>
      item?.types?.includes('route'),
    )?.long_name;
  
    const apt = addressDetails?.address_components?.find(item =>
      item?.types?.includes('subpremise'),
    )?.long_name;
  
    return {
      // address:
      //   parseStreet(selectedAddress) ||
      //   getStreetAddress(street, streetNumber, apt),
      postalCode,
      city,
      state,
      country,
    };
  };
  