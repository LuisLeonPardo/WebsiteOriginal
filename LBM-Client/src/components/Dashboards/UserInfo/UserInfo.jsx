import { useState } from "react";
import "./UserInfo.scss";
import Copy from "./assets/Copy.svg"
import Shield from "./assets/Shield.svg"
import Switch from "react-switch"
import ProgressBar from "./ProgressBar";

export default function UserInfo() {
    const [toggle , handleToggle] = useState(false);

    const [apy , setApy] = useState('3.2%')

    const [bar, setBar] = useState({completed: 35})

    const handleToggleChange = () => {
        handleToggle(!toggle)
        if(!toggle) {
            setApy('7.5%')
        }
        else setApy('3.2%')
    }


    return (
        <div className="container" style={{position: 'absolute', top: '119px', left: '172px'}}>
                <h1 className="title">My account</h1>
                <img src={Copy} className="copy" style={{position:'absolute', left: '376px',top: '43px'}}/>
                <div className="toggle" style={{left: '391px',top: '40px'}}>APY with LBM</div>
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
                <div className="toggle" style={{left: '27px',top: '80px'}}>Net APY</div>
                <img src={Copy} className="copy" style={{position:'absolute', left: '91px',top: '84px'}}/>
                <div className="apy">{apy}</div>
                <div className="grid">
                    <div>
                        <h3>Daily earnings</h3>
                        <h4>$0.00</h4>
                    </div>
                    <div>
                        <h3>Supply balance</h3>
                        <h4>$0.00</h4>
                    </div>
                    <div>
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
                        <ProgressBar bgcolor={"#4CAF50"} completed={bar.completed} />
                    </div>
                    
                </div>
                <img src={Copy} className="copy" style={{position:'absolute',left: '167px',top: '271px'}}/>
                <div className="safeLimit">
                    <img src={Shield} className="shield" />
                    <h3>Your safe limit:</h3>
                    <h4>{' $0.00'}</h4>
                    <img src={Copy} className="copy" />
                </div>
                
        </div>
    )
}