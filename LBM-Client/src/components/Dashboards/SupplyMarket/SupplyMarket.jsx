import { useEffect, useRef } from "react";
import { useState } from "react";
import data from "./data.json"
import Card from "./Card"
import "./SupplyMarket.scss";

function SupplyMarket() {
    const [info , setInfo] = useState()

    useEffect(()=> {
        setInfo(data)
    },[])

    return (
        <div className="SupplyMarket">
            <div>
            {info && info.data.map((el,index) =>(
            
             <Card
             key={index}
             name = {el.name}
             img = {el.img}
             amount = {el.amount}
             />
            )
             )}
             </div>
        </div>
     
    )
  }
  
export default SupplyMarket;