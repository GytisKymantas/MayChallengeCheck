export interface IState {
    label: string;
    value: string;
    shippingCost?: number;
    isExpressShipping?: boolean;
  }
  
  interface ICountry {
    label: string;
    value: string;
    states?: IState[];
    shippingCost?: number;
  }
  
  export const usStates: IState[] = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'AE', label: 'Armed forces Europe' },
    { value: 'AP', label: 'Armed forces Pacific' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut', isExpressShipping: true },
    { value: 'DE', label: 'Delaware', isExpressShipping: true },
    { value: 'DC', label: 'District of Columbia', isExpressShipping: true },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia', isExpressShipping: true },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois', isExpressShipping: true },
    { value: 'IN', label: 'Indiana', isExpressShipping: true },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland', isExpressShipping: true },
    { value: 'MA', label: 'Massachusetts', isExpressShipping: true },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey', isExpressShipping: true },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York', isExpressShipping: true },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania', isExpressShipping: true },
    { value: 'RI', label: 'Rhode Island', isExpressShipping: true },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas', isExpressShipping: true },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia', isExpressShipping: true },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin', isExpressShipping: true },
    { value: 'WY', label: 'Wyoming' },
  ];
  
  export const caStates: IState[] = [
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador' },
    { value: 'NT', label: 'Northwest Territories' },
    { value: 'NS', label: 'Nova Scotia' },
    { value: 'NU', label: 'Nunavut' },
    { value: 'ON', label: 'Ontario' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'QC', label: 'Quebec' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'YT', label: 'Yukon' },
  ];
  
  export const countries: ICountry[] = [
    { value: 'AT', label: 'Austria' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'DE', label: 'Germany' },
    { value: 'US', label: 'United States', states: usStates },
    { value: 'CA', label: 'Canada', states: caStates },
    { value: 'BE', label: 'Belgium' },
    { value: 'CZ', label: 'Czech Republic' },
    { value: 'FR', label: 'France' },
    { value: 'IT', label: 'Italy' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'DK', label: 'Denmark' },
    { value: 'LU', label: 'Luxembourg' },
    { value: 'SE', label: 'Sweden' },
    { value: 'FI', label: 'Finland' },
    { value: 'BG', label: 'Bulgaria' },
    { value: 'HR', label: 'Croatia' },
    { value: 'CY', label: 'Cyprus' },
    { value: 'EE', label: 'Estonia' },
    { value: 'GR', label: 'Greece' },
    { value: 'HU', label: 'Hungary' },
    { value: 'IE', label: 'Ireland' },
    { value: 'LV', label: 'Latvia' },
    { value: 'LT', label: 'Lithuania' },
    { value: 'MT', label: 'Malta' },
    { value: 'PL', label: 'Poland' },
    { value: 'PT', label: 'Portugal' },
    { value: 'RO', label: 'Romania' },
    { value: 'SK', label: 'Slovakia' },
    { value: 'SI', label: 'Slovenia' },
    { value: 'ES', label: 'Spain' },
  ];
  
  export const countriesWithNumericZipcodes = ['AU', 'US'];
  
  export const convertStateNameToAbbreviation = (stateName: string | null) =>
    usStates.find(state => state.label === stateName)?.value || '';
  