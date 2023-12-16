import React from 'react'
import classes from './Input.module.css'
export default function Input(props) {
    return (
        <div className={`${classes.txt_field} ${!props.isValid ? classes.txt_field_false : ''}`}>
            <input className={props.className} type={props.type} required value={props.form} name={props.name} onChange={props.onUpdateField} />
            <span className={`${!props.isValid ? classes.txt_warn : ''}`}>{props.warn}</span>
            <label>{props.placeholder}</label>
        </div>
    )
}
