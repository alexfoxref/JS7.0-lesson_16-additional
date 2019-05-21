import React from 'react'
import './style.css'
import logo from '../../images/logo.png'

const Logo = () => (
    <div className="header__logo">
        <img className="logo__img" src={logo} width="38" height="40" alt="logo"></img>
        <p className="logo__title">
            <span>Granit</span>
            <span>Доставка нерудных материалов</span>
        </p>
    </div>
)

export {Logo}