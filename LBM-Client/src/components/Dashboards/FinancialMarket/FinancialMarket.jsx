import { useEffect } from "react";
import { useState } from "react";
import "./FinancialMarket.scss";
import data from "./data.json"
import Row from "./Row";

export default function FinancialMarket() {

    const [info , setInfo] = useState()

    useEffect(()=> {
        setInfo(data)
    },[])

    return (
        <div className="container2" style={{position: 'absolute', top: '432px', left: '172px'}}>
            <h1 className="header">Financial market</h1>
            <div className="table">
            {info && info.data.map((el,index) => 
                <Row
                value = {true}
                key={index}
                img = {el.img}
                name = {el.name}
                change = {el.change}
                amount = {el.amount}
                />
            )}
            </div>
            
        </div>
    )
}