/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Button";

const products = [
    {
        id: 1,
        name: "New shoes",
        price: "278.000",
        images: "/images/shoes-1.jpg",
        descreption: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cupiditate temporibus ipsum doloribus iure cum inventore magni architecto voluptas doloremque.`
    },
    {
        id: 2,
        name: "Old shoes",
        price: "100.000",
        images: "/images/shoes-1.jpg",
        descreption: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`
    }
]

const email = localStorage.getItem('email')

const ProductsPage = () => {

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href="/login"
    }

    return (
        <Fragment>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">{email} 
        <Button classname="ml-5 bg-black" onClick={handleLogout}> Logout</Button></div>
        <div className="flex justify-center py-5">
            {products.map((products) => (
                // eslint-disable-next-line react/jsx-key
                <CardProduct key={products.id}>
                    <CardProduct.Header image={products.images}/>
                    <CardProduct.Body name={products.name}>
                        {products.descreption}
                    </CardProduct.Body>
                    <CardProduct.Footer price={products.price}/>
                </CardProduct>
            ))}
        </div>
        </Fragment>
    )
}

export default ProductsPage;