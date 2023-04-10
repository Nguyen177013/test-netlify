import "../../assets/styles/Vans.css";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import VanItems from "../Vans/VanItem";
const Vans = ({ url }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const [vans, setVans] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Server can not fetch the url please try again!");
                }
                return res.json();
            })
            .then(data => {
                setVans(data);
                setPending(false);
            })
    }, [url])
    const displayVan = (typeFilter && vans) ? vans.filter(van => van.type === typeFilter) : vans;
    console.log(typeFilter);
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
                    {pending && <p>Please Wait for the server...</p>}
                    {vans && displayVan.map(van => (
                        <Link to={van.id}
                            key={van.id}
                            className="van"
                            state={{ 
                                search: searchParams.toString(), 
                                type:typeFilter}}
                        >
                            <VanItems {...van}></VanItems>
                        </Link>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Vans;