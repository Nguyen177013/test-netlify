import { Link } from "react-router-dom";
import "../assets/styles/About.css";


const About = () => {
    return (
        <div>
            <div className="about-page-container">
                <img src="https://s3-alpha-sig.figma.com/img/370c/d3ba/87f1968974ee12ce5da85059cc83bb81?Expires=1679270400&Signature=iIts4w6pGo55j30-efotjOCwDFeGyw392eu-ovAurVEGCXKHkQ13uS24-AM28jRfwjilIXqR7EMmld7FHr~lvg-au555-akCmRnyuVWWRz4U0ZElOYLYUUWBlCwqwfVrRb3ywZpOLeFnDaNaVlHoA9U9jeEVt4hhbiWKYc6XPJeP7ypDpKL-2Bx2v29rBh9NnqPsTpaTHk951V3AOgEHWGMharw7E-EZF0nlLgEnHhlsIpQ3HkNAmKm1Lx6Wk1s82WyNs-T-MhEYdWZnp2W1KWik-SZyQMskR3WRDhal3QM5bZgKy0EEQRMdcUstExnZjQOd2yA-aVa67-H5j9k5UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="about-hero-image" />
                <div className="about-page">

                    <div className="about-page-content">
                        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    </div>
                    <div className="about-page-cta">
                        <h2>Your destination is waiting.<br />Your van is ready.</h2>
                        <Link className="link-button" to="/vans">Explore our vans</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;