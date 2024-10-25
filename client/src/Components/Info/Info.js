import React, { useState } from 'react'
import classes from './Info.module.css'
import Button from '../UI/Button/Button'
import Navbar from '../UI/Navbar/Navbar';
import Footer from '../UI/Footer/Footer';
// import img from '../../assets/potrait.jdg';
import Input from '../UI/Input/Input';
import { useSelector, useDispatch } from 'react-redux'
import { IsLogged, IsLogOut } from '../../Redux/userSlice'
export default function Info() {
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: user.name,
        phone: "",
        email: user.email,
        password: user.pwd,
        address: "",
    });
    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };
    return (
        <div>
            <Navbar />
            <div className={classes.container}>
                <h1>INFORMATION</h1>
                <div className={classes.info}>
                    <div className={classes.ava_box}>
                        <img src={user.avt} />
                        <Button className={classes.change}>Change Avatar</Button>
                    </div>

                    <div className={classes.txt_field}>
                        <Input className={classes.Button} isValid={true} placeholder={'Name'} type={'text'} name='name' form={form.name} onUpdateField={onUpdateField} />

                        <Input className={classes.Button} isValid={true} placeholder={'Phone Numbers'} type={'text'} name='phone' form={form.phone} onUpdateField={onUpdateField} />

                        <Input className={classes.Button} isValid={true} placeholder={'Email'} type={'text'} name='email' form={form.email} onUpdateField={onUpdateField} />

                        <Input className={classes.Button} isValid={true} placeholder={'Password'} type={'text'} name='password' form={form.password} onUpdateField={onUpdateField} />

                        <Input className={classes.Button} isValid={true} placeholder={'Address'} type={'text'} name='address' form={form.address} onUpdateField={onUpdateField} />
                        <div className={classes.btn}>
                            <Button className={classes.button}>Cancel</Button>
                            <Button className={classes.button}>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
