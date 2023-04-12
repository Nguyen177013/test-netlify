import { Link, useLocation, useLoaderData } from "react-router-dom";
import "../../assets/styles/VanDetail.css";
import getVans from "../../api";

export function loader({ params }) {
    console.log(params);
    return getVans(params);
}

const VanDetail = (props) => {
    const location = useLocation();
    const van = useLoaderData();
    // setVan(data);
    // useEffect(() => {
    //     fetch(`http://localhost:8080/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data))
    // }, [params.id])
    const backLocation = location?.state?.search == "" ? "" : location?.state?.search;
    const type = location.state.type || "all";
    return (
        <div className="van-detail-container">
            <Link
                to={`..?${backLocation}`}
                relative="path"
                className="back-button"
            ><span>Back to {type} vans</span></Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} style={{
                        width: "25%"
                    }} />
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