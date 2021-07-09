import React from 'react';
import {Button, Container, Image} from "react-bootstrap";
import star from "../img/icons/star.svg"

const DevicePage = () => {
    const device = {
        id: 1,
        name: "PHONE2",
        price: 32343,
        rating: 4,
        img: "https://i.shgcdn.com/60947bdd-05af-4c45-955d-2428073898fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
    }
    const description = [
        {id: 1, title: "PHONE2", description: 32343,},
        {id: 2, title: "PHONE2", description: 32343,},
        {id: 3, title: "PHONE2", description: 32343,},
        {id: 4, title: "PHONE2", description: 32343,},
        {id: 5, title: "PHONE2", description: 32343,},
        {id: 6, title: "PHONE2", description: 32343,},
        ]

    return (
        <Container className="devicePage">
            <div className="row row-cols-3  g-2 devicePage__header">
                <div className="col devicePage__header_img">
                    <Image src={device.img} width={"440px"} height="440px"/>
                </div>
                <div className="col d-flex flex-column justify-content-center devicePage__header_rating"
                     style={{background: `url(${star}) no-repeat`, height: 440, backgroundSize: 'cover'}}
                >
                    <p className="text-center align-middle">{device.rating}</p>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h1 className="text-center p-4">model: {device.name}</h1>
                    <h2 className="text-center p-4">price: {device.price} uah</h2>
                    <div className=" d-flex justify-content-center">
                        <Button
                        >add to cart</Button>
                    </div>

                </div>
            </div>
            <div className="row ">
                {description.map(i => (
                    <div
                        key={i.id}
                        className="col-12 "
                        style={{background: i.id % 2 === 0 && 'lightgray', padding: 10}}
                    >
                        <div className="row row-cols-3  g-2">
                            <div className="col">
                                {i.title}
                            </div>
                            <div className="col">
                                {i.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default DevicePage;