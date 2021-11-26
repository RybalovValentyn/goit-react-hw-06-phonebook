import React from 'react';
import s from './filter.module.css'
import { connect } from 'react-redux';
import * as action from '../../componets/Redux/action'

const Filter = ({ text, onChange }) => (
  <label className={s.labelInpt}>
    Фильтр по имени
    <input className={s.input} type="text" value={text} onChange={onChange} />
  </label>
);


const mapStateToProps = (state) =>({
    text: state.contacts.Filter
})

const mapDispatchToProps = dispatch => {                      //отправляем методы обработки 
  return {
    onChange: (event)=> dispatch(action.filtered(event.target.value)),       //привязали действие|/передали ивент

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)