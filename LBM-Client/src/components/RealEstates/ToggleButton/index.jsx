import React from 'react';
import './index.scss';
import gridCuatroA from '../../../assets/gridCuatroA.svg'
import gridCuatroD from '../../../assets/gridCuatroD.svg'
import gridCincoA from '../../../assets/gridCincoA.svg'
import gridCincoD from '../../../assets/gridCincoD.svg'

const Toggle = ({ setFiveColumn, fiveColumn }) => {
	return (
		<div className="toggle-switch" onClick={() => setFiveColumn(!fiveColumn)}>
			<div className={`containerGridIcon ${fiveColumn ? null : "isActive"}`}>
				<img src={fiveColumn ? gridCuatroD : gridCuatroA} alt="asdas" />
			</div>
			<div className={`containerGridIcon ${fiveColumn ? "isActive" : null}`}>
				<img src={fiveColumn ? gridCincoA : gridCincoD} alt="asdas" />
			</div>
		</div>
	);
};
export default Toggle;
