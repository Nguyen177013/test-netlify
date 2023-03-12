import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../assets/styles/VanDetail.css";

const VanDetail = (props) => {
    const params = useParams();
    const [van, setVan] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:8080/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data))
    },[params.id])
    return ( 
        <div className="van-detail-container">
        {van ? (
            <div className="van-detail">
                <img src={van.imageUrl} style={{
                    width:"25%"
                }}/>
                <i className={`van-type ${van.type} selected`} >{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
     );
}
 
export default VanDetail;