import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import classes from './DetailsProduct.module.css'
import ListProducts from './ListProducts';
import Button from '../UI/Button/Button'
import Navbar from '../UI/Navbar/Navbar'
import Footer from '../UI/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux'
import { AddItemCart } from '../../Redux/userSlice';
import { list_seller } from '../../store/list';
export default function DetailsProduct() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const cart = useSelector((state) => state.user.listCart || [])
    const dispatch = useDispatch()

    const [small_size, set_small_size] = useState(true);
    const [medium_size, set_medium_size] = useState(false);
    const [large_size, set_large_size] = useState(false);


    function HandleSize() {
        let sum = 0;
        if (small_size) {
            sum += 200
        }
        if (medium_size) {
            sum += 500
        }
        if (large_size) {
            sum += 700
        }
        return sum
    }

    const [Quantity, setQuantity] = useState(1);

    function HandleAddItemCart() {
        const Weight = HandleSize();
        if (Weight === 0) {
            alert('Ban chua chon weight');
            return;
        }
        console.log(location.state);
        const item = {
            id: cart.length,
            name: location.state.name,
            price: location.state.sales ? location.state.sales.salePrice : location.state.price,
            img: location.state.image,
            quantity: `${Quantity} x ${Weight}gr`
        }
        dispatch(AddItemCart(item));
        alert('Add Product Successful');
    }


    return (
        <div>
            <Navbar />
            <div className={classes.Details}>
                <div className={classes.image_product}>
                    <img src={location.state.image} />
                </div>
                <div className={classes.text}>
                    <div className={classes.title}>
                        <h1>
                            {location.state.name}
                        </h1>
                    </div>
                    <div className={classes.price}>
                        {
                            location.state.sales ?
                                <>
                                    <p>{location.state.sales.salePrice}</p>
                                    <p className={classes.first_price}>{location.state.price}</p>
                                </>
                                :
                                <p>{location.state.price}</p>
                        }

                    </div>
                    <div className={classes.weight_option}>
                        <div className={classes.vote}>
                            <div className={classes.vote_star}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <p>(4.5 rating) • 601 reviewers</p>
                        </div>
                        <h3>Weight</h3>
                        <div className={classes.weight_button}>
                            <button onClick={() => { set_small_size(!small_size) }} className={small_size ? classes.active_btn : ''} type='button'>200gr</button>
                            <button onClick={() => { set_medium_size(!medium_size) }} className={medium_size ? classes.active_btn : ''} type='button'>500gr</button>
                            <button onClick={() => { set_large_size(!large_size) }} className={large_size ? classes.active_btn : ''} type='button'>700gr</button>
                        </div>
                        <div className={classes.quantity}>
                            <h3>Quantity</h3>
                            <input type='number' min={1} max={100} value={Quantity} onChange={e => { setQuantity(e.target.value) }} />
                        </div>
                        <div className={classes.buy_button}>
                            <Button onClick={HandleAddItemCart} className={classes.btn_add} type='button'>ADD TO CART</Button>
                            <Button className={classes.btn_buy} type='button'>BUY NOW</Button>
                        </div>

                    </div>
                </div>
            </div>
            <div className={classes.descriprion}>
                <h3>Description</h3>
                <p>{location.state.description}</p>
            </div>
            <div className={classes.specification}>
                <h3>Specification</h3>
                <ul>
                    <li>Name: {location.state.name}</li>
                    <li>Place: {location.state.specification.place}</li>
                    <li>MFG: {location.state.specification.mfg}</li>
                    <li>EXP: {location.state.specification.exp}</li>
                </ul>
            </div>

            <div className={classes.recommend}>
                <h2 className={classes.recmd_title}>Recommended</h2>
                <ListProducts className={classes.ListProducts} list={list_seller} />
            </div>
            <Footer />
        </div>
    )
}
