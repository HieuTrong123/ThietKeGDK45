import React, { useState } from 'react'
import classes from './ItemProduct.module.css';


export default function ItemProduct(props) {

    return (
        <div className={classes.item}>
            <div className={classes.vote}>
                <i className="fa-solid fa-star"></i>
                <span>{props.vote}</span>
            </div>
            <img className={classes.image} src={props.image} />
            <div className={classes.contain}>
                <p className={classes.key}>{props.keyitem}</p>
                <p className={classes.name}>{props.name}</p>
                <div className={classes.content}>
                    <div className={classes.content_price}>
                        {props.sales ? (
                            <>
                                <p className={classes.sales_price}>{props.sales.salePrice}</p>
                                <div className={classes.sale_Time}>
                                    {props.sales.saleTime}
                                </div>
                            </>
                        )
                            : <></>}
                        <p className={`${classes.price} ${props.sales ? classes.price_default : ''}`}>{props.price}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
