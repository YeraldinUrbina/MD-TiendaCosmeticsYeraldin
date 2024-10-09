import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'),10); 

  
  const products = [
    { id: 1, name: 'Skincare', price: 100 },
    { id: 2, name: 'Kit Completo', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 }
  ];

  
  const product = products.find(p => p.id === Number(id));

  return (
    <div>
      {product ? (
        <>
          <h1 className='detalle'>Detalles del Producto</h1>
          <p>Nombre: {product.name}</p>
          <p>Precio: ${product.price}</p>
        </>
      ) : (
        <h1>Producto no encontrado</h1>
      )}
    </div>
  );
};

export default ProductDetails;

