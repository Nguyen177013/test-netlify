import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
const HostVansDetail = () => {
    const params = useParams();
    const [currentVan, setCurrentVan] = useState(null);
    const [isPending, setPending] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:8080/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentVan(data);
                setPending(false);
            })
    }, [params.id])
    return (
        <section>
            {isPending && <p>Please Wait for the server...</p>}
            {currentVan && (
                <>
                    <Link
                        to=".."
                        relative="path"
                        className="back-button"
                    ><span>Back to all vans</span></Link>
                    <div className="host-van-detail-layout-container">
                        <div className="host-van-detail">
                            <img src={currentVan.imageUrl} />
                            <div className="host-van-detail-info-text">
                                <i
                                    className={`van-type van-type-${currentVan.type}`}
                                >
                                    {currentVan.type}
                                </i>
                                <h3>{currentVan.name}</h3>
                                <h4>${currentVan.price}/day</h4>
                            </div>
                        </div>
                        <nav className="host-van-detail-nav">
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
                            >Detail</NavLink>
                            <NavLink
                                style={({ isActive }) => isActive ?
                                    {
                                        fontWeight: "bold",
                                        textDecoration: "underline",
                                        color: "#161616"
                                    }
                                    : null}
                                to="price"
                            >Price</NavLink>
                            <NavLink
                                style={({ isActive }) => isActive ?
                                    {
                                        fontWeight: "bold",
                                        textDecoration: "underline",
                                        color: "#161616"
                                    }
                                    : null}
                                to="photos"
                            >Photos</NavLink>
                        </nav>
                    <Outlet context={currentVan} />
                    </div>
                </>
            )}
        </section>
    );
}

export default HostVansDetail;