import { useState } from "react";
import "./Vaults.scss";
import data from "./data.json";
import YourVaults from "./YourVaults";

function Vaults() {
  const [yourInfo, setYourInfo] = useState(data.data);

  return (
    <div className="vaults">
      {yourInfo.map((e) => (
        <YourVaults
          shortName={e.shortName}
          img={e.img}
          stakingAPR={e.stakingAPR}
          daily={e.daily}
          total={e.total}
        />
      ))}
    </div>
  );
}

export default Vaults;
