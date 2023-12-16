import React, { useState, useRef, useContext } from 'react'
import classes from './Register.module.css'
import Modal from '../Modal/Modal'
// import { Users } from '../../store/user'
// import avt from '../../assets/avt.png'

export default function Register(props) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
    });
    const refName = useRef()
    const refEmail = useRef()
    const refPassword = useRef()
    const refRePassword = useRef()

    const [NameValidate, setNameValidate] = useState(true)
    const [emailValidate, setEmailValidate] = useState(true)
    const [passwordValidate, setPasswordValidate] = useState(true)
    const [repasswordValidate, setRepasswordValidate] = useState(true)

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };
    function HandleSignUp(e) {
        e.preventDefault();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
            setEmailValidate(true);
            if (form.name.length > 8) {
                setNameValidate(true);
                if (form.password.length > 8) {
                    setPasswordValidate(true);
                    if (form.repassword === form.password) {
                        setRepasswordValidate(true);
                        // const user = {
                        //     avt: avt,
                        //     name: 'Hiếu Trọng',
                        //     cart: [],
                        //     notify: [],
                        //     email: form.email,
                        //     pwd: form.password
                        // }
                        // Users = [...Users, user];
                        // console.log(Users);
                    }
                    else {
                        setRepasswordValidate(false);
                        refRePassword.current.focus();
                    }
                }
                else {
                    setPasswordValidate(false);
                    refPassword.current.focus();
                }
            }
            else {
                setNameValidate(false);
                refName.current.focus();
            }

        }
        else {
            setEmailValidate(false);
            refEmail.current.focus();
        }
    }
    return (
        <Modal onClick={props.setState} state={props.state} className={classes.body} >
            {props.state ?

                ((<div className={classes.container}>
                    <h1>Sign Up</h1>
                    <form action="post" className={classes.form}>

                        <div className={`${classes.txt_field} ${!emailValidate ? classes.txt_field_false : ''}`}>
                            <input ref={refEmail} name='email' type="text" required value={form.email} onChange={onUpdateField} />
                            <span></span>
                            <label>Email or phone numbers</label>
                        </div>
                        <div className={`${classes.txt_field} ${!NameValidate ? classes.txt_field_false : ''}`}>
                            <input ref={refName} name='name' type="text" required value={form.name} onChange={onUpdateField} />
                            <span></span>
                            <label>Name</label>
                        </div>
                        <div className={`${classes.txt_field} ${!passwordValidate ? classes.txt_field_false : ''}`}>
                            <input ref={refPassword} name='password' type="password" required value={form.password} onChange={onUpdateField} />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className={`${classes.txt_field} ${!repasswordValidate ? classes.txt_field_false : ''}`}>
                            <input ref={refRePassword} name='repassword' type="password" required value={form.repassword} onChange={onUpdateField} />
                            <span></span>
                            <label>Re-Password</label>
                        </div>
                        <input type="submit" value="SIGN UP" onClick={HandleSignUp} />
                        <div className={classes.signup_link}>
                            Already an account? <a href="#">Sign In</a>
                        </div>
                    </form>
                </div>)
                ) :
                <>
                </>}
        </Modal>
    )
}
