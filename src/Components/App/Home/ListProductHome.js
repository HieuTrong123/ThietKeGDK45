import React from 'react'
import classes from './ListProductHome.module.css'
import ListProducts from '../../ListProducts/ListProducts'

export default function ListProductHome(props) {
    return (
        <div className={classes.parent}>
            <h1 className={classes.title}>{props.title}</h1>
            <p className={classes.head}>{props.head}</p>
            <ListProducts list={props.list} />
        </div>
    )
}
