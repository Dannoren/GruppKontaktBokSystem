export interface Contact {
    id: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    company?: string;
    }

    export type ContactName = string;

    export type PhoneNumberType = 'mobile' | 'home' | 'work' | 'other';

    export type ContactEmail = string;

    export type ContactAddress = string;

    export type CompanyName = string;

    export type ContactID = string;

