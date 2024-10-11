import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'),10); 

  
  const products = [
    { id: 1, name: 'Skincare', price: 100 ,description:'Los mejores productos para el cuidado de tu piel'},
    { id: 2, name: 'Kit Completo', price: 200, description:'Los mejores maquillajes para lucir radiante todo el dia' },
    { id: 3, name: 'Base Alta Cobertura', price: 300, description:'Cubre todas tu imperfecciones con la mejor base de alta cobertura' },
    { id: 4, name: 'Crema Facial', price: 400, description:'Hidrata tu piel con los mejores productos' },
    { id: 5, name: 'Crema Hidratante', price: 500, description:'Crema hidratante facial rica en vitamina c' },
    { id: 6, name: 'Gel de Aloevera', price: 600, description:'Aloderma gel Organico de Aloevera para cara y  cuerpo ' }
  ];

  
  const product = products.find(p => p.id === Number(id));

  return (
    <div>
      {product ? (
        <>
          <h1 className='detalle'>Detalles del Producto</h1>
          <p>Nombre: {product.name}</p>
          <p>Precio: ${product.price}</p>
          <p>Descripcion: {product.description}</p>
          <p>
          <a href="/products" className="btn-volver">Volver</a>

          </p>
        </>
      ) : (
        <h1>Producto no encontrado</h1>
      )}
    </div>
  );
};

export default ProductDetails;

