import React, {useContext} from 'react';
import {Context} from "../index";
import {ListGroup, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {

    const {devices} = useContext(Context)

    return (
        <Row>
            {devices.types.map(device=>(
                <DeviceItem/>
            ))}
        </Row>
    );
};

export default DeviceList;