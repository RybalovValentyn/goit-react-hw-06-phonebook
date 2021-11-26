import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from './action';



const  initialContact =   [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ]

 const contactReducer = createReducer(initialContact, {
        'phone/addcontact': (state, action) => [...state, action.payload],
        'phone/deletecontact': (state, action) =>
         state.filter(contact => contact.id !== action.payload)
      });
      
const filterReducer = createReducer('', {
    'phone/filtered': (state,action) => action.payload
} );


const contactsReduser = combineReducers({
   contact: contactReducer,
    filter: filterReducer,
})

export default contactsReduser