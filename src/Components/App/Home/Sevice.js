import React from 'react'
import classes from './Sevice.module.css'
export default function Sevice(props) {
    return (

        <div className={classes.parent}>
            <u className={classes.list}>
                {props.list.map((e, i) =>
                    <li key={i} className={classes.item}>
                        <img src={e.icon} />
                        <h4>{e.title}</h4>
                        <p>{e.content}</p>
                    </li>
                )}
            </u>

        </div>
    )
}
