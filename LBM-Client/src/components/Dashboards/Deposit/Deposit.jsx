import { useEffect, useRef } from "react";
import { useState } from "react";
import "./Deposit.scss";
import data from "./data.json"
import Row from "./Row";

export default function Deposit() {

    const [info , setInfo] = useState()
    const [search, setSearch] = useState('')
    const [render, setRender] = useState(NaN)

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
        <div className="container2">
            <div className="searchDiv">
                <h1 className="header">Deposit</h1>
                <input className="search" placeholder="Search" name="search" value={search} onChange={handleChange}/>
            </div>
            <div className="asset">
                <p>Asset</p>
                <p>Wallet</p>
            </div>
            <div className="table">
            {info && info.data.map((el,index) => 
                <Row
                key={index}
                id = {index}
                img = {el.img}
                name = {el.name}
                change = {el.change}
                amount = {el.amount}
                render = {render}
                setRender = {setRender}
                />
            )}
            </div>
            
        </div>
    )
}