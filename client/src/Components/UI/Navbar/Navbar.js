import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.css'
import logo from '../../../assets/logo.png'
import Button from '../Button/Button'
import Search from './Search'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../../Cart/Cart'
import { useSelector, useDispatch } from 'react-redux'
import notifiIcon from '../../../assets/notifiIcon.png'
import Login from '../../Login/Login'
import Register from '../../Register/Register'
import AvatarWindow from '../../AvatarWindow/AvatarWindow'
import Notification from '../../Notification/Notification'
export default function Navbar() {
    const user = useSelector((state) => state.user.user)
    const isLogin = useSelector((state) => state.user.stateLogIn)
    const cartsUser = useSelector((state) => state.user.listCart)

    const dispatch = useDispatch()
    const [login, setLogin] = useState(false);

    const [register, setRegister] = useState(false);

    const [cart, setCart] = useState(false);

    const [avatar, setAvatar] = useState(false);

    const [notification, setNotification] = useState(false);
    function ToggleCart() {
        setCart(!cart);
    }
    function HandleLogin() {
        setLogin(!login);
    }
    function HandleRegister() {
        setRegister(!register);
    }
    function HandleAvatar() {
        setAvatar(!avatar);
    }
    function HandleNotify() {
        setNotification(!notification);
    }
    return (
        <div className={`${classes.header} ${classes.shadownav}`}>
            <Cart state={cart} setState={ToggleCart} />
            <Login state={login} setState={HandleLogin} />
            <Register state={register} setState={HandleRegister} />
            <AvatarWindow state={avatar} setState={HandleAvatar} />
            <Notification state={notification} setState={HandleNotify} />
            <div className={classes.navbar}>
                <Link to={'/'}>
                    <img className={classes.logo} src={logo} />
                </Link>

                <ul className={classes.list}>
                    <NavLink to={'/'}>
                        <li className={classes.list_item}>Home</li>
                    </NavLink>
                    <NavLink to={'/products'}>
                        <li className={classes.list_item}>Product</li>
                    </NavLink>
                    <NavLink to={'/aboutus'}>
                        <li className={classes.list_item}>About us</li>
                    </NavLink>
                </ul>
                {
                    isLogin ?
                        (
                            <div className={classes.navlogin}>
                                <img onClick={HandleNotify} className={classes.notify} src={notifiIcon} />
                                <img onClick={HandleAvatar} className={classes.avt} src={user.avt} />
                            </div>
                        )
                        :
                        (
                            <div>
                                <Button onClick={HandleLogin}>LOG IN</Button>
                                <Button onClick={HandleRegister}>REGISTER</Button>
                            </div>
                        )
                }


            </div>
            <div className={classes.search}>
                <Search type="text" place="Search type, name or code product, etc." />
                <div className={classes.cart}>
                    <div className={classes.cartIcon}>
                        <i className="fa-solid fa-cart-shopping" onClick={ToggleCart}></i>

                        <span className={classes.cartNumble}>
                            {
                                cartsUser.length
                            }
                        </span>
                    </div>

                </div>
            </div>

        </div>

    )
}
