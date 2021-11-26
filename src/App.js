import React, { Component } from "react";
import Section from './componets/Section/Section'
import Phonebook from "./componets/Phone/Phonebook";
import Contacts from './componets/Contacts/Contects';
import Filter from './componets/Filter/Filter'
// import * as action from './components/redux/phonebook/phone-action'
import { connect } from "react-redux";

function App ({contacts}) {

    return(

<div>
<Section title='Phonebook'>
<Phonebook  />
</Section>

<Section title='Contacts'>
<Filter />
  <Contacts />
</Section>
</div>
  )};



const mapStateToProps = state => ({         //получает весь стейт
  contacts: state.contacts.contact,            //выбираем отдельные компоненты
    });

  export default connect(mapStateToProps, null)(App)


