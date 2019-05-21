import React from 'react'
import './style.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="header__navbar">
                <nav>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export {Navbar}