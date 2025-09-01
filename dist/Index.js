"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contactHelpers_1 = require("./utils/contactHelpers");
// Testdata
const anna = {
    id: "1",
    name: "Anna Andersson",
    emails: [{ type: "Personal", eaddress: "Anna@example.com" }],
    phones: [{ type: "Mobile", number: "070-1234567" }],
    address: [{ street: "Lottavägen 10", postalCode: "00707", city: "Nuerdetmellis", country: "Sweden" }],
    companyName: "ACME Corp",
};
const kalle = {
    id: "2",
    name: "Kalle Karlsson",
    emails: [{ type: "Personal", eaddress: "Kalle@example.com" }],
    phones: [{ type: "Mobile", number: "070-7654321" }, { type: "Home", number: "0175-12112" }],
    address: [{ street: "Kristinagården 2", postalCode: "1337", city: "Elite", country: "Sweden" }],
    companyName: "ACME Corp",
};
// Lägg till kontakter
(0, contactHelpers_1.addContact)(anna);
(0, contactHelpers_1.addContact)(kalle);
// Lista kontakter
console.log("Alla kontakter:");
(0, contactHelpers_1.listContacts)();
