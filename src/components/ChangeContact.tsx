import React from 'react';
import {Button, Input, Row, Col, message} from "antd";
import 'antd/dist/antd.css';


// @ts-ignore
function ChangeContact(props) {
    const {test} = props
    return (
        <Row>
            <Col>
                {console.log(test)}
                <Input className="inputs" placeholder="Name"/>
                <Input className="inputs" placeholder="Email"/>
                <Input className="inputs" placeholder="Number"/>

                <Button className=""
                        onClick={function handleClick(e2) {
                            e2.preventDefault();
                            // @ts-ignore
                            console.log(document.getElementsByClassName('article-list__li').value);
                            message.success({
                                content: 'User is saved!', duration: 10,
                            })
                            window.setTimeout(() => {
                                window.location.replace('http://localhost:3000/');
                            }, 1000)
                        }}>Save
                </Button>
            </Col>
        </Row>
    )
}

export default ChangeContact