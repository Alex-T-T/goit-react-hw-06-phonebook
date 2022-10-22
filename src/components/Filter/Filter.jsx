import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "redux/contactsSlice";
import { getFilter } from "redux/selectors";

export const Filter = () => {

    const value = useSelector(getFilter)
    const dispatch = useDispatch();


    const handleInputChange = (event) => {
        const filterInput = event.currentTarget.value;
        dispatch(filterContact(filterInput))
    }


    return (
        <label> Filter by Name
            <input type="text" value={value} onChange={handleInputChange} />
        </label>
    )
}
