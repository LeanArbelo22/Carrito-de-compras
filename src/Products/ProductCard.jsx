import React from 'react';
import '../App.css';
import { useCart } from 'react-use-cart';

const ProductCard = (props) => {

    const { addItem } = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-2 mx-0 mb-2">
            <div className="card shadow">
                <img src={props.img} className="img-fluid prod-img" alt="" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.name}</h5>
                        <h6 className="card-title">${props.price}</h6>
                        <button className="btn btn-success boton-agregar" 
                                onClick={() => addItem(props.product)}>
                                    Añadir al carrito
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default ProductCard;