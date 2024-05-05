import { z } from "zod";

// export const InputFieldSchema = z.object({
//     email: z.string().email().max(30, "Email can't exceed 30 characters"),
//     name: z.string().max(20, 'name must be atleast 10 characters'),
//     lastName: z.string().max(20, 'lastName must be atleast 10 characters'),
//     address: z.string().max(20, 'address must be atleast 10 characters'),
//     city: z.string().max(20, 'city must be atleast 10 characters'),
//     state: z.string().max(20, 'state must be atleast 10 characters'),
//     zip: z.string().max(20, 'zip must be atleast 10 characters'),
//     country: z.string().max(20, 'country must be atleast 10 characters'),
//   });


export const InputFieldSchema = z.object({
  email: z.string().min(1, 'Field is required').email('Invalid email format').max(50, 'Email must be at most 50 characters'),
  name: z.string().min(2, 'Field is required').max(50, 'Name must be at most 50 characters'),
  lastName: z.string().min(2, 'Field is required').max(50, 'Last name must be at most 50 characters'),
  // addressAuto: z.string().min(5, 'Field is required').max(100, 'Address must be at most 100 characters'),
  addressAuto: z.object({label:z.string()}),
  address: z.string().min(5, 'Field is required').max(100, 'Address must be at most 100 characters'),
  city: z.string().min(2, 'Field is required').max(50, 'City must be at most 50 characters'),
  state: z.string().min(2, 'Field is required').max(50, 'State must be at most 50 characters'),
  zip: z.string().min(4, 'Field is required').max(20, 'Zip code must be at most 20 characters'),
  country: z.string().min(2, 'Field is required').max(50, 'Country must be at most 50 characters'),
  cardNumber: z.string().refine(
    value => /^\d{16}$/.test(value),
    {
      message: 'Card number must be a 16-digit number.',
    }
  ),
  expirationDate: z.string().refine(
    value => /^\d{2}\/\d{2}$/.test(value),
    {
      message: 'Expiration date must be in MM/YY format.',
    }
  ),
  cvvCode: z.string().refine(
    value => /^\d{3,4}$/.test(value),
    {
      message: 'CVV code must be a 3 or 4-digit number.',
    }
  ),
  securityCode: z.string().min(3).max(4),
});

  export type TInputFieldSchema = z.infer<typeof InputFieldSchema>;


  export const enum StorageKeys {
    email = 'email',
    name = 'name',
    lastName = 'lastName',
    address ='address',
    city = 'city',
    zip = 'zip',
    state = 'state',
    country = 'country',
    cardNumber = 'cardNumber',
    expiration = 'expiration',
    securityCode ='securityCode',
    nameOnCard ='nameOnCard,'
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
