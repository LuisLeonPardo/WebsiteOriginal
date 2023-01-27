import "./CardLP.scss";

export default function CardLP({name, state, type}) {
    return (
        <div className="cardGeneral">
            <h1>{name}</h1>
            <h1>{state}</h1>
            <h1>{type}</h1>
        </div>
    )
}