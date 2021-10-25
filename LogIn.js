import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card';

export default function LogIn() {
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Rhythm & Shoes</h3>
                        <span className="loginDesc">
                            Stay fresh, stay cool
                        </span>
                    <img className="mainImage" src="Images/sneakers.png" />
                </div>
                <div className="loginRight">
                    <Card className="card bg-dark loginBox">
                        <Card.Header>
                            <h4>Welcome to the Club</h4>
                        </Card.Header>
                        <Card.Body>
                            <input placeholder="Email Address" className="loginInput" /><br />
                            <input placeholder="Password" className="loginInput" />
                            <button className="btn btn-secondary loginButton">Log In</button>
                        </Card.Body>
                        <Card.Footer>
                            <span className="loginForgot">Forgot Password?</span><br/>
                            <button className="btn btn-secondary loginCreate">Create New Account</button>
                            
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    )
}