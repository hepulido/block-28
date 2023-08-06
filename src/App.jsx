
import './App.css'
import Red from "./Red"
import Blue from "./Blue"
import { Routes, Route, Link } from "react-router-dom";

function App() {
 

  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
  <Routes>
  <Route path="/blue" element={<Blue/>} />
     <Route path="/red" element={<Red/>} />
  </Routes>
</div>
    </div>
    </>
  )
}

export default App
