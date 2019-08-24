import React from 'react';
import {
    Container,
    Row,
    Col,
    Media, } from 'reactstrap';

export default class JesseSugarPage extends React.Component {
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
                        <Media object src={require('./images/jesse_face.png')} alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                        <Media heading>
                            Artitficial Sweetener Will Melt Your Bones
                        </Media>
                        Jesse believes that artificial sweetener is good for him. His tiny baby brain actually thinks that he can eat arificial sweeteners and still process normal sugar.
                        Does this look like the face of a man who can process sugar? Absolutely not.
                         </Media>
                        </Media>
                </Col>
            </Row>
        </Container>
        );
    }
}