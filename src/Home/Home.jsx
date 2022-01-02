import React from 'react';
import ProductCard from '../Products/ProductCard';
import products from '../Products/products';
import '../App.css';

const Home = () => {
    
    //console.warn(products.productData)

    return (
        <>
            <h3 className="home-h3">Productos</h3>
            <section className="container home-section">
                <div className="row home-grid-display">
                    {
                        products.productData.map((product, index) => {
                            return (
                                <ProductCard 
                                        img={product.img} 
                                        name={product.name} 
                                        price={product.price} 
                                        /* desc={product.desc} */
                                        product={product}
                                        key={index} 
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Home;