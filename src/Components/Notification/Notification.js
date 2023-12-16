import React, { useState } from 'react'
import classes from './Notification.module.css'
import Modal from '../Modal/Modal'
import atiso from '../../assets/Atiso.jpg'
import BaoLocTea from '../../assets/BaoLocTea.jpg'
import CauDatCoffee from '../../assets/CauDatCoffee.jpg'
export default function Notification(props) {
    const Notifies = [
        {
            img: atiso,
            content: 'The order Atiso has been placed successfully!',
            time: '11/10/2023'
        },
        {
            img: BaoLocTea,
            content: 'The order Bao Loc tea has been placed successfully!',
            time: '11/10/2023'
        },
        {
            img: CauDatCoffee,
            content: 'The order Cau Dat Coffee has been placed successfully!',
            time: '11/10/2023'
        },
        {
            img: BaoLocTea,
            content: 'The order Bao Loc tea has been placed successfully!',
            time: '11/10/2023'
        },
    ]
    return (
        <Modal onClick={props.setState} className={`${classes.content_pos} ${props.state ? classes.onNotify : classes.offNotify}`} Modal={classes.modal} state={props.state}>
            {/* <div class="notification-dropdown">
                <span><i class="fas fa-bell"></i></span>
                <div class="notification-content">
                    <div class="box box-content">
                        <div class="box-title">
                            <p>Không có thông báo gì mới!</p>
                        </div>
                    </div>
                    <div class="box-pay">
                        <p>Mark all read</p>
                    </div>
                </div>
            </div> */}
            <div className={classes.notification_dropdown}>
                <ul>
                    {
                        Notifies.map((e, i) => (<li key={i} className={classes.notification_content}>
                            <div className={classes.box_content}>
                                <img src={e.img} alt="Atiso" />
                                <div className={classes.box_title}>
                                    <p>{e.content}</p>
                                    <span>{e.time}</span>
                                </div>
                            </div>
                        </li>))
                    }

                </ul>
                <p className={classes.viewAll}>marked as viewed</p>
            </div>
        </Modal>
    )
}
