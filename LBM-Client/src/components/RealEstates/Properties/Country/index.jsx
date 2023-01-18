import React, { useState } from 'react';
import arrow from '../../../../assets/down.svg';
import './index.scss';
import { motion } from 'framer-motion';
const variants = {
	open: { opacity: 1 },
	closed: { opacity: 0, display: 'none' },
};
function Country({ country, states, value }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="countryComponent">
			<button onClick={() => setIsOpen(!isOpen)} className="countryButton">
				{country}
				<div className={`countryFirstDiv ${isOpen ? 'isOpen' : null}`}>
					<span>{value}</span> <img src={arrow} alt="Arrow" />
				</div>
			</button>
			<div className={isOpen ? 'mapContainer' : null}>
				<motion.div animate={isOpen ? 'open' : 'closed'} variants={variants}>
					{isOpen
						? states.map((state, index) => (
								<div key={index} className="mapDiv">
									<div className="input-label">
										<input type="checkbox" name={state.state} />{' '}
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
