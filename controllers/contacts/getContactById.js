const listContacts = require("./listContacts");

async function getContactById(contactId) {
  try {
    const contactsList = await listContacts();
    const getId = contactsList.find(({ id }) => id === Number(contactId));
    return console.table(getId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = getContactById;
