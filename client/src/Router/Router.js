import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/App/Home/Home';
import Product from '../Components/App/Product/Product';
import AboutUs from '../Components/App/AboutUs/AboutUs';
import DetailsProduct from '../Components/ListProducts/DetailsProduct';
import Info from '../Components/Info/Info';
import AvatarWindow from '../Components/AvatarWindow/AvatarWindow';
import ListProducts from '../Components/ListProducts/ListProducts';
import { listProducts, list_seller, list_sellof, list_category, list_coffee_tea, list_herbs, list_meat, list_fruit, list_tb, list_fl, list_juice } from '../store/list';
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Product />,
        children: [
            {
                index: true,
                element: <ListProducts list={listProducts} />
            },
            {
                path: 'seller',
                element: <ListProducts list={list_seller} />
            },
            {
                path: 'sellof',
                element: <ListProducts list={list_sellof} />

            },
            {
                path: 'jams',
                element: <ListProducts list={list_category} />

            },
            {
                path: 'cfetea',
                element: <ListProducts list={list_coffee_tea} />

            },
            {
                path: 'herbs',
                element: <ListProducts list={list_herbs} />

            },

            {
                path: 'meat',
                element: <ListProducts list={list_meat} />

            },

            {
                path: 'dried',
                element: <ListProducts list={list_fruit} />

            },

            {
                path: 'teabag',
                element: <ListProducts list={list_tb} />

            },

            {
                path: 'flour',
                element: <ListProducts list={list_fl} />

            },

            {
                path: 'juice',
                element: <ListProducts list={list_juice} />

            },
        ]
    },
    {
        path: "/aboutus",
        element: <AboutUs />,
    },
    {
        path: "/:base/detailsProduct",
        element: <DetailsProduct />,
    },
    {
        path: "/info",
        element: <Info />,
    },
    {
        path: "/avatar",
        element: <AvatarWindow />,
    },


]);

export default Router;