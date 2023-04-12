import "./assets/styles/App.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
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
import Error from "./pages/Error";
import Login from "./pages/Login";
import { loader as detailLoader } from "./pages/Vans/VansDetail";
import { loader } from "./pages/Vans/Vans";
import { loader as loginLoader } from "./pages/Login";
import { requireAuth } from "./util";
import { action } from "./pages/Login";

function App() {
  const url = "http://localhost:8080/vans";
  const routers = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>} errorElement={<Error/>}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='vans' element={<Vans url={url} />} loader={loader}/>
      <Route path='vans/:id' element={<VanDetail />} loader={detailLoader}/>
      <Route path='host' element={<HostLayout />} loader={()=>requireAuth()}>
        <Route index element={<Hosts />} />
        <Route path='income' element={<HostIncome />} />
        <Route path='reviews' element={<HostReviews />} />
        <Route path='vans' element={<HostVans/>} loader={loader}/>
        <Route path='vans/:id' element={<HostVansDetail />} loader={detailLoader}>
          <Route index element={<HostVanInfo />} />
          <Route path="price" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="login" element={<Login/>} loader={loginLoader} action={action}/>
      <Route path="*" element={<NotFound/>} />
    </Route>
  ))
  return (
      <RouterProvider router={routers}/>
  )
}

export default App
