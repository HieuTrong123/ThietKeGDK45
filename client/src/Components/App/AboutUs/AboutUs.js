import React, { useEffect } from 'react'
import classes from './AboutUs.module.css'
import Navbar from '../../UI/Navbar/Navbar'
import Footer from '../../UI/Footer/Footer'
import imgabout1 from '../../../assets/about1.png'
import imgabout2 from '../../../assets/about2.png'
import imgabout3 from '../../../assets/about3.png'
export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div >
            <Navbar />
            <div className={classes.header}>
                <div className={classes.title}>
                    <h1>
                        About DaLat’s Food
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Suspendisse purus ultrices eget sodales aliquet sapien. Vestibulum morbi enim felis.
                    </p>
                </div>
                <img src={imgabout1} />
            </div>
            <div className={classes.contain}>
                <div className={classes.list}>
                    <div className={`${classes.item} ${classes.item_high}`}>
                        <h1>What we sell</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Sit cursus quam pretium faucibus urna lobortis tristique arcu magnis. Vitae id consectetur ornare suspendisse sed tristique egestas velit viverra.

                            Consequat non quisque lorem egestas sed arcu elementum gravida. In sed vel interdum mollis cursus dolor morbi. Elementum dictum rhoncus facilisi vel enim fames consequat. Et fermentum egestas ultricies volutpat imperdiet et scelerisque. Lacus pharetra fusce vitae dignissim pharetra potenti. Nibh dolor pellentesque amet aliquet amet rutrum. Imperdiet cras ornare a nec sapien feugiat. Elit eget elit eget odio duis euismod tortor porttitor pulvinar.

                            Arcu ornare mattis augue ut. Nunc eget dignissim sem eget non sem. Cursus sit ac auctor leo sed phasellus. Vestibulum lectus odio arcu neque. Pellentesque enim phasellus at at commodo.
                            Dui vel dis rhoncus quis non sed. Turpis tellus vestibulum vitae sed leo elit. Diam hendrerit eget ultrices id vitae mauris in semper duis. Id sed sagittis vel elit accumsan pretium proin ornare lacus risus lorem.
                        </p>
                        <img src={imgabout2} />
                    </div>
                    <div className={`${classes.item} ${classes.item_short}`}>
                        <h1>Our Partnership</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Sit cursus quam pretium faucibus urna lobortis tristique arcu magnis. Vitae id consectetur ornare suspendisse sed tristique egestas velit viverra. .
                        </p>
                        <img src={imgabout3} />
                    </div>
                </div>
                <div className={classes.list}>
                    <div className={`${classes.item} ${classes.item_short}`}>
                        <h1>Our target</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Sit cursus quam pretium faucibus urna lobortis tristique arcu magnis. Vitae id consectetur ornare suspendisse sed tristique egestas velit viverra.
                        </p>
                        <img src={imgabout2} />
                    </div>
                    <div className={`${classes.item} ${classes.item_high}`}>
                        <h1>Who we serve</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Sit cursus quam pretium faucibus urna lobortis tristique arcu magnis. Vitae id consectetur ornare suspendisse sed tristique egestas velit viverra.

                            Consequat non quisque lorem egestas sed arcu elementum gravida. In sed vel interdum mollis cursus dolor morbi. Elementum dictum rhoncus facilisi vel enim fames consequat. Et fermentum egestas ultricies volutpat imperdiet et scelerisque. Lacus pharetra fusce vitae dignissim pharetra potenti. Nibh dolor pellentesque amet aliquet amet rutrum. Imperdiet cras ornare a nec sapien feugiat. Elit eget elit eget odio duis euismod tortor porttitor pulvinar.
                            Lorem ipsum dolor sit amet consectetur. Sit cursus quam pretium faucibus urna lobortis tristique arcu magnis. Vitae id consectetur ornare suspendisse sed tristique egestas velit viverra.

                            Consequat non quisque lorem egestas sed arcu elementum gravida. In sed vel interdum mollis cursus dolor morbi. Elementum dictum rhoncus facilisi vel enim fames consequat. Et fermentum egestas ultricies volutpat imperdiet et scelerisque. Lacus pharetra fusce vitae dignissim pharetra potenti. Nibh dolor pellentesque amet aliquet amet rutrum. Imperdiet cras ornare a nec sapien feugiat. Elit eget elit eget odio duis euismod tortor porttitor pulvinar.
                        </p>
                        <img src={imgabout2} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
