import React from 'react'
import './style.css'

class Call extends React.Component {
    render() {
        return (
            <div className="header__call">
                <p className="header__phone">
                    <span>8 800 342-13-33</span>
                    <span>Бесплатный звонок по России</span>
                </p>
                <button className="callback">Обратный звонок</button>
            </div>
        )
    }
}

export {Call}