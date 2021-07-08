import React from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";


const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center authPage"
        >
            <Form
                className=" authPage__form"
            >
                <h3>{isLogin ? "Auth" : "Registration"}</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Row
                    className="g-1 "
                >
                    {isLogin ?
                        <div
                            className="col-8"
                        >
                            dont have an account? <NavLink to={REGISTRATION_ROUTE}>registration</NavLink>
                        </div>
                        :
                        <div
                            className="col-8"

                        >
                            have account? <NavLink to={LOGIN_ROUTE}>login</NavLink>
                        </div>
                    }
                    <div
                        className="col d-grid justify-content-md-end"

                    >
                        <Button
                            className="align-self-end"
                            variant="outline-primary"
                            type="submit">
                            Submit
                        </Button>
                    </div>

                </Row>
            </Form>
        </Container>
    );
};

export default Auth;