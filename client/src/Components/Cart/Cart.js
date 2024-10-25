import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import classes from './Cart.module.css'
import iconDelete from '../../assets/iconDelete.png'
import Button from '../UI/Button/Button'
import cart_null from '../../assets/cart_null.png'
import Payment from '../Payment/Payment'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AddItemCart, RemoveItemCart } from '../../Redux/userSlice'
export default function Cart(props) {
    const carts = useSelector((state) => state.user.listCart || [])
    const dispatch = useDispatch()

    const cartProduct = carts;
    function HanhdleDelete(id) {
        dispatch(RemoveItemCart(id));
    }

    const [Pay, setPay] = useState(false);
    function TogglePay() {
        setPay(!Pay);
    }
    return (
        <Modal onClick={props.setState} className={`${classes.content_pos} ${props.state ? classes.onCart : classes.offCart}`} Modal={classes.modal} state={props.state}>
            <Payment state={Pay} setState={TogglePay} />
            <div className={classes.contain}>
                {
                    carts.length !== 0
                        ?
                        (
                            <>
                                <ul className={classes.cart} >
                                    {cartProduct.map((e) =>
                                        <li className={classes.product} key={e.id}>
                                            <div className={classes.product_contain}>
                                                <img className={classes.product_img} src={e.img} />
                                                <div>
                                                    <p className={classes.product_name}>{e.name}</p>
                                                    <p className={classes.product_quantity}>{e.quantity}</p>
                                                    <p className={classes.product_price}>{e.price}</p>
                                                </div>
                                            </div>
                                            <img onClick={() => { HanhdleDelete(e.id) }} className={classes.product_delete} src={iconDelete} />
                                        </li>)}
                                </ul>
                                <Button onClick={TogglePay} className={classes.button}>PAY</Button>
                            </>
                        ) :
                        (
                            <>
                                <div className={classes.cartNull}>
                                    <p>Your cart is empty</p>
                                    <img src={cart_null} />
                                </div>
                                <Link to={'/products'}>
                                    <Button className={classes.button}>GO TO BUY</Button>
                                </Link>

                            </>
                        )
                }

            </div>
        </Modal>
    )
}
