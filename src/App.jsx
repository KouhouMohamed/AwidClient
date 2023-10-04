import Header, { ResponsiveMenu } from "./components/Header"
import { useState } from "react"
import Home from "./components/Home";

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
    </>
  )
}

export default App
