import css from '../ContactItem/ContactItem.module.css';
import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const ContactItem = ({id, name, number}) => {
    const dispatch = useDispatch()
    
    return (
        <li key={id} className={css.contactListItem}>
                                <p>Name: {name}</p>
                                <p>Number: {number}</p>
                                <button className={css.contactRemoveBtn} onClick={()=> dispatch(removeContact({id}))} type="button"> Remove </button>
                            </li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}