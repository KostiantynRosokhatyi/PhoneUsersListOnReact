import React from "react"
import 'react-phone-input-2/lib/style.css'
import {Button, Form, Input} from 'antd';


const InputForm = (props) => {
    const {
        handleChangeName,
        handleChangePhone,
        handleChangeEmail,
        handleAdd,
        borderName,
        borderPhone,
        borderEmail
    } = props

    return (
        <div>
            <Form>
                <Input className={borderName} placeholder="Name" onChange={handleChangeName} required name="name"
                       type="name"/>
                <Input className={borderPhone} placeholder="Phone" onChange={handleChangePhone} required
                       name="number" type="text"/>
                <Input className={borderEmail} placeholder="E-mail" type="email" onChange={handleChangeEmail}
                       required/>
                <Button type="submit" onClick={handleAdd}>Add</Button>
            </Form>

        </div>
    )
}
export default InputForm