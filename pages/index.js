import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';

import { Container, Row, Col } from 'reactstrap'

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.roles = ['Full Stack Developer',  'Team Player', 'Angular', 'Jolly' , 'React'];
    }
    render() {
        const {isAuthenticated, user} = this.props.auth;
        return (
            <BaseLayout className="cover" {...this.props.auth}>
                <div className="main-section">
                    <div className="background-image">
                    <img src="/static/images/bckgrn.png" />
                    </div>

                    <Container>
                    <Row>
                        <Col md="6">
                        <div className="hero-section">
                            <div className={`flipper`}>
                            <div className="back">
                                <div className="hero-section-content">
                                <h2> Full Stack Web Developer </h2>
                                <div className="hero-section-content-intro">
                                    Have a look at my portfolio.
                                </div>
                                </div>
                                <img className="image" src="/static/images/original.png"/>
                                <div className="shadow-custom">
                                <div className="shadow-inner"> </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Col>
                        <Col md="6" className="hero-welcome-wrapper">
                        <div className="hero-welcome-text">
                            <h1>
                            { isAuthenticated && <span > <b> {user.name } </b> </span>}
                            Welcome my portfolio website.
                            Get informed, collaborate and discover projects I was working on through the years!
                            </h1>
                        </div>
                        <div>
                            <Typed
                            loop
                            typeSpeed={70}
                            backSpeed={70}
                            strings={this.roles}
                            shuffle={false}
                            backDelay={1000}
                            loopCount={0}
                            showCursor
                            className="self-typed"
                            cursorChar="|"
                            />
                            </div>
                        <div className="hero-welcome-bio">
                            <h1>
                            Let's take a look on my work.
                            </h1>
                        </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </BaseLayout>
        )
    }
}

export default Index;