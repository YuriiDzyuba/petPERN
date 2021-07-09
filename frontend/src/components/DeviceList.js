import React, {useContext} from 'react';
import {Context} from "../index";
import {ListGroup, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {



    const {devices} = useContext(Context)

    return (
        <Row
        className="deviceList row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 "
        >
            {devices.devices.map(device=>(
                <DeviceItem key={device.id} device={device}/>
            ))}
        </Row>
    );
};

export default DeviceList;