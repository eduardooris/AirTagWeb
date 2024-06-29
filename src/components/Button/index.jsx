import React from "react"
import Style from "./button.module.css"

function Button ({ children, onClick, disabled }) {
    return (
        <button className={Style.button} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default Button