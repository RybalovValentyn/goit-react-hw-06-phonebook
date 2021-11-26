import React, { Component } from "react";
import s from './phonebook.module.css'
import {connect} from 'react-redux'
import * as action from '../../componets/Redux/action'


class Phonebook extends Component{

state={
    name: '',
    phone: '',
    number: '',
}
handleCange = (event) => {
    const {name, value } = event.currentTarget   
  this.setState({ [name]: value
       
  }) };

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({ contacts: {name:this.state.name, number:this.state.number}})
  
    this.props.onSubmit(this.state.name, this.state.number)//передали данные в АРР!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   
    this.resetForm();
   };

resetForm = () => {
this.setState({name: '', number:''}) //передали в стейт пустые данные
};


render(){
    return(
        <form className={s.container}
         onSubmit={this.handleSubmit}
        >

        <label className={s.labelInpt} >name
<input className={s.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
  value={this.state.name}
  onChange={this.handleCange }
/></label>

<label className={s.labelInpt}> Number
<input className={s.input}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
  value={this.state.number}
  onChange={this.handleCange }
/></label>

<button className={s.submitBtn} type='submit' >Add contact</button>
</form>
    )
}

}

   const mapDispatchToProps = dispatch => {                      //отправляем методы обработки 
      return {
        onSubmit: (name, number)=> dispatch(action.addContact(name, number)),       //привязали действие
          // onDecrement: (step) => dispatch(action.decrement(step))
      }
  }
export default connect(null,mapDispatchToProps)(Phonebook)

// export default Phonebook