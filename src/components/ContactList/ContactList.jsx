import React from "react";
import css from '../ContactList/ContactList.module.css';
import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { getFilteredContacts } from "utils/getFilteredContacts";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter)
    
    const getFilteredContactList = getFilteredContacts(filter, contacts)

    return <ul className={css.contactList}>
        {getFilteredContactList?.map(contact => <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number} />
        )}
    </ul>
};

