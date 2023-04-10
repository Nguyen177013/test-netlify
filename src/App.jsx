import "./assets/styles/App.css"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Vans from "./pages/Vans/Vans";
import HostVans from "./pages/Host/HostVans";
import VanDetail from "./pages/Vans/VansDetail";
import Layout from "./component/Layout";
import HostLayout from "./component/HostLayout";
import Hosts from "./pages/Host/Hosts";
import HostIncome from "./pages/Host/HostIncome";
import HostReviews from "./pages/Host/HostReviews";
import HostVansDetail from "./pages/Host/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVansInfo";
import HostVanPhotos from "./pages/Host/HostVandetailImage";
import HostVanPricing from "./pages/Host/HostVanDetailPrice";
function App() {
  const url = "http://localhost:8080/vans"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />


          <Route path='vans' element={<Vans url={url} />} />
          <Route path='vans/:id' element={<VanDetail />} />


          <Route path='host' element={<HostLayout />} >
            <Route index element={<Hosts />} />
            <Route path='income' element={<HostIncome />} />
            <Route path='reviews' element={<HostReviews />} />
            <Route path='vans' element={<HostVans url={url} />} />
            <Route path='vans/:id' element={<HostVansDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="price" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
