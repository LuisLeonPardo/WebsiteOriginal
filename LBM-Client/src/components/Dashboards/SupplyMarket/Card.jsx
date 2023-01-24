import { useState } from "react";
import "./Card.scss";
import BTC from "./assets/BTC.svg"
import LTC from "./assets/LTC.svg"
import ETH from "./assets/ETH.svg"
import Switch from "react-switch"
import ModalDeposit from "../ModalDeposit/ModalDeposit"

export default function Card({img, coin , amount}) {
    const [toggle , handleToggle] = useState(false);

    const handleToggleChange = (e) => {
        e.stopPropagation();
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
                <h1>{coin}</h1>
            </div>
            <div className="line"/>
            <div className="body">
                <div>
                    <h4>Wallet</h4>
                    <h3>{amount}</h3>
                </div>
                <div className="colSwitch">
                    <h4>Colateral</h4>
                    <div onClick={(e) => handleToggleChange(e)}>
                        <Switch
                        checked={toggle} 
                        onChange={() => {}}
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
            

        </div>
     
    )
}