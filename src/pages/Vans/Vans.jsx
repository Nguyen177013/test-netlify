import "../../assets/styles/Vans.css";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import VanItems from "../Vans/VanItem";
import getVans from "../../api";
export function loader(){
    return getVans();
}
const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const data = useLoaderData();
    const typeFilter = searchParams.get("type");
    const [isError, setError] = useState("");
    const displayVans = typeFilter ? data.filter(van => van.type === typeFilter) : data;
    const vanElements = displayVans.map(
        van => (
            <Link to={van.id}
                key={van.id}
                className="van"
                state={{ 
                    search: searchParams.toString(), 
                    type:typeFilter}}
            >
                <VanItems {...van}></VanItems>
            </Link>
        )
    )
    return (
        <div className="container">
            <div className="vans__container">
                <h1>Explore our van options</h1>
                <div className="vans__options">
                    <button
                        className="option__btn btn"
                        onClick={() => setSearchParams({ type: "simple" })}
                    >Simple</button>
                    <button
                        className="option__btn btn"
                        onClick={() => setSearchParams({ type: "luxury" })}
                    >Luxury</button>
                    <button
                        className="option__btn btn"
                        onClick={() => setSearchParams({ type: "rugged" })}
                    >Rugged</button>
                    {typeFilter &&
                        (<p
                            className="option__clear"
                            onClick={() => setSearchParams()}
                        >Clear filters</p>)
                    }
                </div>
                <div className="list__vans">
                    {isError && <p>{isError}</p>}
                    {vanElements}
                </div>
            </div>
        </div>
    );
}

export default Vans;