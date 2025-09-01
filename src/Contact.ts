// Unique id and names
export type ContactID = string;
export type ContactName = string;
export type CompanyName = string;

// Phone numbers
export type PhoneNumberType = 'Mobile' | 'Home' | 'Work' | 'Other';

export interface PhoneNumber {
  type: PhoneNumberType;
  number: string;
}

// Emails
export type EmailType = 'Personal' | 'Work' | 'Other';

export interface Email {
  type: EmailType;
  eaddress: string;
}

// Address
export interface Address {
  street: string;
  postalCode: string;
  city: string;
  country?: string;
}

// Contact Interface
export interface Contact {
  readonly id: ContactID;
  name: ContactName;
  emails: Email[];
  phones?: PhoneNumber[];
  address?: Address[];
  companyName: CompanyName;
}