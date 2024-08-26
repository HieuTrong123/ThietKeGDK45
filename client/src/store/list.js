import BaoLocTea from '../assets/BaoLocTea.jpg'
import CauDatCoffee from '../assets/CauDatCoffee.jpg'
import DriedFruits from '../assets/DriedFruits.jpg'
import Nuts from '../assets/Nuts.jpg'
import Plumjam from '../assets/Plumjam.jpg'
import Strawberryjam from '../assets/Strawberryjam.jpg'
import Atiso from '../assets/Atiso.jpg'
import Fruitjuice from '../assets/FruitJuice.jpg'
import jam1 from '../assets/jam1.jpg'
import jam2 from '../assets/jam2.jpg'
import jam3 from '../assets/jam3.jpg'
import jam4 from '../assets/jam4.jpg'
import coffee1 from '../assets/coffee1.jpg'
import coffee2 from '../assets/coffee2.jpg'
import tea3 from '../assets/tea3.jpg'
import tea4 from '../assets/tea4.jpg'
import herbs1 from '../assets/herbs1.jpg'
import herbs2 from '../assets/herbs2.jpg'
import herbs3 from '../assets/herbs3.jpg'
import herbs4 from '../assets/herbs4.jpg'
import meat1 from '../assets/meat1.jpg'
import meat2 from '../assets/meat2.jpg'
import meat3 from '../assets/meat3.jpg'
import meat4 from '../assets/meat4.jpg'
import fruit1 from '../assets/fruit1.jpg'
import fruit2 from '../assets/fruit2.jpg'
import fruit3 from '../assets/fruit3.jpg'
import fruit4 from '../assets/fruit4.jpg'
import tb1 from '../assets/tb1.jpg'
import tb2 from '../assets/tb2.jpg'
import tb3 from '../assets/tb3.jpg'
import tb4 from '../assets/tb4.jpg'
import fl1 from '../assets/fl1.jpg'
import fl2 from '../assets/fl2.jpg'
import fl3 from '../assets/fl3.jpg'
import fl4 from '../assets/fl4.jpg'
import juice1 from '../assets/juice1.jpg'
import juice2 from '../assets/juice2.jpg'
import juice3 from '../assets/juice3.jpg'
import juice4 from '../assets/juice4.jpg'
const listProducts = [
    {
        id: 0,
        image: BaoLocTea,
        name: "Bao Loc's Tea",
        price: '$121.45',
        vote: 4.5
        ,
        key: 'Coffee & tea',
        // sales: {
        //     salePrice: '10.00$',
        //     saleTime: '-20%'
        // },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 1,
        image: CauDatCoffee,
        name: "Cau Dat's Coffee",
        price: '$80.32',
        vote: 4.5
        ,
        key: 'Coffee & tea',
        sales: {
            salePrice: '$60.77',
            saleTime: '-20%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 2,
        image: DriedFruits,
        name: 'Dried Fruits',
        price: '$97.99',
        vote: 4.5
        ,
        key: 'Dried Fruits',
        sales: {
            salePrice: '$80.55',
            saleTime: '-30%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 3,
        image: Nuts,
        name: 'Nuts',
        price: '$100.99',

        vote: 4.5
        ,
        key: 'Dried',
        sales: {
            salePrice: '$89.55',
            saleTime: '-10%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 4,
        image: Plumjam,
        name: 'Plum jam',
        price: '$45.55',

        vote: 4.5
        ,
        key: 'Jam',
        sales: {
            salePrice: '$30.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 5,
        image: Strawberryjam,
        name: 'Strawberry jam',
        price: '$53.00',
        vote: 4.9
        ,
        key: 'Jam',
        sales: {
            salePrice: '$41.20',
            saleTime: '-25%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 6,
        image: Atiso,
        name: 'Atiso',
        price: '$75.56',
        vote: 4.3
        ,
        key: 'Dried',
        sales: {
            salePrice: '$55.00',
            saleTime: '-20%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 7,
        image: Fruitjuice,
        name: 'Fruit juice',
        price: '$34.75',
        vote: 4.1
        ,
        key: 'Juice',
        // sales: {
        //     salePrice: '$23.56',
        //     saleTime: '-40%'
        // },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 8,
        image: jam2,
        name: 'Strawberry jam',
        price: '$79.16',

        vote: 4.5
        ,
        key: 'Jam',
        sales: {
            salePrice: '$52.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 9,
        image: jam3,
        name: 'Grape jam',
        price: '$145.65',

        vote: 4.5
        ,
        key: 'Jam',
        // sales: {
        //     salePrice: '$130.25',
        //     saleTime: '-20%'
        // },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 10,
        image: jam4,
        name: 'Tomato jam',
        price: '$16.15',

        vote: 4.5
        ,
        key: 'Jam',
        // sales: {
        //     salePrice: '$10.25',
        //     saleTime: '-20%'
        // },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 11,
        image: meat1,
        name: "Pork Dried",
        price: '$91.76',

        vote: 4.5
        ,
        key: 'Dried Meat',
        // sales: {
        //     salePrice: '$87.11',
        //     saleTime: '-20%'
        // },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 12,
        image: tea3,
        name: "Bao Loc's Tea",
        price: '$55.65',

        vote: 4.5
        ,
        key: 'Coffee & Tea',
        sales: {
            salePrice: '$41.16',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 13,
        image: tea4,
        name: 'Green Tea',
        price: '$96.15',

        vote: 4.5
        ,
        key: 'Coffee & Tea',
        // sales: {
        //     salePrice: '$80.01',
        //     saleTime: '-20%'
        // },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 14,
        image: juice3,
        name: "Strawberry Juice",
        price: '$30.25',

        vote: 4.5
        ,
        key: 'Juice',
        // sales: {
        //     salePrice: '$26.44',
        //     saleTime: '-20%'
        // },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 15,
        image: juice4,
        name: 'Tomato Juice',
        price: '$50.25',

        vote: 4.5
        ,
        key: 'Juice',
        // sales: {
        //     salePrice: '$45.55',
        //     saleTime: '-20%'
        // },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

];

const list_seller = [
    {
        id: 0,
        image: BaoLocTea,
        name: "Bao Loc's Tea",
        price: '$121.45',
        vote: 4.5
        ,
        key: 'Coffee & tea',
        sales: {
            salePrice: '10.00$',
            saleTime: '-20%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 1,
        image: CauDatCoffee,
        name: "Cau Dat's Coffee",
        price: '$80.32',
        vote: 4.5
        ,
        key: 'Coffee & tea',
        sales: {
            salePrice: '$60.77',
            saleTime: '-20%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 2,
        image: DriedFruits,
        name: 'Dried Fruits',
        price: '$97.99',
        vote: 4.5
        ,
        key: 'Dried Fruits',
        sales: {
            salePrice: '$80.55',
            saleTime: '-30%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 3,
        image: Nuts,
        name: 'Nuts',
        price: '$100.99',

        vote: 4.5
        ,
        key: 'Dried',
        sales: {
            salePrice: '$89.55',
            saleTime: '-10%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 4,
        image: herbs1,
        name: "Green Herbs",
        price: '$9.71',

        vote: 4.5
        ,
        key: 'Herbs',
        sales: {
            salePrice: '$47.11',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 5,
        image: meat1,
        name: "Pork Dried",
        price: '$91.76',

        vote: 4.5
        ,
        key: 'Dried Meat',
        sales: {
            salePrice: '$87.11',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 6,
        image: juice1,
        name: "Orange Juice",
        price: '$66.89',

        vote: 4.5
        ,
        key: 'Juice',
        sales: {
            salePrice: '$53.11',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 7,
        image: tb2,
        name: "Atiso Tea Bag",
        price: '$24.95',

        vote: 4.5
        ,
        key: 'Tea Bag',
        sales: {
            salePrice: '$18.99',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
]
const list_sellof = [
    {
        id: 0,
        image: Plumjam,
        name: 'Plum jam',
        price: '$45.55',

        vote: 4.5
        ,
        key: 'Jam',
        sales: {
            salePrice: '$30.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 1,
        image: Strawberryjam,
        name: 'Strawberry jam',
        price: '$53.00',
        vote: 4.9
        ,
        key: 'Jam',
        sales: {
            salePrice: '$41.20',
            saleTime: '-25%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 2,
        image: Atiso,
        name: 'Atiso',
        price: '$75.56',
        vote: 4.3
        ,
        key: 'Dried',
        sales: {
            salePrice: '$55.00',
            saleTime: '-20%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 3,
        image: Fruitjuice,
        name: 'Fruit juice',
        price: '$34.75',
        vote: 4.1
        ,
        key: 'Juice',
        sales: {
            salePrice: '$23.56',
            saleTime: '-40%'
        },
        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
    {
        id: 4,
        image: meat3,
        name: "Cow Dried",
        price: '$75.65',

        vote: 4.5
        ,
        key: 'Dried Meat',
        sales: {
            salePrice: '$70.26',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 5,
        image: meat4,
        name: 'Chicken Dried',
        price: '$26.15',

        vote: 4.5
        ,
        key: 'Dried Meat',
        sales: {
            salePrice: '$20.09',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 6,
        image: herbs3,
        name: "Sweet Herbs",
        price: '$75.65',

        vote: 4.5
        ,
        key: 'Herbs',
        sales: {
            salePrice: '$61.16',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 7,
        image: herbs4,
        name: 'Atiso',
        price: '$96.15',

        vote: 4.5
        ,
        key: 'Herbs',
        sales: {
            salePrice: '$15.09',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
]
const list_category = [
    {
        id: 0,
        image: jam1,
        name: 'Chili jam',
        price: '$21.51',

        vote: 4.5
        ,
        key: 'Jam',
        sales: {
            salePrice: '$20.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 1,
        image: jam2,
        name: 'Strawberry jam',
        price: '$79.16',

        vote: 4.5
        ,
        key: 'Jam',
        sales: {
            salePrice: '$52.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 3,
        image: jam3,
        name: 'Grape jam',
        price: '$145.65',

        vote: 4.5
        ,
        key: 'Jam',
        sales: {
            salePrice: '$130.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 4,
        image: jam4,
        name: 'Tomato jam',
        price: '$16.15',

        vote: 4.5
        ,
        key: 'Jam',
        sales: {
            salePrice: '$10.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
]
const list_coffee_tea = [
    {
        id: 0,
        image: coffee1,
        name: "Bao Loc's Coffee",
        price: '$21.51',

        vote: 4.5
        ,
        key: 'Coffee & Tea',
        sales: {
            salePrice: '$20.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 1,
        image: coffee2,
        name: 'Raccon coffee',
        price: '$29.16',

        vote: 4.5
        ,
        key: 'Coffee & Tea',
        sales: {
            salePrice: '$22.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 3,
        image: tea3,
        name: "Bao Loc's Tea",
        price: '$55.65',

        vote: 4.5
        ,
        key: 'Coffee & Tea',
        sales: {
            salePrice: '$41.16',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 4,
        image: tea4,
        name: 'Green Tea',
        price: '$96.15',

        vote: 4.5
        ,
        key: 'Coffee & Tea',
        sales: {
            salePrice: '$80.01',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
];

const list_herbs = [
    {
        id: 0,
        image: herbs1,
        name: "Green Herbs",
        price: '$9.71',

        vote: 4.5
        ,
        key: 'Herbs',
        sales: {
            salePrice: '$47.11',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 1,
        image: herbs2,
        name: "Bao Loc's Herbs",
        price: '$74.21',

        vote: 4.5
        ,
        key: 'Herbs',
        sales: {
            salePrice: '$22.25',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 3,
        image: herbs3,
        name: "Sweet Herbs",
        price: '$75.65',

        vote: 4.5
        ,
        key: 'Herbs',
        sales: {
            salePrice: '$61.16',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 4,
        image: herbs4,
        name: 'Atiso',
        price: '$96.15',

        vote: 4.5
        ,
        key: 'Herbs',
        sales: {
            salePrice: '$15.09',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
];

const list_meat = [
    {
        id: 0,
        image: meat1,
        name: "Pork Dried",
        price: '$91.76',

        vote: 4.5
        ,
        key: 'Dried Meat',
        sales: {
            salePrice: '$87.11',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 1,
        image: meat2,
        name: "Goat Dried",
        price: '$84.21',

        vote: 4.5
        ,
        key: 'Dried Meat',
        sales: {
            salePrice: '$80.00',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 3,
        image: meat3,
        name: "Cow Dried",
        price: '$75.65',

        vote: 4.5
        ,
        key: 'Dried Meat',
        sales: {
            salePrice: '$70.26',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 4,
        image: meat4,
        name: 'Chicken Dried',
        price: '$26.15',

        vote: 4.5
        ,
        key: 'Dried Meat',
        sales: {
            salePrice: '$20.09',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
];

const list_fruit = [
    {
        id: 0,
        image: fruit1,
        name: "Banana Dried",
        price: '$40.76',

        vote: 4.5
        ,
        key: 'Dried Fruits',
        sales: {
            salePrice: '$24.11',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 1,
        image: fruit2,
        name: "Durian Dried",
        price: '$99.99',

        vote: 4.5
        ,
        key: 'Dried Fruits',
        sales: {
            salePrice: '$72.99',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 3,
        image: fruit3,
        name: "Strawberry Dried",
        price: '$40.25',

        vote: 4.5
        ,
        key: 'Dried Fruits',
        sales: {
            salePrice: '$32.44',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 4,
        image: fruit4,
        name: 'Apple Dried',
        price: '$50.25',

        vote: 4.5
        ,
        key: 'Dried Fruits',
        sales: {
            salePrice: '$45.55',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
];

const list_tb = [
    {
        id: 0,
        image: tb1,
        name: "Green Tea Bag",
        price: '$20.76',

        vote: 4.5
        ,
        key: 'Tea Bag',
        sales: {
            salePrice: '$14.11',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 1,
        image: tb2,
        name: "Atiso Tea Bag",
        price: '$24.95',

        vote: 4.5
        ,
        key: 'Tea Bag',
        sales: {
            salePrice: '$18.99',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 3,
        image: tb3,
        name: "Black Tea Bag",
        price: '$30.25',

        vote: 4.5
        ,
        key: 'Dried Fruits',
        sales: {
            salePrice: '$26.44',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 4,
        image: tb4,
        name: 'Red Tea Bag',
        price: '$50.25',

        vote: 4.5
        ,
        key: 'Tea Bag',
        sales: {
            salePrice: '$45.55',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
];

const list_fl = [
    {
        id: 0,
        image: fl1,
        name: "Soy Flour",
        price: '$66.89',

        vote: 4.5
        ,
        key: 'Flour',
        sales: {
            salePrice: '$53.11',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 1,
        image: fl2,
        name: "Matcha Flour",
        price: '$32.95',

        vote: 4.5
        ,
        key: 'Flour',
        sales: {
            salePrice: '$23.00',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 3,
        image: fl3,
        name: "Cacao Flour",
        price: '$30.25',

        vote: 4.5
        ,
        key: 'Flour',
        sales: {
            salePrice: '$26.44',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 4,
        image: tb4,
        name: 'Red Tea Flour',
        price: '$50.25',

        vote: 4.5
        ,
        key: 'Flour',
        sales: {
            salePrice: '$45.55',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
];

const list_juice = [
    {
        id: 0,
        image: juice1,
        name: "Orange Juice",
        price: '$66.89',

        vote: 4.5
        ,
        key: 'Juice',
        sales: {
            salePrice: '$53.11',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 1,
        image: juice2,
        name: "Apple Juice",
        price: '$32.95',

        vote: 4.5
        ,
        key: 'Juice',
        sales: {
            salePrice: '$23.00',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 3,
        image: juice3,
        name: "Strawberry Juice",
        price: '$30.25',

        vote: 4.5
        ,
        key: 'Juice',
        sales: {
            salePrice: '$26.44',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },

    {
        id: 4,
        image: juice4,
        name: 'Tomato Juice',
        price: '$50.25',

        vote: 4.5
        ,
        key: 'Juice',
        sales: {
            salePrice: '$45.55',
            saleTime: '-20%'
        },

        specification: {
            place: 'Made in Vietnamese',
            mfg: "14/07/2023",
            exp: "1 year since mfg",
        },
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie eget mauris et auctor ac quisque. Sit magna sit velit gravida. Pretium sit in turpis id eu. Venenatis orci fringilla venenatis aliquet ac gravida. Facilisis nullam sed malesuada sed velit donec. Pellentesque sem a lectus purus ornare. Nibh massa enim etiam nisl nullam nulla et. Donec consequat commodo faucibus eu eget convallis id id. Venenatis suspendisse nibh venenatis sed porta senectus."
    },
];

export { listProducts, list_seller, list_sellof, list_category, list_coffee_tea, list_herbs, list_meat, list_fruit, list_tb, list_fl, list_juice };