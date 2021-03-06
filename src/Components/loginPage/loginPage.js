import React, { Component } from 'react';
import "./loginpage.scss";



class Login extends Component {
    constructor(){
        super()

    }

    render() { 
        return ( 
            <div autocomplete="off" className="base-container">
                <div className="header">
                    <div className="content">
                        <div className="image">
                            <img src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt=""/>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input autocomplete="off" type="text" name="username" placeholder="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="login-button-box">
                        <button type="button" className="btn login-btn">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;