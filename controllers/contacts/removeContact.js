const fs = require("fs").promises;
const path = require("path");
const listContacts = require("./listContacts");
const contactsPath = path.resolve("./db/contacts.json");

async function removeContact(contactId) {
  try {
    const contactsList = await listContacts();
    const changeContactList = contactsList.filter(
      ({ id }) => id !== Number(contactId)
    );
    await fs.writeFile(contactsPath, JSON.stringify(changeContactList));
    return console.table(contactsList);
  } catch (error) {
    console.log(error);
  }
}

module.exports = removeContact;
