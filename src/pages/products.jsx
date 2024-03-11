import { Fragment, useEffect, useRef, useState } from "react"
import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"
import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        title: "Vtuber 1",
        price: 1000000,
        image: "/images/vtuber-1.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolorem. Alias nisi nam porro excepturi a veniam, esse fugit repudiandae omnis. Earum sint qui itaque expedita recusandae ipsam repellendus quam."
    },
    {
        id: 2,
        title: "Vtuber 2",
        price: 500000,
        image: "/images/vtuber-2.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolorem."
    },
    {
        id: 3,
        title: "Vtuber 3",
        price: 200000,
        image: "/images/vtuber-3.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolorem. Alias nisi nam porro excepturi a veniam, esse fugit repudiandae omnis."
    }
]

const getEmail = localStorage.getItem("email");

const ProductPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setCart (JSON.parse(localStorage.getItem("cart")) || [])
    }, [])

    useEffect(() => {
        if(cart.length>0){
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty
            }, 0)
            setTotalPrice(sum)
            localStorage.setItem("cart", JSON.stringify(cart))
        }else{
            setTotalPrice(0)
        }
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if(cart.find(item => item.id === id)){
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        }else{
            setCart([...cart, {id, qty:1}])
        }
    }

    const removeFromCart = (id) => {
        if(cart.find(item => item.id === id).qty > 1){
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty - 1} : item)
            )
        }else if(cart.find(item => item.id === id).qty < 1){
            setCart(cart.filter(item => item.id !== id))
        }else if(cart.length === 1){
            setCart([])
            localStorage.clear("cart")
        }
    }

    //useRef
    // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

    // const handleAddToCartRef = (id) => {
    //     cartRef.current = [...cartRef.current, {id, qty: 1}]
    //     localStorage.setItem("cart", JSON.stringify(cartRef.current));
    // }

    return (
        //harus return dalam 1 parent
        //coba latihan buat navbar component
        <Fragment>
            
            <div className=" flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {getEmail}
                <Button variant="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className=" flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.map ((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image}></CardProduct.Header>
                            <CardProduct.Body title={product.title}>
                            {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} ></CardProduct.Footer>
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* harusnya cart */}
                            {cart.map ((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>Rp {" "} {product.price.toLocaleString('id-ID', {styles: "currency", currency: "IDR"})}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp {" "} {(item.qty * product.price).toLocaleString('id-ID', {styles: "currency", currency: "IDR"})}</td>
                                        <td><Button variant="bg-red-600" onClick={() => removeFromCart(item.id)}>Remove</Button></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={3}>
                                    <b>Total Price</b>
                                </td>
                                <td>
                                    <b>Rp {" "} {totalPrice.toLocaleString('id-ID', {styles: "currency", currency: "IDR"})}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="mt-5 flex justify-center mb-5">
                <Counter></Counter>
            </div> */}
        </Fragment>
    )
}

export default ProductPage
