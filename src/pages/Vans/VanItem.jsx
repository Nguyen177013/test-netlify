const VanItems = (props) => {
    return (
        <div className="van border">
            <div className="van__img">
                <img src={props.imageUrl} alt="van-name" />
            </div>
            <div className="van__intel">
                <h4 className="van__name">{props.name}</h4>
                <div className="van__price">
                    <span className="price">${props.price}</span>
                    <span className="per__day">/day</span>
                </div>
            </div>
            <div className="van__type">
                <button className={"btn " +props.type}>{props.type}</button>
            </div>
        </div>
    );
}

export default VanItems;