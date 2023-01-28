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

//prueba-------------
import { motion } from "framer-motion";
import { useModal } from "../../helpers/useModal/useModal";
//prueba-------------

function Vaults() {
  const [yourInfo, setYourInfo] = useState(data.data);
  const [stateModals, setStateModals] = useState({
    stakelbm: false,
    lbmform: false,
    lbmsuccess: false,
    withdrawallbm: false,
    withdrawallbmrequest: false,
    withdrawallbmlocked: false,
    withdrawallbmsuccess: false,
    stakelusd: false,
    lusdform: false,
    lusdsuccess: false,
    withdrawallusd: false,
    withdrawallusdrequest: false,
    withdrawallusdlocked: false,
    withdrawallusdsuccess: false,
  });

  return (
    <div className="general">
      <StakeLBM states={stateModals} setStateModals={setStateModals} />
      <StakeLBMForm states={stateModals} setStateModals={setStateModals} />
      <StakeLBMSuccess states={stateModals} setStateModals={setStateModals} />
      <WithdrawalLBM states={stateModals} setStateModals={setStateModals} />
      <WithdrawalLBMRequest
        states={stateModals}
        setStateModals={setStateModals}
      />
      <WithdrawalLBMSuccess
        states={stateModals}
        setStateModals={setStateModals}
      />
      <WithdrawalLBMLocked
        states={stateModals}
        setStateModals={setStateModals}
      />
      <StakeLUSD states={stateModals} setStateModals={setStateModals} />
      <StakeLUSDForm states={stateModals} setStateModals={setStateModals} />
      <StakeLUSDSuccess states={stateModals} setStateModals={setStateModals} />
      <WithdrawalLUSD states={stateModals} setStateModals={setStateModals} />
      <WithdrawalLUSDRequest
        states={stateModals}
        setStateModals={setStateModals}
      />
      <WithdrawalLUSDLocked
        states={stateModals}
        setStateModals={setStateModals}
      />
      <WithdrawalLUSDSuccess
        states={stateModals}
        setStateModals={setStateModals}
      />
      {/* <WithdrawalLUSD states={stateModals} setStateModals={setStateModals} /> */}
      <div className="vaults">
        <div className="vaults-title">
          <h1>Vaults</h1>
        </div>
        {yourInfo.map((e) => (
          <YourVaults
            key={e.name}
            shortName={e.shortName}
            img={e.img}
            stakingAPR={e.stakingAPR}
            daily={e.daily}
            total={e.total}
            states={stateModals}
            setStateModals={setStateModals}
          />
        ))}
      </div>
    </div>
  );
}

export default Vaults;
