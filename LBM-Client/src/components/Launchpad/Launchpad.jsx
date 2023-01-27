import "./Launchpad.scss";
import CardLP from "./CardLP";
import info from "./info.json"
import { useState } from "react";
import Frame from "./Frame.svg"

export default function Launchpad () {

    const [type, setType] = useState("ICO")

    const [state, setState] = useState('ended')

    const[drop, setDrop] =useState(
        {
            ICO: true,
            IREO: false
        }
    )

    const handleState = (e) => {
        setState(e.target.name)
    }

    const handleType = (e) => {
        setType(e.target.id)
        let drop = {
            ICO: false,
            IREO: false
        }
        setDrop({
            ...drop,
            [e.target.id]: true
        })
        
    }

    const handleDrop = (e) => {
        e.stopPropagation()
        setDrop({
            ICO: true,
            IREO: true
        })
    }

    const filter = info.data.filter(el => el.state ===state &&  el.type == type)

    const itemsRow = 3

  const grid = filter.map(
    (
      {
        state,
        type,
        name,
        per,
        launched_on,
        total_raise,
        token_price,
        description,
        status,
      },
      index
    ) => (
      <CardLP
        key={index}
        state={state}
        name={name}
        type={type}
        per={per}
        launched_on={launched_on}
        total_raise={total_raise}
        token_price={token_price}
        status={status}
        description={description}
      />
    )
  );


  const layout = [];

  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < itemsRow; j++) {
      row.push(grid[i]);
      i++;
    }
    i = i - 1;
    layout.push(
      <div key={i} className="rowLP">
        {row}
      </div>
    );
  }

    return (
        <div className="launchpad">
            <div className="mainPort">
                <div className="header">
                    <div className="title">
                        <h1>Launchpad</h1>
                    </div>
                    <div className="interact">
                        <button name="upcoming" onClick={handleState} className={(state==='upcoming')? 'buttonOn': 'buttonOff'}>
                            Upcoming
                        </button>
                        <button name='ended' onClick={handleState} className={(state==='ended')? 'buttonOn': 'buttonOff'}>
                            Ended
                        </button>
                        <button className="refresh"></button>
                        <input className="search" placeholder="Search by NFT's"></input>
                        <div className={(type==='ICO')? 'selectOn': 'selectOff'}>
                            {drop.ICO && <div id='ICO' onClick={handleType} className={(type==='ICO')? 'dropDownOn': 'dropDownOff'}>
                                <div style={{width:'24px'}}/>
                                ICO
                                <img src={Frame} onClick={handleDrop}></img>
                            </div>}
                            {drop.IREO && <div id='IREO' onClick={handleType} className={(type==='IREO')? 'dropDownOn': 'dropDownOff'}>
                                <div style={{width:'24px'}}/>
                                IREO
                                <img src={Frame} onClick={handleDrop}></img>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="body">
                    {layout}
                </div>
            </div>

        </div>
        <div className="body">{layout}</div>
      </div>
    </div>
  );
}
