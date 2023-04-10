import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HostVanItems from "./HostVansItems";
const HostVans = ({ url }) => {
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
                setPending(false);
                setVans(data);
            })
    }, [url])
    const hostVansEls = vans && vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <HostVanItems van={van}/>
        </Link>
    ))
    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            {pending && <p>Please Wait for the server...</p>}
            {vans && (
                <div className="host-vans-list">
                    {
                        vans.length > 0 ? (
                            <section>
                                {hostVansEls}
                            </section>

                        ) : (
                            <h2>There're no vans around in the database</h2>
                        )
                    }
                </div>
            )}
        </section>
    );
}

export default HostVans;