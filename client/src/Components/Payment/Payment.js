import React, { useContext, useState } from 'react'
import classes from './Payment.module.css';
import Card from '../../assets/card.png';
import Hand from '../../assets/hand.png';
import Visa from '../../assets/visa.png';
import PayPal from '../../assets/paypal.png';
import Button from '../UI/Button/Button';
import Modal from '../Modal/Modal';
import { UserContext } from '../../Context/Context';
import Input from '../UI/Input/Input';
import PayInfo from './PayInfo';
import MessageBox from './MessageBox';
export default function Payment(props) {
    const [state, dispatch] = useContext(UserContext);
    const [form, setForm] = useState({
        name: '',
        phone: '',
        address: '',
    });
    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };

    const [payInfo, setPayInfo] = useState(false);

    function TogglePayInfo() {
        setPayInfo(!payInfo);
    }

    const [MsgBox, setMsgBox] = useState(false);

    function ToggleMsgBox() {
        setMsgBox(!MsgBox);
    }

    return (
        <Modal onClick={props.setState} className={classes.content_pos} Modal={classes.modal} state={props.state}>

            {props.state ?
                (state.stateLogIn ?
                    (<div className={classes.container}>
                        <PayInfo state={payInfo} setState={TogglePayInfo} />
                        <h1>Pay Method</h1>
                        <div className={classes.pay_items}>
                            <div className={classes.item}>
                                <div onClick={TogglePayInfo} className={classes.btn}><img src={PayPal} /></div>
                                <div onClick={TogglePayInfo} className={classes.btn}><img src={Visa} /></div>
                            </div>
                            <div className={classes.item}>
                                <div onClick={TogglePayInfo} className={classes.btn}><img src={Card} /></div>
                                <div onClick={TogglePayInfo} className={classes.btn}><img src={Hand} /></div>
                            </div>
                        </div>
                    </div>)
                    :
                    (<div className={classes.container}>
                        <MessageBox state={MsgBox} setState={ToggleMsgBox} />
                        <h1>PAY INFORMATION</h1>
                        <div className={classes.pay_items_notLogin}>
                            <Input className={classes.Input} isValid={true} placeholder={'Number'} type={'number'} name='phone' form={form.phone} onUpdateField={onUpdateField} />
                            <Input className={classes.Input} isValid={true} placeholder={'Name'} type={'text'} name='name' form={form.name} onUpdateField={onUpdateField} />
                            <Input className={classes.Input} isValid={true} placeholder={'Address'} type={'text'} name='address' form={form.address} onUpdateField={onUpdateField} />
                            <div className={classes.total}>
                                <p>Total:</p>
                                <p className={classes.price}>$201.00</p>
                            </div>
                        </div>
                        <Button onClick={ToggleMsgBox} className={classes.Button}>Pay</Button>
                    </div>)
                ) :
                <></>
            }
        </Modal>
    )
}
