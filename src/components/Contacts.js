import * as React from 'react'
import {Button, Col, Row} from "antd";

import 'antd/dist/antd.css';
import Contact from "./Contact";
import Bucket from "./Bucket";

function Contacts(props) {
    const {contacts, onClick} = props
    return (
        <div>
            {contacts.map((contact) =>
                <Row key={contact.id}>
                    <Col offset={1} span={8} value={<Contact phoneContact={contact.name}/>}><Contact
                        phoneContact={contact.name} onClick={() => onClick(contact.name)}/></Col>
                    <Col offset={2} span={4}>
                        <Button className="buttons" type="primary">Edit</Button>
                    </Col>
                    <Col span={2}>
                        <Bucket key={contact.id} onClick={() => onClick(contact.name)}/>
                    </Col>
                </Row>
            )}

        </div>
    )
}

export default Contacts