import React, { Component } from 'react';
import "./loginpage.scss";



class Register extends Component {
    constructor(){
        super()

    }

    render() { 
        return ( 
            <div className="base-container">
                <div className="header">
                    <div className="content">
                        <div className="image">
                            <img src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt=""/>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Usrname</label>
                                <input type="text" name="username" placeholder="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Email..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;