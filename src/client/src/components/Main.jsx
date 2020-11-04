import React, { Component } from 'react'
import Signup from './SignUp'
import Login from './Login'
export default class Main extends Component {
    render() {
        return (
            <div>
                <Signup />
                <Login/>
            </div>
        )
    }
}
