import React from 'react'
import Style from './input.module.css'

function Input({ label, value, onChange, name, id, placeholder, type, helpText, description }) {
    return (
        <>
        <input type={type} placeholder={placeholder} style={Style} onChange={onChange} className={Style.input} value={value} name={name}></input>
        </>
    );
}

export default Input;