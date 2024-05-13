import { geocodeByAddress } from "react-google-places-autocomplete";
  
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
  
    return {
      postalCode,
      city,
      state,
      country,
    };
  };
  