import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {devices} = useContext(Context)

    return (
        <Row className="brandBar d-flex">
            {devices.brands.map(brand=>(
                <Card
                key={brand.id}
                className=" brandBar__cart"
                onClick={()=>devices.setSelectedBrand(brand)}
                border={brand.id===devices.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
});

export default BrandBar;