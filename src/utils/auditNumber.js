    export function auditNumber(contacts, number) {

        const findNumber = contacts?.find(contact => contact.number === number);
        return findNumber;
    }