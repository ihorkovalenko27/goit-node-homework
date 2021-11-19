const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");
const listContacts = require("./listContacts");
const contactsPath = path.resolve("./db/contacts.json");

async function addContact(name, email, phone) {
  try {
    const contactsList = await listContacts();
    const newUser = {
      id: shortid.generate(),
      name,
      email,
      phone,
    };
    contactsList.push(newUser);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList));
    return console.table(newUser);
  } catch (error) {
    console.log(error);
  }
}

module.exports = addContact;
