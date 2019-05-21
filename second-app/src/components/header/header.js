import React  from 'react'
import './style.css'
import {Logo, Navbar, Call} from '../../components'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__wrapper">
                    <Logo/>
                    <Navbar/>
                    <Call/>
                </div>
            </div>
        )
    }
}

export {Header}