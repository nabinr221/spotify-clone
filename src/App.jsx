import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from './pages/auth/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
        </>
  )
}

export default App
