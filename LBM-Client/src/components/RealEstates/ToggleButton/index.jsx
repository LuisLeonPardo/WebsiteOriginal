import React from 'react';
import './index.scss';
import gridCuatroA from '../../../assets/gridCuatroA.svg';
import gridCuatroD from '../../../assets/gridCuatroD.svg';
import gridCincoA from '../../../assets/gridCincoA.svg';
import gridCincoD from '../../../assets/gridCincoD.svg';
//Este componente es un Toggle personalizado, modifica la cantidad de columnas que se renderizan en el componente <RealEstates/>
//este componente esta importado en el componente <RealEstates />
const Toggle = ({ setFiveColumn, fiveColumn }) => {
	//desde <RealEstates/> se le pasa por propiedad el estado local fiveColumn y su setState (setFiveColumn)
	return (
		<div className="toggle-switch" onClick={() => setFiveColumn(!fiveColumn)}>
			<div className={`containerGridIcon ${fiveColumn ? null : 'isActive'}`}>
				<img src={fiveColumn ? gridCuatroD : gridCuatroA} alt="asdas" />
			</div>
			<div className={`containerGridIcon ${fiveColumn ? 'isActive' : null}`}>
				<img src={fiveColumn ? gridCincoA : gridCincoD} alt="asdas" />
			</div>
		</div>
	);
};
export default Toggle;
