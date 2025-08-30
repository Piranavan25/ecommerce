import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './product_card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCard 
        title="Example Product" 
        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
        price={19.99} 
      />
    </>
  )
}

export default App
