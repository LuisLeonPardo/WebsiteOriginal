import React, { useEffect, useState } from 'react';
import './index.scss';
import arrow from '../../../assets/down.svg';
import { motion } from 'framer-motion';
import { useFeeData } from 'wagmi';
const variants = {
	open: { opacity: 1 },
	closed: { opacity: 0, display: 'none' },
};
//Este componente sirve para filtrar las lands por precio en un rango dado y por cierta moneda elegida
//<Price/> es renderizado en el componente <RealEstate/>
function Price({ setLands, lands }) {
	//El estado isOpen es utilizado en un ternario para el manejo de la renderizacion del select personalizado
	const [isOpen, setIsOpen] = useState(false);
	//el estado value se utiliza en el select personalizado mencionado anteriormente, con el seteamos el valor que se selecciona
	const [value, setValue] = useState('LUSD');
	//Min es el valor minimo del filtrado, Max el maximo, apply es cuando se aplasta el boton para ejecutar el filtrado
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(Infinity);
	const [apply, setApply] = useState(false);

	const handleSelect = (e) => {
		setValue(e.target.name);
		setIsOpen(false);
	};

	//Hook que no hace el filtrado cuando se aprieta Apply
	useEffect(() => {
		const filteredLands = lands.filter(land => land.price >= min && land.price <= max);
		setLands(filteredLands);
		setApply(false);
	}, [apply]);

	return (
		<div className="priceContainer">
			<div className="maxAndMin">
				<input
					className="inputValue"
					type="number"
					placeholder="Min..."
					onChange={(e) => setMin(e.target.value)}
				/>
				<p>to</p>
				<input
					className="inputValue"
					type="number"
					placeholder="Max..."
					onChange={(e) => setMax(e.target.value)}
				/>
				{/* El siguiente div es el <select> personalizado donde se encuenta la moneda seleccionada para filtrar. Usamos el estado isOpen para abrirlo y cerrarlo */}
				<div className="selectButton">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`selectCoin ${isOpen ? 'isOpen' : null}`}
					>
						<p>{value}</p>
						<img src={arrow} alt="Arrow" />
					</button>
					{/* Usamos motion para aplicarle una animacion al renderizado de las "options" */}
					<motion.div
						animate={isOpen ? 'open' : 'closed'}
						variants={variants}
						transition={{ ease: 'anticipate', duration: 0.15 }}
					>
						{/* el siguiente div, y sus respectivos botones vendrian a hacer de los <options> dentro de un <select>, estas options son las monedas por las cuales se pued filtrar */}
						<div className={`options ${isOpen ? 'isOpen' : null}`}>
							<button name="LUSD" onClick={handleSelect}>
								LUSD
							</button>

							<button name="BTC" onClick={handleSelect}>
								BTC
							</button>
							<button name="ETH" onClick={handleSelect}>
								ETH
							</button>
							<button name="PYL" onClick={handleSelect}>
								PYL
							</button>
						</div>
					</motion.div>
				</div>
			</div>
			<button
				className="apply"
				onClick={() => setApply(true)}
			>
				Apply
			</button>
		</div>
	);
}

export default Price;
