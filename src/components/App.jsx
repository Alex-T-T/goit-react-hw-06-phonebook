import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { auditName } from 'utils/auditName';
import { auditNumber } from 'utils/auditNumber';

export const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)

    const addNewContact = (data) => {
        const { name, number } = data;

        if (auditName(contacts, name)) {
            alert(`${name} is already in contacts.`);
            return 
        };

        if (auditNumber(contacts, number)) {
            alert(`${number} is already in contacts.`);
            return 
        };

        dispatch(addContact(data));
    }

        return(
            <>
                <h1>Phonebook</h1>

                <Form onFormSubmit={addNewContact} />   
        
                <Filter />

                <ContactList />
                
        </>
        
    )
}

