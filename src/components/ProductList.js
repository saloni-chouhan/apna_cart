import React from 'react'
import Product from './Product'

function ProductList(props) {
  return (
    props.productList.length > 0 ?
    props.productList.map((product, idx) => {
      return <Product product= {product} key={idx} incrementQuantity= {props.incrementQuantity} index={idx} decrementQuantity = {props.decrementQuantity} removeItem = {props.removeItem}/>
    }) : <h2>No Product Found!</h2>
  )
}

export default ProductList
