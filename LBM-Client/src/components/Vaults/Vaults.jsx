import { useState } from "react";
import "./Vaults.scss";
import data from "./data.json";
import YourVaults from "./YourVaults";
import StakeLBM from "./Modals/StakeLBM";
import WithdrawalLBM from "./Modals/WithdrawalLBM";

function Vaults() {
  const [yourInfo, setYourInfo] = useState(data.data);
  const [stateModal, setStateModal] = useState(false);

  return (
    <div className="general">
      {/* <StakeLBM state={stateModal} setStateModal={setStateModal} /> */}
      <WithdrawalLBM state={stateModal} setStateModal={setStateModal} />
      <div className="vaults">
        {yourInfo.map((e) => (
          <YourVaults
            key={e.name}
            shortName={e.shortName}
            img={e.img}
            stakingAPR={e.stakingAPR}
            daily={e.daily}
            total={e.total}
            setStateModal={setStateModal}
          />
        ))}
      </div>
    </div>
  );
}

export default Vaults;
