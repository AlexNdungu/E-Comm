import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from "./Pages/Products.jsx";
import CreateAccount from "./Pages/CreateAccount.jsx";
import Login from './Pages/login.jsx';
import CreateProduct from './Pages/CreateProduct.jsx';


function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/createProduct" element={<CreateProduct />} />
          </Routes>
        </div>
      </Router>
    );
  }
  

export default App