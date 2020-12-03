import React, {useEffect, useState} from "react"
import Contacts from "./Contacts.js";
import 'antd/dist/antd.css';
import '../style.css'
// @ts-ignore
import contacts from "../contacts.json"
import {Button, Input} from 'antd';
import Search from "antd/es/input/Search";
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Contact from "./Contact";
import {v4 as uuidv4} from 'uuid';
import InputForm from './InputForm'
import InputErrors from "./InputErrors";

const App = () => {
    const [contactsData, setContactsData] = useState(contacts)
    const [phoneContacts, setPhoneContacts] = useState(contacts)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [filterName, setFilterName] = useState('')

    /*
        const [emailValid, setEmailValid] = useState('false')
        const [phoneValid, setPhoneValid] = useState('false')
        const [nameValid, setNameValid] = useState('false')
        const [inputsValid, setInputsValid] = useState('false')

        const [inputsErrors, setInputsErrors] = useState({name: '', email: '', phone: ''})

    */

    const removeItem = value => {
        return phoneContacts.filter(item => item.name !== value)
    }

    const handleChangeFilter = event => {
        setFilterName(event.target.value)
    }

    const onClick = value => {
        setPhoneContacts(removeItem(value))
    }

    const handleChangeName = event => {
        setName(event.target.value)
    }


//sone next

    const handleChangePhone = event => {
        setPhone(event.target.value)
    }

    const handleChangeEmail = event => {
        setEmail(event.target.value)

    }

    const handleAdd = event => {
        const newList = phoneContacts.concat({id: uuidv4(), name, phone, email})
        console.log(newList)
        setPhoneContacts(newList);
        setContactsData(newList)
        event.preventDefault();
    }
    const filterNames = () => {
        const filteredNames = contactsData.filter(name => {
            return name.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
        });
        setPhoneContacts(filteredNames)
    }

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'>

                        <InputForm
                            handleAdd={handleAdd} handleChangeName={handleChangeName}
                            handleChangePhone={handleChangePhone} handleChangeEmail={handleChangeEmail}/>
                        <br/>
                        <Search placeholder="Find contacts" className="search_area" onChange={handleChangeFilter}
                                onKeyUp={filterNames} style={{width: 200}}/>
                        <div className="contacts_table">
                            <Contacts contacts={phoneContacts} onClick={onClick}/>
                        </div>
                    </Route>
                    <Route exact path='/contacts'>
                        <Contact/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App