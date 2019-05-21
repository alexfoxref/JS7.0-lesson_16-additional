import React, {Fragment} from 'react'
import './style.css'
import {Header, Main, Footer} from '../../components'


class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Main/>
                <Footer/>
            </Fragment>
        )
    }
}

export {App}