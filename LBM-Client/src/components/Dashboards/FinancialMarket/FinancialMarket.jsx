import { useEffect, useRef } from "react";
import { useState } from "react";
import "./FinancialMarket.scss";
import data from "./data.json"
import Row from "./Row";

export default function FinancialMarket() {

    const [info , setInfo] = useState()
    const [search, setSearch] = useState('')

    useEffect(()=> {
        setInfo(data)
    },[])

    const filter = (arr, key) => {
        if (key === '') {return setInfo(data)}
        const filter = []
        arr.forEach(el => {(el.name.includes(key))? filter.push(el) : null })
        return setInfo({data :filter})
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        filter(data.data,e.target.value)
    }

    return (
        <div className="container2" style={{position: 'absolute', top: '432px', left: '9%'}}>
            <div className="searchDiv">
                <h1 className="header">Financial market</h1>
                <input className="search" placeholder="Search" name="search" value={search} onChange={handleChange}/>
            </div>
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