import { Contact } from "./Contact";

import { addContact, listContacts } from "./utils/contactHelpers";

// Testdata
const anna: Contact = {
  id: "1",
  name: "Anna Andersson",
  emails: [{ type: "Personal", eaddress: "Anna@example.com" }],
  phones: [{ type: "Mobile", number: "070-1234567" }],
  address: [{street: "Lottavägen 10", postalCode: "00707", city: "Nuerdetmellis", country: "Sweden"}],
  companyName: "ACME Corp",
};

const kalle: Contact = {
  id: "2",
  name: "Kalle Karlsson",
  emails: [{ type: "Personal", eaddress: "Kalle@example.com" }],
  phones: [{ type: "Mobile", number: "070-7654321" }, { type: "Home", number: "0175-12112"}],
  address: [{street: "Kristinagården 2", postalCode: "1337", city: "Elite", country: "Sweden"}],
  companyName: "ACME Corp",
};


// Add Contacts
addContact(anna);
addContact(kalle);


// Console Log all Contacts
console.log("Alla kontakter:");
listContacts();