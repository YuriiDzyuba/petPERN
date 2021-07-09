import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'


const NavBar = observer(() => {

    const {user} = useContext(Context)
    const history = useHistory()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}>buy</NavLink>
                {user.isAuth
                    ?
                    <Nav className="ml-auto">
                        <Button
                            variant={'dark'}
                            onClick={() => history.push(LOGIN_ROUTE)}>Out</Button>
                        <Button
                            variant={'dark'}
                            onClick={() => history.push(ADMIN_ROUTE)}>Admin</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button
                            variant={'dark'}
                            onClick={() => user.setIsAuth(true)}>Auth
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;