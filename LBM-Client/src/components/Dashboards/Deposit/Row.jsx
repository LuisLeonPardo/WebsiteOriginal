import { useState } from "react";
import "./Deposit.scss";
import BTC from "./assets/BTC.svg"
import LTC from "./assets/LTC.svg"
import ETH from "./assets/ETH.svg"
import ModalDeposit from "../ModalDeposit/ModalDeposit";

export default function Row({img,name, amount, id, render, setRender}) {

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

    const handleClick = () => {
        if(render===id){
            setRender(NaN)
        }
        else setRender(id)
    };

    return (
            <div className="row" >
                <div className="innerRow2" onClick={handleClick}>
                    <img src={urlImg} />
                    <p>{name}</p>
                </div>
                {(render!==id) && <div className="innerRow3" onClick={handleClick}>
                    <p>{amount}</p>
                </div>}
                {(render===id) &&<div className="innerRow">                      
                    <ModalDeposit name='Supply'/>
                    <ModalDeposit name='Withdraw'/>
                </div>}
            </div>
    )
};

