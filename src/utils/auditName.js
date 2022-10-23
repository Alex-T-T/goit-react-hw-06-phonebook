   export function auditName(contacts, name) {

        const normalizeNewContactName = name.toLowerCase();
        const findName = contacts?.find(contact => contact.name.toLowerCase() === normalizeNewContactName);
        return findName;  
    }
