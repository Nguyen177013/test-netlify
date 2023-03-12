import "../assets/styles/HostLayout.css";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
    return (
        <>
            <nav className="host-nav">
                <NavLink
                    end
                    style={({ isActive }) => isActive ?
                        {
                            fontWeight: "bold",
                            textDecoration: "underline",
                            color: "#161616"
                        }
                        : null}
                    // to="/host"
                    to="."  // can replace
                >Dashboard</NavLink>
                <NavLink
                    style={({ isActive }) => isActive ?
                        {
                            fontWeight: "bold",
                            textDecoration: "underline",
                            color: "#161616"
                        }
                        : null}
                    to="income"
                >Income</NavLink>
                <NavLink
                    style={({ isActive }) => isActive ?
                        {
                            fontWeight: "bold",
                            textDecoration: "underline",
                            color: "#161616"
                        }
                        : null}
                    to="vans"
                >Vans</NavLink>
                <NavLink
                    style={({ isActive }) => isActive ?
                        {
                            fontWeight: "bold",
                            textDecoration: "underline",
                            color: "#161616"
                        }
                        : null}
                    to="reviews"
                >Reviews</NavLink>
            </nav>
            <Outlet></Outlet>
        </>
    );
}

export default HostLayout;