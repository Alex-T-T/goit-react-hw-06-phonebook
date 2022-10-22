import PropTypes from 'prop-types';
import React, { useState } from 'react';
import css from '../Form/Form.module.css';

export const Form = ({onFormSubmit}) => {
    const [name, setname] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget
            
        console.log('event.currentTarget.name =>', event.currentTarget.name )
        switch (name) {
            case 'name':
                setname(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    function handleSubmit  (event) {
        event.preventDefault();
        onFormSubmit( {name, number} );
        reset();
    }

    const reset = () => {
        setname('');
        setNumber('');
    }
            return (
            <form className={css.form} onSubmit={handleSubmit}>
            <label> Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleInputChange}
                    />
            </label>

            <label> Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleInputChange}

                    />
            </label>    

                <button className={css.addBtn } type='submit'> Add contact</button>
        </form>
        )
}

Form.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,

}