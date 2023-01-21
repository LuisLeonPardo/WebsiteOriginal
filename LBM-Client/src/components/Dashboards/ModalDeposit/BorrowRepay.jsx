import "./BorrowRepay.scss";
import AVAX from "./Assets/Logo 10.svg"
import Box from "./Assets/Box.svg"
import Vector from "./Assets/Vector.svg"
import ModalConfirm from "./ModalConfirm"
import { useState } from "react";

export default function BorrowRepay({handleClose, name, open, setOpen}) {

    const [active , setActive] = useState(name)

    const handleClick = (e) => {
        setActive(e.target.name)
    }

    const handleConfirm = () => {
        setConfirm(false)
        //handleClose()
    }
    const [confirm, setConfirm] = useState (true)



    return (
    <div className={confirm? "brContainer": 'modalHide'}>
       <div className="header">
            <img src={AVAX}/>
            <h1>Avalanche</h1>
            <div className="close" onClick={handleClose}>x</div>
       </div>
       <div className="text1">
            <p>The easiest way to support the Supply market</p>
       </div>
       <div className="button1">
            <button name='Supply' className={(active ==='Supply')? 'buttonOn': 'buttonOff'} onClick={handleClick}>
                Supply
            </button>
            <button name='Withdraw' className={(active ==='Withdraw')? 'buttonOn': 'buttonOff'} onClick={handleClick}>
                Withdraw
            </button>
       </div>
       <div className="text2">
            <p>
                To {(active==='Supply')? 'supply' : 'withdraw'} Avax to the Libertum Protocol, you need to enable it first
            </p>
       </div>
       <div className="body">
          <div className="rowBody">
            <div className="columnBody">
                <img src={Vector}/>
                <h4>Supply APY</h4>
            </div>
            <h3>124.89%</h3>
          </div>
          <div className="rowBody">
            <div className="columnBody">
                <img src={Box}/>
                <h4>Distribution APY</h4>
            </div>
            <h3>1.5%</h3>
          </div>
       </div>
       <div className="button2" onClick={handleConfirm}>
          <ModalConfirm name='Confirm'/>
       </div>
    </div>
    )
}