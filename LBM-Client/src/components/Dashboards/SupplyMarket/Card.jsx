import { useState } from "react";
import "./Card.scss";
import BTC from "./assets/BTC.svg"
import LTC from "./assets/LTC.svg"
import ETH from "./assets/ETH.svg"
import Switch from "react-switch"

export default function Card({img, name , amount}) {
    const [toggle , handleToggle] = useState(false);

    const handleToggleChange = () => {
        handleToggle(!toggle)
    }

    var urlImg

    if(img === 'BTC') {
        urlImg = BTC
    }
    else if(img ==='LTC') {
        urlImg = LTC
    }
    else if(img==='ETH') {
        urlImg = ETH
    }

    return (
        <div className="cardSupplyMarket">
            <div className="header">
                <img src={urlImg} alt='img'></img>
                <h1>{name}</h1>
            </div>
            <div className="line"/>
            <div className="body">
                <div>
                    <h4>Wallet</h4>
                    <h3>{amount}</h3>
                </div>
                <div className="colSwitch">
                    <h4>Colateral</h4>
                    <Switch
                    checked={toggle} 
                    onChange={handleToggleChange}
                    onColor="#F7931A"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    width={44}
                    height={22}
                    handleDiameter={18}
                    />
                </div>
            </div>
            

        </div>
     
    )
}