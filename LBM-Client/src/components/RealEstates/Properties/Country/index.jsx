import React, { useState } from 'react';
import arrow from '../../../../assets/down.svg';
import './index.scss';
import { motion } from 'framer-motion';
const variants = {
	open: { opacity: 1 },
	closed: { opacity: 0, display: 'none' },
};
//Este componente permite filtrar las lands por ciudad. Este renderiza un boton con el nombre de un pais, y cuando es cliqueado despliega una lista de checkboxs con ciudades que tengan lands en venta el numero de lands
//<Country /> importado en el componente <Properties />
//Este recibe por props:
//country: nombre del paies en cuestion
//states: un arreglo con los nombres de las ciudades y la cantidad de lands en venta
//value: numero de lands en venta en ese pais
function Country({ country, states, value }) {
	//El estado isOpen se utiliza renderizar el listado de ciudades con sus valor (checkboxs)
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="countryComponent">
			{/* En este boton aparece el nombre del pais, ademas este mismo setea el estado isOpen para abrir y cerrar la lista de ciudades */}
			<button onClick={() => setIsOpen(!isOpen)} className="countryButton">
				{country}
				<div className={`countryFirstDiv ${isOpen ? 'isOpen' : null}`}>
					<span>{value}</span> <img src={arrow} alt="Arrow" />
				</div>
			</button>
			<div className={isOpen ? 'mapContainer' : null}>
				{/* Se usa el motion para agregarle una animacion a la aparicion de la lista de ciudades */}
				<motion.div animate={isOpen ? 'open' : 'closed'} variants={variants}>
					{/* Hacemos un ternario donde se indica si debe hacerce el map o no, a cada elemento se le aplica una checkbox personalizada */}
					{isOpen
						? states.map((state, index) => (
								<div key={index} className="mapDiv">
									<div className="input-label">
										<input
											type="checkbox"
											name={state.state}
											value={state.state}
										/>{' '}
										<label htmlFor={state.state}>{state.state}</label>
									</div>
									<span>{state.value}</span>
								</div>
						  ))
						: null}
				</motion.div>
			</div>
		</div>
	);
}

export default Country;
