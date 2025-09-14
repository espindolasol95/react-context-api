import React from 'react'
import{useState, useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom' 
function Products(){
  const [products, setProducts]= useState([]) 
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(()=>{
     axios.get('https://fakestoreapi.com/products')
     .then(response => {
      setProducts(response.data) //salvo i prodotti nello stato
      setLoading (false) 
     })
      .catch(err => {
        setError(err.message)        // salvo eventuale errore
        setLoading(false)

  })

 },[])

 if (loading) return <p>Caricamento prodotti...</p>  //questo l'ho copiato non sono riuscita a ragionarlo prima
 if (error) return <p>Errore: {error}</p>


  //render della pag con i prodotti
  return (
    <div className="container mt-4">
        <h1  className="mb-4 text-center"> I nostri proddotti</h1>
        <div className="row">
          {products.map(product =>(
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 card border-black">
              <img src={product.image} className="card-img-top p-3" alt={product.title} style={{height: '200px', objectFit: 'contain'}}/>

              <div className="card-body d-flex flex-column ">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text mt-auto">${product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-warning mt-2">Dettagli</Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      
    </div>
  )
}



export default Products
