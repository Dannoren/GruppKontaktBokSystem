import { Contact } from "../Contact";

// In-memory array to store all contacts
const contacts: Contact[] = [];

// Add a new contact to the contacts list
export function addContact(contact: Contact): void {
  contacts.push(contact);
}

// Find a contact by its name
// Returns the contact if found, otherwise returns undefined
export function findContactByName(name: string): Contact | undefined {
  return contacts.find(
    (c) =>
      ('name' in c && c.name === name)
  );
}

// Print all contact details to the console
export function listContacts(): void {
  contacts.forEach((c) => {
    // Print name
    console.log(`👤 Person: ${c.name} `);

    // Print company name
    console.log(`🏢 Company: ${c.companyName}`);
   
    // Print all emails
    c.emails.forEach((e) => {
      console.log(`📧 ${e.type} Email: ${e.eaddress}`);
    });

    // Print all phone numbers (if available)
    c.phones?.forEach((p) => {
      console.log(`📱 ${p.type} Number: ${p.number}`);
    }); 

    // Print all addresses (if available)
    c.address?.forEach((a) => {
      console.log(
        `🏠 Street: ${a.street}, Postal Code: ${a.postalCode}, City: ${a.city}, Country: ${a.country}`
      );
    });

    // Separator for better readability
    console.log("------");
  });
}
