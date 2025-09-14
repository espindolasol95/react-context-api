import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/home'
import About from './Pages/About'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import { BudgetProvider } from './context/BudgetContext'


function App() {
    return(
        
        <BudgetProvider>
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
        </BudgetProvider>
    
    )
  
}

export default App
