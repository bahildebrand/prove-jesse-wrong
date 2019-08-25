import React from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    Media, } from 'reactstrap';

let jesse_faces = [require('./images/jesse_face.png'), require('./images/green_jesse_face.png')];
let jesse_strings = ["Feed Jesse Sugar", "Feed Jesse Sweet'N Low"];

export default class JesseSugarPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cur_jesse: 0,
        };
    }

    handleJesseFace() {
        let cur_jesse = this.state.cur_jesse;
        cur_jesse ^= 1;
        this.setState({cur_jesse});
    }

    render() {
        return(
        <Container>
            <Row>
                <Col className="text-center mt-3"><h1>Jesse is Wrong on Sugar</h1></Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Media>
                        <Media left href="">
                        <Media object src={jesse_faces[this.state.cur_jesse]} alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                        <Media heading>
                            Artitficial Sweetener Will Melt Your Bones
                        </Media>
                        Jesse believes that artificial sweetener is good for him. His tiny baby brain actually thinks that he can eat arificial sweeteners and still process normal sugar.
                        Does this look like the face of a man who can process sugar? Absolutely not.<br /><br /><br />
                        <Button  onClick={() => this.handleJesseFace()} className="center-block">
                            {jesse_strings[this.state.cur_jesse]}
                        </Button>
                         </Media>
                        </Media>
                </Col>
            </Row>
        </Container>
        );
    }
}