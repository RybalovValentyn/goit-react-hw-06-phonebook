import shortid from 'shortid'
import { createAction } from '@reduxjs/toolkit';


export const deleteContact = createAction('phone/deletecontact')

export const addContact = createAction('phone/addcontact', function Prepare(name, number) {
    return {
        payload: {
            id: shortid.generate(),
            name: name,
            number: number
        }
    }
} );


export const filtered = createAction('phone/filtered')