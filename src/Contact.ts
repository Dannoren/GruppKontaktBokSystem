// Unique identifiers and names
export type ContactID = string;       // Represents a unique identifier for a contact
export type ContactName = string;     // Represents the name of a contact
export type CompanyName = string;     // Represents the name of a company

// Phone numbers
export type PhoneNumberType = 'Mobile' | 'Home' | 'Work' | 'Other'; 
// Restricts phone number types to these four string literals

export interface PhoneNumber {
  type: PhoneNumberType;  // The type of phone number (e.g. Mobile, Work, etc.)
  number: string;         // The actual phone number
}

// Emails
export type EmailType = 'Personal' | 'Work' | 'Other'; 
// Restricts email types to these three string literals

export interface Email {
  type: EmailType;     // The type of email (e.g. Personal, Work, etc.)
  eaddress: string;    // The email address string
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
  readonly id: ContactID;   // Unique ID, cannot be changed once assigned
  name: ContactName;        // Full name of the contact
  emails: Email[];          // A list of associated email addresses
  phones?: PhoneNumber[];   // Optional list of phone numbers
  address?: Address[];      // Optional list of addresses
  companyName: CompanyName; // Company associated with the contact
}
