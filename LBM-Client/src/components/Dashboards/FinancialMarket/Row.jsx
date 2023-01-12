import { useState } from "react";
import "./FinancialMarket.scss";

export default function Row({img,name,change, amount, value}) {

    const [render , setRender] = useState(value)
    const [active, setActive] =useState({
        supply: false,
        borrow: false
    });

    const handleClick = () => {
        setRender(!render)
    };

    const handleButton = (e) => {
        let changed = e.target.name
        e.preventDefault()
        setActive({
           
        })
    };

    return (
            <div className="row" >
                <div className="innerRow2" onClick={handleClick}>
                    <img src={img} />
                    <p>{name}</p>
                </div>
                {render && <div className="innerRow3" onClick={handleClick}>
                    <p>{change}</p>
                    <p>{amount}</p>
                </div>}
                {!render &&<div className="innerRow">                      
                    <button onClick={handleButton}>
                        Supply Market
                    </button>
                    <button onClick={handleButton}>
                        Borrow Market
                    </button>
                </div>}
            </div>
    )
};

