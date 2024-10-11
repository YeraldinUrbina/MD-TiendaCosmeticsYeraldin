import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className='bienvenido'>Bienvenido a la Mejor Tienda de Cosmeticos</h1>
        <p>¡Explora nuestros productos increíbles y disfruta de las mejores ofertas!</p>
      </div>
      <a href="/products" className="btn-ver">Ver Productos</a>
    </div>
  );
};

export default Home;


  