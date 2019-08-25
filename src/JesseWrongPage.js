import React from 'react';
import axios from 'axios';
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";

function JesseButton(props) {
    return (
      <Button  onClick={props.onClick} className="center-block">
        Is Jesse wrong?
      </Button>
    );
  }

  export default class JesseWrongPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cur_wrong: "",
        };
    }

    async handleClick() {
        let cur_wrong;

        //Prevents the case where the same answer is given multiple times in a row
        do {
            let response = await axios.get(`http://localhost:5000/wrong-reason`);

            cur_wrong = response.data["reason"]
        } while(this.state.cur_wrong === cur_wrong);

        this.setState({cur_wrong})
    }

    render() {
        return(
            <Container>
                <Row className="mt-5">
                    <Col></Col>
                    <Col className="text-center">
                    <JesseButton
                        onClick = {() => this.handleClick()}
                    />
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="mt-3">
                    <Col></Col>
                    <Col className="text-center">
                        <h1>{this.state.cur_wrong}</h1>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}