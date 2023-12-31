import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No hay productos en el carrito </h2>
                <button className="buttonCart3" > <Link to='/'> Ver Productos </Link> </button>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button className="buttonCart2" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            <button className="buttonCart3" > <Link to='/checkout'> Finalizar Compra </Link> </button>

        </div>
    )
}

export default Cart