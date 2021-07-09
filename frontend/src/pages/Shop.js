import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col
                    md={3}
                    className="shop__leftColumn"
                >
                    <TypeBar/>
                </Col>
                <Col
                    md={9}
                    className="shop__rightColumn"
                >
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
            Shop
        </Container>
    );
};

export default Shop;