import "./Launchpad.scss";
import CardLP from "./CardLP";
import info from "./info.json";

export default function Launchpad() {
  const itemsRow = 3;
  const grid = info.data.map(
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
            <button>Upcoming</button>
            <button>Ended</button>
            <button>Refresh</button>
            <input></input>
            <button>ICO</button>
          </div>
        </div>
        <div className="body">{layout}</div>
      </div>
    </div>
  );
}
