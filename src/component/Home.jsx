import { Link } from "react-router-dom";
import "../assets/styles/Home.css";
const Home = ({ count }) => {
    return (
        <div className="Home">
            <h1 className="Home__title">You got the travel plans, we got the travel vans.</h1>
            <p className="Home__para">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <div className="Home__btn">
            <Link className="btn__van">Find your van</Link>
            </div>
        </div>
    );
}

export default Home;