import React, { useContext } from 'react'
import Modal from '../Modal/Modal'
import classes from './MessageBox.module.css'
import iconSuccess from '../../assets/iconSuccess.png'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { UserContext } from '../../Context/Context';
export default function MessageBox(props) {

    // const [state, dispatch] = useContext(UserContext);
    // const total = state.listCart.reduce(
    //     (sum, a) => {

    //         return sum + a
    //     }, 0);
    // const handleClick = () => {

    // };
    return (
        <Modal onClick={props.setState} className={classes.content_pos} Modal={classes.modal} state={props.state}>
            {props.state ? (
                <div className={classes.contain}>
                    <img src={iconSuccess} />
                    <h1>ORDER SUCCESS!</h1>
                    <p>
                        Thank you for choosing our product.
                    </p>
                    {/* <Link to={'/'}>
                        <Button className={classes.Button}>Home</Button>
                    </Link> */}
                    <Link to={'/'}>
                        <Button className={classes.Button}>Home</Button>
                    </Link>


                </div>) :
                <></>}

        </Modal>
    )
}
