import React, {useEffect, useState} from "react"
import Contacts from "./Contacts";
import 'antd/dist/antd.css';
import '../style.css'
// @ts-ignore
import Search from "antd/es/input/Search";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import InputForm from './InputForm'
import {message} from "antd";
import ChangeContact from "./ChangeContact";

const App = () => {
    const [contactsData, setContactsData] = useState([])
    const [phoneContacts, setPhoneContacts] = useState([])
    const [name, setName] = useState('')
    const [number, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [filterName, setFilterName] = useState('')
    const [emailValid, setEmailValid] = useState('false')
    const [phoneValid, setPhoneValid] = useState("false")
    const [nameValid, setNameValid] = useState("false")
    const [borderName, setNameBorder] = useState('inputs')
    const [borderPhone, setPhoneBorder] = useState('inputs')
    const [borderEmail, setEmailBorder] = useState('inputs')

    const getData = () => {
        fetch('http://localhost:3000/contacts.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setContactsData(myJson)
                setPhoneContacts(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])


    // @ts-ignore
    const removeItem = (value) => {

        // @ts-ignore
        return phoneContacts.filter(item => item.name !== value)
    }

    // @ts-ignore
    const handleChangeFilter = event => {
        setFilterName(event.target.value)
    }

    // @ts-ignore
    const onClick = value => {
        setPhoneContacts(removeItem(value))
    }
    const success = () => {
        message.success('User is Added');
    };

    // @ts-ignore
    const handleChangeName = event => {
        if (/^[A-ZА-ЯЁ][a-zа-яё]{2,}$/.test(event.target.value)) {
            setName(event.target.value)
            console.log("Name ok")
            setNameBorder('Valid')
            setNameValid('true')
        } else {
            setNameBorder('noValid')
        }
    }

    // @ts-ignore
    const handleChangePhone = event => {
        if (/^\+?3?8?(0\d{9})$/.test(event.target.value)) {
            setPhone(event.target.value)
            setPhoneBorder('Valid')
            setPhoneValid('true')
        } else {
            setPhoneBorder('noValid')
            setPhoneValid('false')
        }
    }

    // @ts-ignore
    const handleChangeEmail = event => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(event.target.value)) {
            setEmail(event.target.value)
            setEmailBorder("Valid")
            setEmailValid('true')
        } else {
            console.log("Wrong email")
            setEmailBorder("noValid")
            setEmailValid('false')
        }
    }

    // @ts-ignore
    const handleAdd = event => {
        if (emailValid === 'true' && nameValid === 'true' && phoneValid === 'true') {
            // @ts-ignore
            const newList = phoneContacts.concat({id: uuidv4(), name, number, email})
            console.log(newList, ".....data")
            setPhoneContacts(newList);
            setContactsData(newList)
            event.preventDefault();
            success()
        } else {
            if (email === '') {
                setEmailBorder('noValid')
            }
            if (number === '') {
                setPhoneBorder('noValid')
            }
            if (name === '') {
                setNameBorder('noValid')
            }
        }
    }
    const filterNames = () => {
        const filteredNames = contactsData.filter(name => {
            // @ts-ignore
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
                            handleChangePhone={handleChangePhone} handleChangeEmail={handleChangeEmail}
                            borderName={borderName}
                            borderPhone={borderPhone}
                            borderEmail={borderEmail}
                        />
                        <br/>
                        <Search placeholder="Find contacts" className="search_area" onChange={handleChangeFilter}
                                onKeyUp={filterNames} style={{width: 200}}/>
                        <div className="contacts_table">
                            <Contacts contacts={phoneContacts} onClick={onClick}/>
                        </div>
                    </Route>
                    <Route exact path='/change'>
                        <ChangeContact/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App