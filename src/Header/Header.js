import React from 'react';
import "./Header.css"

function Header(){
    return(
        <header>
            <h1 className='main-title'>TO DO MACHINE</h1>
            <i className="logo fa-solid fa-pen"></i>
        </header>
    )
}

export { Header };