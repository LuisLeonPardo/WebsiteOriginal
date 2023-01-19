import { useState } from "react";
import "./UserInfo.scss";
import Copy from "./assets/Copy.svg"
import Shield from "./assets/Shield.svg"
import Switch from "react-switch"
import ProgressBar from "./ProgressBar";

export default function UserInfo() {
    const [toggle , handleToggle] = useState(false);

    const [apy , setApy] = useState('3.2%')

    const [bar, setBar] = useState({
        completed: 35,
        limit: 75
    })

    const handleToggleChange = () => {
        handleToggle(!toggle)
        if(!toggle) {
            setApy('7.5%')
        }
        else setApy('3.2%')
    }


    return (
        <div className="containerUi">
            <div className="headerUI">
                <h1 className="title">My account</h1>
                <div className="toggle">APY with LBM</div>
                <Switch 
                    checked={toggle} 
                    onChange={handleToggleChange}
                    className="switch" 
                    onColor="#F7931A"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    width={51}
                    height={31}
                    handleDiameter={27}
                />
            </div>    
                <div className="netApy">Net APY</div>
                <div className="apy">{apy}</div>
                <div className="grid">
                    <div className="gridRow">
                        <h3>Daily earnings</h3>
                        <h4>$0.00</h4>
                    </div>
                    <div className="gridRow">
                        <h3>Supply balance</h3>
                        <h4>$0.00</h4>
                    </div>
                    <div className="gridRow">
                        <h3>Borrow balance</h3>
                        <h4>$0.00</h4>
                    </div>
                </div>
                <div className="fillBar">
                    <div className="labelsFiller">
                        <div className="borrowLimit" style={{width: '135px', height: '16px'}}>
                           <h3>Borrow limit used: </h3> 
                           <h4>{' 0%'}</h4> 
                        </div>
                        <div className="borrowLimit" style={{width: '76px', height: '16px'}}>
                           <h3>Limit:  </h3> 
                           <h4>{' $0.00'}</h4> 
                        </div>      
                    </div>
                    <div className='fillerBar'>
                        <ProgressBar bgcolor={"#4CAF50"} completed={bar.completed} limit={bar.limit}/>
                    </div>
                    
                </div>
                <div className="safeLimit">
                    <img src={Shield} className="shield" />
                    <h3>Your safe limit:</h3>
                    <h4>{' $0.00'}</h4>
                </div>
                
        </div>
    )
}