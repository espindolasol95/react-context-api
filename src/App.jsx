import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/home'
import About from './components/About'
import Products from './components/Products'
import Layout from './components/Layout'
import ProductDetail from './components/ProductDetail'


function App() {
    return(
        <div>
         <Navbar />
        <div className="container mt-4">
        
         <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         </Routes>
         </div>
        </div>
    
    )
  
}

export default App
