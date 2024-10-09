import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './components/ProductDetails';
import './Styles/Global.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta Home */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta para la lista de productos */}
        <Route path="/products" element={<Products />} />
        
        {/* Ruta dinámica que muestra detalles del producto */}
        <Route path="/products/details" element={<ProductDetails />} />
        
        {/* Ruta para manejar el 404 */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
