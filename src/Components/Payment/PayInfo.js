import React, { useState } from 'react'
import classes from './PayInfo.module.css'
import Modal from '../Modal/Modal'
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import MessageBox from './MessageBox';
export default function PayInfo(props) {
    const [form, setForm] = useState({
        bankNumber: '',
        holder: '',
    });
    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };

    const [MsgBox, setMsgBox] = useState(false);

    function ToggleMsgBox() {
        setMsgBox(!MsgBox);
    }

    return (
        <Modal onClick={props.setState} className={classes.content_pos} Modal={classes.modal} state={props.state}>
            {props.state ?
                (<div className={classes.container}>
                    <MessageBox state={MsgBox} setState={ToggleMsgBox} />
                    <h1>PAY INFORMATION</h1>
                    <div className={classes.pay_items_notLogin}>
                        <Input className={classes.Input} isValid={true} placeholder={'Your bank number'} type={'number'} name='bankNumber' form={form.phone} onUpdateField={onUpdateField} />
                        <Input className={classes.Input} isValid={true} placeholder={'Holder'} type={'text'} name='holder' form={form.name} onUpdateField={onUpdateField} />
                        <div className={classes.total}>
                            <p>Total:</p>
                            <p className={classes.price}>$201.00</p>
                        </div>
                    </div>
                    <Button onClick={ToggleMsgBox} className={classes.Button}>Pay</Button>
                </div>)
                :
                <></>
            }
        </Modal>
    )
}
