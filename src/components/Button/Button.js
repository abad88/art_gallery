import React from 'react'
import "./Button.css"

const Button = ({ onClick, msg }) => {
    return (
        <>
            <button onClick={onClick} className="btnStyle">{msg}</button>
        </>
    )
}

export default Button