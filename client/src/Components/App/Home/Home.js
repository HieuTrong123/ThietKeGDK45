import React, { useEffect } from 'react'
import classes from './Home.module.css'
import Navbar from '../../UI/Navbar/Navbar'
import Button from '../../UI/Button/Button'
import Sevice from './Sevice'
import imgSevice from '../../../assets/sevice.png'
import imgShipping from '../../../assets/shpping.png'
import imgSevice2 from '../../../assets/sevice2.png'
import ListProductHome from './ListProductHome'
import Footer from '../../UI/Footer/Footer'
import { list_seller, list_sellof } from '../../../store/list'
import { Link } from 'react-router-dom'
export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const listSevices = [
        {
            icon: imgSevice,
            title: 'Exceptional Service',
            content: 'Lorem ipsum dolor sit amet consectetur. Ut nunc nunc aliquet est amet ut eget tortor. Quis est id cursus ullamcorper venenatis.'
        },
        {
            icon: imgShipping,
            title: 'Shipping',
            content: 'Lorem ipsum dolor sit amet consectetur. Ut nunc nunc aliquet est amet ut eget tortor. Quis est id cursus ullamcorper venenatis.'
        },
        {
            icon: imgSevice2,
            title: 'Exceptional Service',
            content: 'Lorem ipsum dolor sit amet consectetur. Ut nunc nunc aliquet est amet ut eget tortor. Quis est id cursus ullamcorper venenatis.'
        },
    ]

    return (
        <div>
            <Navbar />
            <div className={classes.intro}>
                <h2>DA LAT</h2>
                <h3>SPECIALITY</h3>
                <Link to={'/products'}>
                    <Button className={classes.btn}>MORE</Button>
                </Link>
            </div>
            <Sevice list={listSevices} />
            <ListProductHome title="Best seller" head="buy our product best sell " list={list_seller} />
            <ListProductHome title="Sell off day" head="buy our product best sell " list={list_sellof} />
            <Footer />
        </div>
    )
}
