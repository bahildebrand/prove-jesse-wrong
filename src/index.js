import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Button,
    Container,
    Row,
    Col,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse } from "reactstrap";

function JesseButton(props) {
    return (
      <Button  onClick={props.onClick} color="info" class="center-block">
        Is Jesse wrong?
      </Button>
    );
  }

class NavBar extends React.Component {
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
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Prove Jesse Wrong</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </div>
    );
}
}

class JesseWrong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wrong_list : [
                "Definitely.",
                "Does a bear shit in the woods?",
                "Big wrong.",
                "Bongus Wrongus.",
                "Yurp",
                "Is a frogs ass water tight?",
                "Is a bear catholic?",
                "Does the pope shit in the woods?",
                "Is the pope catholic?",
                "Does a Polish rifle shoot white flags?",
                "Is the atomic weight of Cobalt 58.9?",
                "Is the space pope reptilian?",
                "Beeg Beeg"
            ],
            idx: 0,
        };
    }

    handleClick() {
        let new_idx = Math.floor(Math.random() * (this.state.wrong_list.length))
        this.setState({
            idx : new_idx
        })
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col><NavBar /></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="text-center">
                    <JesseButton
                        onClick = {() => this.handleClick()}
                    />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="text-center">
                        <h1>{this.state.wrong_list[this.state.idx]}</h1>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <JesseWrong />,
    document.getElementById('root')
  );
