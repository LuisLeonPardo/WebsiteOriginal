import React, { useState } from 'react';
import arrow from '../../../../assets/down.svg';
import './index.scss';
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
			<div className={isOpen ? 'mapContainer': null}>
				{isOpen
					? states.map((state) => (
							<div className="mapDiv">
								<div className="input-label">
									<input type="checkbox" name={state.state} />{' '}
									<label htmlFor={state.state}>{state.state}</label>
								</div>
								<span>{state.value}</span>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
}

export default Country;
