import Header, { ResponsiveMenu } from "./components/Header"
import { useState } from "react"
import Home from './components/Home'
import Category from "./components/Category";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Products from "./components/products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <ResponsiveMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} showLogin={showLogin} setMenuOpen={setMenuOpen} setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
        <Route path="/categories" Component={Category} />
      </Routes>

      <Footer />
    </Router>

  )
}

export default App
