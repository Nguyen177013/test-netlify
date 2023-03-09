import "./assets/styles/App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./component/About";
import Home from "./component/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./component/Navbar";
import Vans from "./component/Vans";
import Footer from "./component/Footer";
function App() {
  const url = "http://localhost:8080/vans"
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans url = {url}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
