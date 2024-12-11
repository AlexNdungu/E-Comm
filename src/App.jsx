import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from "./Pages/Products.jsx";
import CreateAccount from "./Pages/CreateAccount.jsx";
import Login from './Pages/login.jsx';


function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
  

export default App