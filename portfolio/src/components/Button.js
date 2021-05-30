
import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';


export const Button = ({children, type, onClick, }) => {

    return (
        <Link  
        to={{ pathname: "https://github.com/seanmena" }}
        target="_blank">
            <button
             className = {`btn1`}
             onClick={onClick}
             type={type}
            >
                {children}
            </button>
        </Link>
    )
};

export const ButtonTwo = ({children, type, onClick, }) => {

    return (
        <Link  
        to={{ pathname: "https://www.linkedin.com/in/sean-mena-2910651aa/" }}
        target="_blank">
            <button
             className = {`btn2`}
             onClick={onClick}
             type={type}
            >
                {children}
            </button>
        </Link>
    )
};


export default Button;