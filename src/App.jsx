import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from "./Pages/Products.jsx";
import Login from "./Pages/login.jsx";


function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
  

export default App