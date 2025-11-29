import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React, {useState} from 'react';
import Footer from './components/Footer';
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
      price: 99999,
      name: 'Iphone',
      quantity: 0,
    },
    {
      price: 9999,
      name: 'Samsung Galaxy',
      quantity: 0,
    }
  ]

  const [productList, setProductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCount, setTotalCount] = useState(products.length);

  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
    setTotalCount(newProductList.length);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount;
    // if(newProductList[index].qunatity > 0) {
      newProductList[index].quantity--
      newTotalAmount -= newProductList[index].price
    // }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
    setTotalCount(newProductList.length);
  }

  const resetQuantity = () => {
    let newProductList = [...productList]
    newProductList.map((products) => {
      products.quantity = 0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
    setTotalCount(newProductList.length);
  }

  const addItem = (name, price) => {
    let newProductList = [...productList]
    newProductList.push({
      price: price,
      name: name,
      quantity: 0
    })

    setProductList(newProductList);
    setTotalCount(newProductList.length);
  }

  return (
    <>
    <Navbar totalCount = {totalCount} />
    <main className='container mt-5'>
    <AddItem addItem = {addItem}/>
    <ProductList productList= {productList} incrementQuantity= {incrementQuantity} decrementQuantity = {decrementQuantity} removeItem = {removeItem}/>
    </main>
    <Footer totalAmount = {totalAmount} resetQuantity = {resetQuantity}/>
    </> 
  );
}

export default App;
