import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
                <form name="align-right">
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group mt-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                             <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    </div>

                    <p className="forgot-password text-center">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            
        );
    }
}