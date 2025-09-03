"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contactHelpers_1 = require("./utils/contactHelpers");
// Example test data for contacts
// First contact: Anna Andersson
const anna = {
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
const kalle = {
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
(0, contactHelpers_1.addContact)(anna);
(0, contactHelpers_1.addContact)(kalle);
// Print all contacts to the console
console.log("Alla kontakter:");
(0, contactHelpers_1.listContacts)();
