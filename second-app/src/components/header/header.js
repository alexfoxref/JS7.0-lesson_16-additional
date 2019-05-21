import React  from 'react'
import './style.css'
import {Logo, Navbar, Call} from '../../components'

const Header = () => (
    <div className="header">
        <div className="header__wrapper">
            <Logo/>
            <Navbar/>
            <Call/>
        </div>
    </div>
)

export {Header}