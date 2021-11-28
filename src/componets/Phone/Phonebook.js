import s from './phonebook.module.css'
import {connect} from 'react-redux'
import * as action from '../../componets/Redux/action'
import { useState} from 'react';

function  Phonebook ({contact, onSubmit}) {

const [name, setname] = useState('');
const [number, setnumber] = useState('');

const handleChange = event => {
  const { name, value } = event.target;
console.log(name, value);
  switch (name) {
    case 'name':
      setname(value);
      break;

    case 'number':
      setnumber(value);
      break;

    default:
      return;
  }
};



 const handleSubmit = (event) =>{
    event.preventDefault();

      !filteredContacts(name, number)
   ? onSubmit(name, number)
    : alert(`${name} is already in contacts`);
    
  
   resetForm();
   };

const  filteredContacts = (name,number ) => {     
    return contact.find(contact => contact.name === name)    
  }


const resetForm = () => {
  setname('')
  setnumber('')
};

return(
        <form className={s.container}
         onSubmit={handleSubmit}
        >

        <label className={s.labelInpt} >name
<input className={s.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
  value={name}
  onChange={handleChange}
/></label>

<label className={s.labelInpt}> Number
<input className={s.input}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
  value={number}
  onChange={handleChange }
/></label>

<button className={s.submitBtn} type='submit' >Add contact</button>
</form>
    )
}



 const mapDispatchToProps = dispatch => {                      //отправляем методы обработки 
    return {
    onSubmit: (name, number)=> dispatch(action.addContact(name, number)),       //привязали действие
      }
  }
  const mapStateToProps = state =>{                   //фильтрация перед рендером, раньше передавали пропами сейчас фильтруэм прямо при получениии из стейта
    const contact = state.contacts;
     return contact
}

export default connect(mapStateToProps,mapDispatchToProps)(Phonebook)

