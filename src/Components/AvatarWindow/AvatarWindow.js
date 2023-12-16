import React, { useContext } from 'react'
import classes from './AvatarWindow.module.css';
import Button from '../UI/Button/Button';
import Modal from '../Modal/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/Context'
import { IsLogOut } from '../../Context/f_actions'
export default function AvatarWindow(props) {
    const [state, dispatch] = useContext(UserContext);
    const navigate = useNavigate()
    function HandleClick() {
        dispatch(IsLogOut());
        props.setState();
        navigate('/')
    }
    return (
        <Modal onClick={props.setState} className={`${classes.content_pos} ${props.state ? classes.onAvatar : classes.offAvatar}`} Modal={classes.modal} state={props.state}>
            <div className={classes.container}>
                <Link to={"/info"} className={classes.btn1}>Information</Link>
                <p onClick={HandleClick} className={classes.btn2}>Log out</p>
            </div>
        </Modal>
    )
}
