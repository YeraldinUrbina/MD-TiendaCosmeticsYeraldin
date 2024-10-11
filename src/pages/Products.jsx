import '../Styles/Products.css';

const Products = () => {
  const products = [
    { id: 1, name: 'Skincare', price: 100, image: 'https://www.farmaciatorrent.com/blog/wp-content/uploads/2019/08/que-es-un-cosm%C3%A9tico.jpg' },
    { id: 2, name: 'Kit Completo', price: 200, image: 'https://www.beautymarketamerica.com/fotos/11323_notbmae1grande.jpg' },
    { id: 3, name: 'Base Alta Cobertura', price: 300, image: 'https://img.freepik.com/foto-gratis/publicidad-fundacion-botella-brillante_23-2149511223.jpg?ga=GA1.1.644615044.1728655335&semt=ais_hybrid-rr-similar'},
    { id: 4, name: 'Crema Facial', price: 400, image: 'https://img.freepik.com/fotos-premium/pot-crema-blanca-marmol-vivido-fotografia-editorial-iluminacion-realista_1310542-1889.jpg?ga=GA1.1.644615044.1728655335&semt=ais_hybrid-rr-similar'},
    { id: 5, name: 'Crema Hidratante', price: 500, image: 'https://img.freepik.com/fotos-premium/muestras-blancas-cremas-cosmeticas_1234738-333261.jpg?w=826'},
    { id: 6, name: 'Gel de Aloevera', price: 600, image: 'https://img.freepik.com/fotos-premium/aloe-vera-cosmetico-redes-sociales_1314785-906.jpg?ga=GA1.1.644615044.1728655335&semt=ais_hybrid-rr-similar'}
  
  ];

  return (
    <div className="products-container">
      <h1 className='titulo'>Nuestros Productos</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <a href={`/products/details?id=${product.id}`} className="btn-details">Ver Detalles</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
