import { Contact } from "./Contact";
import { addContact, listContacts } from "./utils/contactHelpers";

// Example test data for contacts

// First contact: Anna Andersson
const anna: Contact = {
  id: "1", // Unique contact ID
  name: "Anna Andersson", 
  emails: [{ type: "Personal", eaddress: "Anna@example.com" }], 
  phones: [{ type: "Mobile", number: "070-1234567" }], 
  address: [
    {
      street: "Lottavägen 10",
      postalCode: "00707",
      city: "Nuerdetmellis",
      country: "Sweden",
    },
  ], // Full address information
  companyName: "ACME Corp", // Associated company
};

// Second contact: Kalle Karlsson
const kalle: Contact = {
  id: "2", // Unique contact ID
  name: "Kalle Karlsson", 
  emails: [{ type: "Personal", eaddress: "Kalle@example.com" }], 
  phones: [
    { type: "Mobile", number: "070-7654321" }, 
    { type: "Home", number: "0175-12112" },   
  ],
  address: [
    {
      street: "Kristinagården 2",
      postalCode: "1337",
      city: "Elite",
      country: "Sweden",
    },
  ], // Full address information
  companyName: "ACME Corp", // Associated company
};

// Add both contacts to the contact list
addContact(anna);
addContact(kalle);

// Print all contacts to the console
console.log("Alla kontakter:"); 
listContacts();
