import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)


    const addNewContact = (data) => {
        // console.log(data)
        const { name, number } = data;
        const normalizeNewContactName = name.toLowerCase();
        const findName = contacts?.find(contact => contact.name.toLowerCase() === normalizeNewContactName);
        const findNumber = contacts?.find(contact => contact.number === number)
            if (findName) {
                return alert(`${name} is already in contacts.`);
            }
            if (findNumber) {
                return alert(`${number} is already in contacts.`);
            }
            
        dispatch(addContact(data));
    }

    // const getVisibleContacts = () => {
    //     console.log('Filter numbers')
        // const normalizeContactName = filter.toLowerCase();

        // return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeContactName))
    // }


        return(
            <>
                <h1>Phonebook</h1>

                <Form onFormSubmit={addNewContact} />   
        
                <Filter />

                <ContactList />
                
        </>
        
    )
}

