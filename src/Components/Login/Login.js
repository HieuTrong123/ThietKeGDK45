import React, { useState, useRef, useContext } from 'react'
import classes from './Login.module.css'
import Modal from '../Modal/Modal'
import { UserContext } from '../../Context/Context'
import { IsLogged } from '../../Context/f_actions'
import { Users } from '../../store/user'
import { useNavigate } from 'react-router-dom'
export default function Login(props) {
    const [state, dispatch] = useContext(UserContext);
    const [emailValidate, setEmailValidate] = useState(true)
    const [password, setPasswordValidate] = useState(true)
    const [warnEmail, setWarnEmail] = useState('')
    const [warnPwd, setWarnPwd] = useState('')
    const refEmail = useRef()
    const refPassword = useRef()
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };

    const navigate = useNavigate()

    function HanhdleSubmit(e) {
        e.preventDefault();
        const user = Users.find(item => item.email === form.email)
        console.log(user);
        if (user) {
            setEmailValidate(true);
            setWarnEmail('')
            if (form.password === user.pwd) {
                setPasswordValidate(true);
                dispatch(IsLogged(user));
                setWarnPwd('')
                props.setState()
                navigate('/')
            }
            else {
                setPasswordValidate(false);
                setWarnPwd('password wrong')
                refPassword.current.focus();
            }
        }
        else {
            setEmailValidate(false);
            setWarnEmail('Email does not exist')
            refEmail.current.focus();
        }



    }
    return (
        <Modal onClick={props.setState} state={props.state} className={classes.body} >
            {props.state ?

                ((<div className={classes.container}>
                    <h1>LOGIN</h1>
                    <form action="post" className={classes.form}>
                        <div className={`${classes.txt_field} ${!emailValidate ? classes.txt_field_false : ''}`}>
                            <input ref={refEmail} type="text" required value={form.email} name="email" onChange={onUpdateField} />
                            <span className={`${!emailValidate ? classes.txt_warn : ''}`}>{warnEmail}</span>
                            <label>Email or phone numbers</label>
                        </div>
                        <div className={`${classes.txt_field} ${!password ? classes.txt_field_false : ''}`}>
                            <input ref={refPassword} type="password" required value={form.password} name="password" onChange={onUpdateField} />
                            <span className={`${!password ? classes.txt_warn : ''}`}>{warnPwd}</span>
                            <label>Password</label>
                        </div>
                        <input type="submit" onClick={HanhdleSubmit} value="LOGIN" />
                        <div className={classes.signup_link}>
                            Don't have account? <a href="#">Sign Up</a>
                        </div>
                    </form>
                </div>)
                ) :
                <>
                </>}
        </Modal>
    )

}
