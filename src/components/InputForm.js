import React, {useState} from "react"

import {Button, Input} from 'antd';

const InputForm = (props) => {
    const {handleChangeName, handleChangePhone, handleChangeEmail, handleAdd} = props

    return (
        <div>
            <Input className="inputs" placeholder="Name" onChange={handleChangeName}/>
            <Input className="inputs" placeholder="Phone" onChange={handleChangePhone}/>
            <Input className="inputs inputs_email" placeholder="E-mail" type="email" onChange={handleChangeEmail}/>
            <Button type="primary" onClick={handleAdd} >Add</Button>
        </div>
    )
}
export default InputForm