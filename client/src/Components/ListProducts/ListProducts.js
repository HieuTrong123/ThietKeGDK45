import React, { useState } from 'react'
import classes from './ListProducts.module.css';
import { Link, useNavigate } from 'react-router-dom';
import ItemProduct from './ItemProduct';

export default function ListProducts(props) {
    const navigate = useNavigate()

    return (
        <>
            <ul className={`${classes.list} ${props.className}`}>
                {props.list.map((e) =>
                    <li key={e.id}
                        onClick={() => navigate('/:base/detailsProduct', { state: e })}>
                        <ItemProduct stock={e.stock} sales={e.sales} vote={e.vote} image={e.image} keyitem={e.key} name={e.name} price={e.price} />
                    </li>
                )}

            </ul >
            <div className={classes.more}>
                <Link>View more</Link>
            </div>
        </>

    )
}
