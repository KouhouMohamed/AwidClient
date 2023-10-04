import Header, { ResponsiveMenu } from "./components/Header"
import { useState } from "react"
import Home from "./components/Home";
import Category from "./components/Category";
import Banner from "./components/Banner";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const setMenu = (toOpen) => {
    setMenuOpen(toOpen);
  }
  return (
    <>
      <ResponsiveMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Category />
      <Banner />
    </>
  )
}

export default App
