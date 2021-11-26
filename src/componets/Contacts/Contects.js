import React from "react";
import s from './contacts.module.css'
import { connect } from 'react-redux';
import * as action from '../../componets/Redux/action'

function Contacts({contacts, onDeleteContact}) {

       return (

        <ul className={s.contactsList}>
            {contacts.map(contact=>
               <li key={contact.id}>
                   <span className={s.contactText}>{contact.name}: {contact.number}</span>
                   <button type='button' onClick={() => onDeleteContact(contact.id)}>Delete</button>
               </li> )}
        </ul>
    )
}

const mapStateToProps = state =>{                   //фильтрация перед рендером, раньше передавали пропами сейчас фильтруэм прямо при получениии из стейта
    const {contact, filter} = state.contacts;
    const normalizedFilter = filter.toLowerCase();

    const visibleContact = contact.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
    return{ contacts: visibleContact}
}

const mapDispatchToProps = dispatch => {                      //отправляем методы обработки 
    return {
        onDeleteContact: (id)=> dispatch(action.deleteContact(id)),       //привязали действие
        }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Contacts)