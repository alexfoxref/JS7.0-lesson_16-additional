import React from 'react'
import './style.css'
import {Delivery} from '../../components'

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main__wrapper">
                    <Delivery/>
                </div>
            </div>
        )
    }
}

export {Main}