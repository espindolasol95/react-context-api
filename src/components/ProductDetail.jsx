import React,{useEffect, useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';


const ProductDetail = () => {
    const{id}=useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    

    useEffect(()=>{
     fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

    },[id])
    if (!product) return <p>Caricamento...</p>


    const productId = parseInt(id);

  return (
    <>
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>

    <div className='d-flex  gap-3'>
        <button className='btn btn-outline-dark'
         onClick={() => navigate(`/products/${productId - 1}`)}
         >
         Precendente 
        </button>
        <button className='btn btn-outline-dark'
         onClick={() => navigate(`/products/${productId + 1}`)}
         >
         Successivo
        </button>

    </div>

    </>
  );
}

export default ProductDetail;
