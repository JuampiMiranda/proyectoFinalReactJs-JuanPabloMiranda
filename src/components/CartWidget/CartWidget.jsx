import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/2838/2838895.png";

  return (
    <div>
      <Link style={{textDecoration:"none"}} to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <strong className='Indicador'> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget