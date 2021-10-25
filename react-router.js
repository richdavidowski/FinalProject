import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Home from '../Pages/Home';
import LogIn from '../Pages/LogIn';
import Profile from '../Pages/Profile';

export default function ReactRouter() {
    return (
                <ButtonGroup className="routerButtons">
                    <Button className="btn btn-secondary routerButton">
                        <Link className="linkButton" to="/">Home</Link>
                    </Button>
                    <Button className="btn btn-secondary routerButton">
                        <Link className="linkButton" to="/profile">Profile</Link>
                    </Button>
                    <Button className="btn btn-secondary routerButton">
                        <Link className="linkButton" to="/login">Log In</Link>
                    </Button>
                </ButtonGroup>            
    )
}