import '../Styles/Products.css';

const Products = () => {
  const products = [
    { id: 1, name: 'Skincare', price: 100, image: 'https://www.farmaciatorrent.com/blog/wp-content/uploads/2019/08/que-es-un-cosm%C3%A9tico.jpg' },
    { id: 2, name: 'Kit Completo', price: 200, image: 'https://www.beautymarketamerica.com/fotos/11323_notbmae1grande.jpg' },
    { id: 3, name: 'Base Alta Cobertura', price: 300, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTacBQKMtYlhPkZOguk0_x0JppunFF8DbJz_kY42BWzQp45E-5dryyw9FW6n6OMAjla8ANbwC84bD6meS3OsXKHbdHxSP-PLDlumsA0tyKGDbM6yLUu0CR-w&usqp=CAE'},
    { id: 4, name: 'Crema Facial', price: 400, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRkoFiECUVXX_Joy44_xlXzSeYFSo4oDgLeRPfaXEIiY5Xw8WnzlH1hYvr2MmLzOzY6OJ3WdDhaioK37Dty2G_wH51VFx3r7VRVw80BQXofi5yN5X00zHsCb7fBIZ_wBR4XU2bMLOk&usqp=CAc'},
    { id: 5, name: 'Crema Hidratante', price: 500, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsCAHGzqT6AatNgjfqpVftpqPlTF7amoan6RSBXHdtjrJo1TZGQ45ukV_M9FItyeu_Yq3dlS9W55kJzoMhiYEMY6xDtnpwsrfuiL-ociSalyqBtrzr4p23jEJ4MB46s_N_T8OuExzJjg&usqp=CAc'},
    { id: 6, name: 'Gel de Aloevera', price: 600, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQmMWE3ZgRy4QXKCwnIun_Bci1pFk5nUPjMBVe1Z8Ib8gsTPKeo7Eb8thk8KJp-mqxoCKixi9FGacITbCfzQ_eac2KSMpcVAxmmh5CU5GQ&usqp=CAc'}
  
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
