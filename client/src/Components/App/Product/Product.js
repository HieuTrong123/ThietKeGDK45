import React, { useEffect, useState } from 'react'
import Navbar from '../../UI/Navbar/Navbar'
import classes from './Product.module.css'
import Footer from '../../UI/Footer/Footer'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
export default function Product() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [category, setCategory] = useState(true);

    function HandleCategoty() {
        setCategory(!category);
    }

    const location = useLocation()
    console.log(location)
    return (
        <>
            <Navbar />

            <div className={classes.container}>
                {location.state ? (
                    <>
                        <p className={classes.search}>Search filter: results for " {location.state} " :</p>
                    </>
                ) : <></>}
                <div className={classes.container_body}>
                    <div className={classes.slide__menu}>
                        <ul className={classes.slide__list}>
                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/seller'}>BEST SELLER</NavLink></li>
                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/sellof'}>SELL OF DAY</NavLink></li>
                            <li onClick={HandleCategoty} className={classes.category}>CATEGORY</li>
                            {
                                category ? (<ul className={classes.sub__menu}>
                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/jams'}>JAMS</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/cfetea'}>COFFEE & TEA</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/herbs'}>HERBS</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/meat'}>DRIED MEAT</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/dried'}>DRIED FRUITS</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/teabag'}>TEA BAG</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/flour'}>FLOUR</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={'/products/juice'}>JUICE</NavLink></li>
                                </ul>) : <></>
                            }
                        </ul>
                    </div>
                    <div className={classes.products}>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
