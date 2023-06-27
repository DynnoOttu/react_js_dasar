/* eslint-disable no-unused-vars */
import CardProduct from "../components/Fragments/CardProduct";

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

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            {products.map((products) => (
                // eslint-disable-next-line react/jsx-key
                <CardProduct>
                    <CardProduct.Header image={products.images}/>
                    <CardProduct.Body name={products.name}>
                        {products.descreption}
                    </CardProduct.Body>
                    <CardProduct.Footer price={products.price}/>
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductsPage;