import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse } from "reactstrap";
import JesseWrongPage from './JesseWrongPage';
import JesseSugarPage from './JesseSugarPage';
import { Route, Switch } from 'react-router-dom'

class JesseNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Prove Jesse Wrong</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/sugar/">Artificial Sweetener</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
    }

export default class App extends React.Component {
    render() {
        return (
            <div>
                <JesseNavBar />
                <Switch>
                    <Route exact path="/" component={JesseWrongPage} />
                    <Route exact path="/sugar/" component={JesseSugarPage} />
                </Switch>
            </div>
        );
    }
}