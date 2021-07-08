import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}>buy</NavLink>
                {user.isAuth
                    ?
                    <Nav className="ml-auto">
                        <NavLink to={LOGIN_ROUTE} onClick={()=> user.setIsAuth(false)}>Out</NavLink>
                        <NavLink to={REGISTRATION_ROUTE} onClick={()=> user.setIsAuth(false)}>Admin</NavLink>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <NavLink to={REGISTRATION_ROUTE} onClick={()=> user.setIsAuth(true)}>Auth</NavLink>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;