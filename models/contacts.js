const fs = require("fs/promises");
const path = require("path");
const {v4} = require("uuid")

const contactsPath = path.join(__dirname, 'contacts.json');

const updateContacts = async(contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const result = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(result)
}

const getContactById = async (contactId) => {
   const contacts = await listContacts();
    const idtoString = String(contactId);
    const result = contacts.find(item => item.id === idtoString);
    return result || null;
}

const removeContact = async (contactId) => {
  const contacts = await listContacts();
   const idtoString = String(contactId);
   const index = contacts.findIndex(item => item.id === idtoString);
    if(index === -1){
        return null;
    }
    const [result] = contacts.splice(index, 1);
    await updateContacts(contacts);
    return result;
}

const addContact = async ({ name, email, phone }) => {
   const contacts = await listContacts();

    const newContact = {
        id: v4(),
        name,
        email,
        phone,
    };

    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
}

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId);
    if(index === -1){
        return null;
    }
    contacts[index] = {contactId, ...body};
    await updateContacts(contacts);
    return contacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
