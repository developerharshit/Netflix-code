import React, { Component } from 'react'
import Home from './Home'
import Navbar from './Navbar'

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Home />
            </div>
        )
    }
}
