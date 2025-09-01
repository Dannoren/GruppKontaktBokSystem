"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContact = addContact;
exports.findContactByName = findContactByName;
exports.listContacts = listContacts;
const contacts = [];
// Add Contact
function addContact(contact) {
    contacts.push(contact);
}
// Find Contact
function findContactByName(name) {
    return contacts.find((c) => ('name' in c && c.name === name));
}
//List out all Contacts
function listContacts() {
    contacts.forEach((c) => {
        // Name
        console.log(`👤 Person: ${c.name} `);
        //Company
        console.log(`🏢 Company: ${c.companyName}`);
        // Emails
        c.emails.forEach((e) => {
            console.log(`📧 ${e.type} Email: ${e.eaddress}`);
        });
        // Phones
        c.phones?.forEach((p) => {
            console.log(`📱 ${p.type} Number: ${p.number}`);
        });
        // Address
        c.address?.forEach((a) => {
            console.log(`🏠 Street: ${a.street}, Postal Code: ${a.postalCode}, City: ${a.city}, Country: ${a.country}`);
        });
        console.log("------");
    });
}
