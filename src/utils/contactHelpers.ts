import { Contact } from "../Contact";

const contacts: Contact[] = [];

// Add Contact
export function addContact(contact: Contact): void {
  contacts.push(contact);
}

// Find Contact
export function findContactByName(name: string): Contact | undefined {
  return contacts.find(
    (c) =>
      ('name' in c && c.name === name)
  );
}

//Console Log all interface types
export function listContacts(): void {
  contacts.forEach((c) => {
    // Name
    console.log(`👤 Person: ${c.name} `)

    //Company
    console.log(`🏢 Company: ${c.companyName}`)
   
    // Emails
    c.emails.forEach((e) => {
      console.log(`📧 ${e.type} Email: ${e.eaddress}`)
    });

    // Phones
    c.phones?.forEach((p) => {
      console.log(`📱 ${p.type} Number: ${p.number}`)
    }); 

    // Address
    c.address?.forEach((a) => {
      console.log(
        `🏠 Street: ${a.street}, Postal Code: ${a.postalCode}, City: ${a.city}, Country: ${a.country}`)
    });

    console.log("------")
  });
}