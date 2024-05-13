import { z } from "zod";

export const InputFieldSchema = z.object({
  email: z.string().min(1, 'Field is required').email('Invalid email format').max(50, 'Email must be at most 50 characters'),
  name: z.string().min(2, 'Field is required').max(50, 'Name must be at most 50 characters'),
  lastName: z.string().min(2, 'Field is required').max(50, 'Last name must be at most 50 characters'),
  address: z.string().min(5, 'Field is required').max(100, 'Address must be at most 100 characters'),
  city: z.string().min(2, 'Field is required').max(50, 'City must be at most 50 characters'),
  state: z.string().min(2, 'Field is required').max(50, 'State must be at most 50 characters'),
  zip: z.string().min(4, 'Field is required').max(20, 'Zip code must be at most 20 characters'),
  country: z.string().min(2, 'Field is required').max(50, 'Country must be at most 50 characters'),
  cardNumber: z.string().min(1,'Field is required').max(16,'Must not exceed 16 characters'),
  expirationDate: z.string().min(5,'Field is required').max(5,'Must not exceed 4 characters'),
  securityCode: z.string().min(3,'Field is required').max(4),
  nameOnCard: z.string().min(2,'Field is required').max(20),
});

  export type TInputFieldSchema = z.infer<typeof InputFieldSchema>;
  export type TInputFieldKey = keyof TInputFieldSchema;

  export const enum StorageKeys {
    email = 'email',
    name = 'name',
    lastName = 'lastName',
    address ='address',
    addressAuto ='addressAuto',
    city = 'city',
    zip = 'zip',
    state = 'state',
    country = 'country',
    cardNumber = 'cardNumber',
    expirationDate = 'expirationDate',
    securityCode ='securityCode',
    nameOnCard ='nameOnCard'
  }


  type MatchedSubstring = {
    length: number;
    offset: number;
};

type StructuredFormatting = {
    main_text: string;
    main_text_matched_substrings: MatchedSubstring[];
    secondary_text: string;
};

type Term = {
    offset: number;
    value: string;
};

type Place = {
    description: string;
    matched_substrings: MatchedSubstring[];
    place_id: string;
    reference: string;
    structured_formatting: StructuredFormatting;
    terms: Term[];
    types: string[];
};

export type PlaceInfo = {
    label: string;
    value: Place;
};
