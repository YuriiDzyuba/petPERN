import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import star from "../img/icons/star.svg"
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {

    const history = useHistory()

    return (
        <div className="col " >
            <Card className="deviceList__item" onClick={()=>history.push(DEVICE_ROUTE + '/' + device.id)}>
                <Card.Img variant="top" src={device.img} />
                <Card.Body>
                    <Card.Title>{device.name}</Card.Title>
                    <div className="d-flex flex-row justify-content-between">
                    <Card.Text><small>price:</small>{device.price}</Card.Text>
                    <Card.Text className='deviceList__item_rating'>
                        <small>rating:</small>{device.rating} <img   src={star} alt="rating"/>
                    </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DeviceItem;