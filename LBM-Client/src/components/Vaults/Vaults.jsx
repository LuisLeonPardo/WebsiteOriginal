import { useState } from "react";
import "./Vaults.scss";
import data from "./data.json";
import YourVaults from "./YourVaults";
import StakeLBM from "./Modals/LBM/StakeLBM";
import WithdrawalLBM from "./Modals/LBM/WithdrawalLBM";
import StakeLBMForm from "./Modals/LBM/StakeLBMForm";
import StakeLBMSuccess from "./Modals/LBM/StakeLBMSuccess";
import WithdrawalLBMRequest from "./Modals/LBM/WithdrawalLBMRequest";
import WithdrawalLBMSuccess from "./Modals/LBM/WithdrawalLBMSuccess";
import WithdrawalLBMLocked from "./Modals/LBM/WithdrawalLBMLocked";
import StakeLUSD from "./Modals/LUSD/StakeLUSD";
import WithdrawalLUSD from "./Modals/LUSD/WithdrawalLUSD";
import StakeLUSDForm from "./Modals/LUSD/StakeLUSDForm";
import StakeLUSDSuccess from "./Modals/LUSD/StakeLUSDSuccess";
import WithdrawalLUSDRequest from "./Modals/LUSD/WithdrawalLUSDRequest";
import WithdrawalLUSDSuccess from "./Modals/LUSD/WithdrawalLUSDSuccess";
import WithdrawalLUSDLocked from "./Modals/LUSD/WithdrawalLUSDLocked";

function Vaults() {
  const [yourInfo, setYourInfo] = useState(data.data);
  const [stateModal, setStateModal] = useState(false);

  return (
    <div className="general">
      {/* <StakeLBM state={stateModal} setStateModal={setStateModal} /> */}
      {/* <StakeLBMForm state={stateModal} setStateModal={setStateModal} /> */}
      {/* <StakeLBMSuccess state={stateModal} setStateModal={setStateModal} /> */}
      {/* <WithdrawalLBM state={stateModal} setStateModal={setStateModal} /> */}
      {/* <WithdrawalLBMRequest state={stateModal} setStateModal={setStateModal} /> */}
      {/* <WithdrawalLBMSuccess state={stateModal} setStateModal={setStateModal} /> */}
      {/* <WithdrawalLBMLocked state={stateModal} setStateModal={setStateModal} /> */}
      {/* <StakeLUSD state={stateModal} setStateModal={setStateModal} /> */}
      {/* <StakeLUSDForm state={stateModal} setStateModal={setStateModal} /> */}
      {/* <StakeLUSDSuccess state={stateModal} setStateModal={setStateModal} /> */}
      {/* <WithdrawalLUSD state={stateModal} setStateModal={setStateModal} /> */}
      {/* <WithdrawalLUSDRequest state={stateModal} setStateModal={setStateModal} /> */}
      {/* <WithdrawalLUSDSuccess state={stateModal} setStateModal={setStateModal} /> */}
      <WithdrawalLUSDLocked state={stateModal} setStateModal={setStateModal} />
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
