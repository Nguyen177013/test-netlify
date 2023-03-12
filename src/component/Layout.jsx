import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
const Layout = () => {
    return (
        <div className="site-wrapper">
        <Navbar/>
        <main>
            <Outlet />
        </main>
    </div>
    );
}
 
export default Layout