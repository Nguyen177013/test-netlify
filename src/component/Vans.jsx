import "../assets/styles/Vans.css";
import { useState, useEffect } from "react";
import VanItems from "./VanItem";
const Vans = ({url}) => {
    const [vans, setVans] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error("Server can not fetch the url please try again!");
            }
            return res.json();
        })
        .then(data=>{
            setVans(data);
            setPending(false);
        })
    },[url])
    return (
        <div className="container">
            <div className="vans__container">
                <h1>Explore our van options</h1>
                <div className="vans__options">
                    <button className="option__btn btn">Simple</button>
                    <button className="option__btn btn">Luxury</button>
                    <button className="option__btn btn">Rugged</button>
                    <p className="option__clear">Clear filters</p>
                </div>
                <div className="list__vans">
                    {pending && <p>Please Wait for the server...</p>}
                    {vans && vans.map(van=>(<VanItems key = {van.id} {...van}></VanItems>))}
                </div>
            </div>
        </div>
    );
}

export default Vans;