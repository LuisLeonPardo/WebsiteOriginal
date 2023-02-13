import { useEffect, useRef } from "react";
import { useState } from "react";
import data from "./data.json"
import "./SupplyMarket.scss";
import ModalDepositMobile from "../ModalDeposit/ModalDepositMobile"

function SupplyMarket({active}) {
    const [info , setInfo] = useState()

    useEffect(()=> {
        setInfo(data)
    },[])

    return (
        <div className="SupplyMarket">
            <div>
            {info && info.data.map((el,index) =>(
            
             <ModalDepositMobile
             key={index}
             name = {el.name}
             img = {el.img}
             amount = {el.amount}
             active = {active}
             />
            )
             )}
             </div>
        </div>
     
    )
  }
  
export default SupplyMarket;