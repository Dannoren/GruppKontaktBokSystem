"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContact = addContact;
exports.findContactByName = findContactByName;
exports.listContacts = listContacts;
// In-memory array to store all contacts
const contacts = [];
// Add a new contact to the contacts list
function addContact(contact) {
    contacts.push(contact);
}
// Find a contact by its name
// Returns the contact if found, otherwise returns undefined
function findContactByName(name) {
    return contacts.find((c) => ('name' in c && c.name === name));
}
// Print all contact details to the console
function listContacts() {
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
            console.log(`🏠 Street: ${a.street}, Postal Code: ${a.postalCode}, City: ${a.city}, Country: ${a.country}`);
        });
        // Separator for better readability
        console.log("------");
    });
}
