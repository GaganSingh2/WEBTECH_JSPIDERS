import React from 'react'
import './App.css'
import IfElseConditionalRendering from './components/IfElseConditionalRendering'

//import Bootstrap in Application so we can use the property of Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCardUsingIfElse from './components/ProductCardUsingIfElse';
import ProductSwitch from './components/ProductSwitch';
import TernaryConditionalRendering from './components/TernaryConditionalRendering';
import LogicalAndConditionalRendering from './components/LogicalAndConditionalRendering';
import LogicalOrConditionalRendering from './components/LogicalOrConditionalRendering';
import SwitchCaseConditionalRendering from './components/SwitchCaseConditionalRendering';

const productInfo = {
  title: "Teddy Bear",
  image: "https://static.vecteezy.com/system/resources/thumbnails/035/845/381/small/ai-generated-toys-bears-and-toys-in-the-foreground-free-photo.jpg",
  price: 2999,
  rating: 4.4
}
function App() {

  return (
    <>
    {/* If...Else Conditional Rendering-------- */}
    {/* <IfElseConditionalRendering /> */}

    {/* <ProductCardUsingIfElse productInfo = {productInfo}/> */}
    {/* <ProductSwitch productInfo = {productInfo}/> */}

    {/* Ternary Conditional Rendering------------ */}
    {/* <TernaryConditionalRendering isAuth={true} user={"Gagan"}/> */}

    {/* Logical AND(&&) Conditional Rendering--------- */}
    {/* <LogicalAndConditionalRendering /> */}

     {/* Logical OR (||) Conditional Rendering--------- */}
    {/* <LogicalOrConditionalRendering user={"Gagan"}/> */}

     {/* Switch Case Conditional Rendering--------- */}
    <SwitchCaseConditionalRendering />
    </>
  )
}

export default App
