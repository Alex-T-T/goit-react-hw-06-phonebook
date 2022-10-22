export const getFilteredContacts = (filter, contacts) => { 
    if (!filter) {
        return contacts;
    }

    const normalizeContactName = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeContactName));
};
