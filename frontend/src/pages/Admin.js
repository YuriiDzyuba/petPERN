import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
           <Button
               variant="outline-dark"
               className="p-3"
               onClick={()=>setTypeVisible(true)}
           >
               add type
           </Button>
           <Button
               variant="outline-dark"
               className="p-3"
               onClick={()=>setBrandVisible(true)}
           >
               add brend
           </Button>
           <Button
               variant="outline-dark"
               className="p-3"
               onClick={()=>setDeviceVisible(true)}
           >
               add device
           </Button>
            <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
            {/*<CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>*/}
        </Container>
    );
};

export default Admin;