import { Link, useLoaderData } from "react-router-dom";
import HostVanItems from "./HostVansItems";
const HostVans = () => {
    const vans = useLoaderData();
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