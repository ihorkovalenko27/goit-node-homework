const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contactsList = await listContacts();
    const getId = contactsList.find(({ id }) => id === Number(contactId));
    return console.table(getId);
  } catch (error) {
    console.log(error);
  }
}

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
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
