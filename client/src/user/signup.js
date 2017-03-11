import React, { Component } from 'react';
import '../css/materialize.css'

class SignUpForm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="signup-modal" className="modal">
                <div className="modal-content">
                    <h4>Let's Get Started</h4>
                    <div className="row">
                        <form className="col s12">
                            <div className="input-field col s12">
                                <input placeholder="Full Name" id="full_name" type="text" name="full_name" className="validate" />
                                <label htmlFor="full_name">Full Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input placeholder="User Name" id="user_name" type="text" name="user_name" className="validate" />
                                <label htmlFor="user_name">User Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input placeholder="Email" id="email" type="email" name="text" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input placeholder="Password" id="password" type="password" name="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col s6 offset-s6">
                                <input type="submit" className="waves-effect waves-light btn" id="submit" name="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpForm;