import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { BudgetContext } from "../context/BudgetContext";

const Navbar = () => {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
        <NavLink className="navbar-brand" to="/">Store</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
               to="/" 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                  Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Chi siamo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/products" 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Prodotti
              </NavLink>
            </li>
          </ul>
          <div className='ms-auto'>
            <button className='btn btn-warning'
             onClick={() => setBudgetMode(!budgetMode)}
             >
             {budgetMode ? 'Disattiva Budget' : 'Attiva Budget'} 
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
