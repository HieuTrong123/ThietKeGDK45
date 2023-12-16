import React from 'react'
import classes from './Footer.module.css'
export default function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.list}>
                <div className={classes.item}>
                    <h1>Contact Us</h1>
                    <ul>
                        <li>
                            +84 32713t2176313
                        </li>
                        <li>
                            +84 32713t2176313
                        </li>
                        <li>
                            abc@gmail.com
                        </li>
                    </ul>
                </div>
                <div className={classes.item}>
                    <h1>Address</h1>
                    <ul>
                        <li>
                            8 Phu Dong Thien Vuong Street Dalat City, Lam Dong
                        </li>
                        <li>
                            26 Phan Dinh Phung, District 10 Ho Chi Minh City
                        </li>
                        <li>
                            An Hai Tay Ward, District Son Tra Da Nang City
                        </li>
                    </ul>
                </div>
                <div className={classes.item}>
                    <h1>Subscribe</h1>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur. In hac integer quis scelerisque sit. Consectetur neque eros magna diam adipiscing arcu non augue.
                        </li>
                        <li className={classes.sendEmail}>
                            <input placeholder='Enter your email' type="text" />
                            <button>send</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.link}>
                <span>@2023 All Rights Reserved.</span>
                <div>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}
