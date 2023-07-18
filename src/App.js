import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
