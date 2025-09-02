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
        image="https://images.unsplash.com/photo-1559312379-6eff3ba65888?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm9raWElMjBwaG9uZXxlbnwwfHwwfHx8MA==" 
        price={19.99} 
      /> <ProductCard 
        title="Example Product" 
        image="https://i.pinimg.com/originals/58/b6/9f/58b69ffc9850f1d5eabf9a2553561a2b.jpg" 
        price={19.99} 
      /> <ProductCard 
        title="Example Product" 
        image="https://iqrorwxhmnmnlp5m.ldycdn.com/cloud/ljBpjKjjllSRmkormijqjq/Nokia-Resistive-Touch-Screen-Phones3.jpg" 
        price={19.99} 
      />
       <ProductCard 
        title="Example Product" 
        image="https://www.astore.in/cdn/shop/files/download_31_e129964b-33dc-422b-b633-30a4070ea2af_575X670_crop_center.jpg?v=1702541743" 
        price={19.99} 
      />
       <ProductCard 
        title="Example Product" 
        image="https://i.pinimg.com/originals/1e/05/46/1e0546963147565659cc1fb7b63c3f54.jpg" 
        price={19.99} 
      />
       <ProductCard 
        title="Example Product" 
        image="https://cdn.beebom.com/mobile/2024/05/Untitled-design-2024-05-13T144554.656.png" 
        price={19.99} 
      />
    </>
  )
}

export default App
