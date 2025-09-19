import React from "react"
import './Products.css'
import Product from "./Product";

function Products(){
    var[products,setProducts]=React.useState([])
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then ((data)=>{
        setProducts([...data])
    });
   return (
    <div className="border border-5 p-2 m-2 border-info">
        <h1>Products Length:{products.length}</h1>
        <ul className="products-list">
            {
                products.map((product)=>{
                    return <Product a={product}></Product>
                })
            }
        </ul>
    </div>
   )
}
export default Products;