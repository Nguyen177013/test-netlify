import "./assets/styles/App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./component/About";
import Home from "./component/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
