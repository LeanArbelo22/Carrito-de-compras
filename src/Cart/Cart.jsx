import React from 'react';
import { useCart } from 'react-use-cart'

const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if(isEmpty) return <h2 className="text-center mb-5">Tu carrito esta vacio</h2>

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Carrito ({totalUniqueItems})</h5>
                    <h6>Total productos: {totalItems}</h6>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                        {
                            items.map((item, index) => {
                               return (
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{height: '6rem'}} />
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        ${item.price}
                                    </td>
                                    <td>
                                        Unidades: {item.quantity}
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-info ms-2"
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        > - </button>
                                        <button 
                                            className="btn btn-info ms-2"
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        > + </button>
                                        <button 
                                            className="btn btn-danger ms-2"
                                            onClick={() => removeItem(item.id)}
                                        > Eliminar producto </button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total: ${cartTotal}</h2>
                </div>
                <div className="col-auto">
                        <button 
                            className="btn btn-danger m-2"
                            onClick={() => emptyCart()}>
                            Vaciar carrito
                        </button>
                        <button
                            className="btn btn-primary m-2">
                                Comprar
                        </button>
                </div>
            </div>
        </section>
    )
}

export default Cart;