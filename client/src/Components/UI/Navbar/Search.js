import React, { useState } from 'react'
import classes from './Search.module.css'
import { useNavigate } from 'react-router-dom';
export default function Search(props) {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    function HandleSearch(e) {
        e.preventDefault()
        navigate('/products', { state: search })
        setSearch('')
    }
    return (
        <form className={classes.search}>
            <input
                className={classes.input}
                type={props.type} placeholder={props.place}
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            />
            <button onClick={HandleSearch} className={classes.button} ><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}
