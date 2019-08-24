import React from 'react';
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";

function JesseButton(props) {
    return (
      <Button  onClick={props.onClick} color="secondary" class="center-block">
        Is Jesse wrong?
      </Button>
    );
  }

  export default class JesseWrongPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wrong_list : [
                "Definitely.",
                "Does a bear shit in the woods?",
                "Big wrong.",
                "Bongus Wrongus.",
                "Yurp",
                "Is a frog's ass water tight?",
                "Is a bear catholic?",
                "Does the pope shit in the woods?",
                "Is the pope catholic?",
                "Does a Polish rifle shoot white flags?",
                "Is the atomic weight of Cobalt 58.9?",
                "Is the space pope reptilian?",
                "Beeg Beeg",
                "Wrongo Bongo"
            ],
            cur_wrong: "",
        };
    }

    handleClick() {
        let idx;

        //Prevents the case where the same answer is given multiple times in a row
        do {
            idx = Math.floor(Math.random() * (this.state.wrong_list.length))
        } while(this.state.cur_wrong === this.state.wrong_list[idx]);

        this.setState({
            cur_wrong: this.state.wrong_list[idx]
        })
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