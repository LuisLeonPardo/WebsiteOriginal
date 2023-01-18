import React, { useState } from 'react';
import './index.scss';
import relaod from '../../assets/reload.svg';
import arrow from '../../assets/down.svg';
import Toggle from './ToggleButton';
import Status from './Status';
import Price from './Price';
import Properties from './Properties';
import CardPreview from './CardPreview';
import firstEstate from '../../assets/firstEstate.svg';
import secondEstate from '../../assets/secondEstate.svg';
import thirdEstate from '../../assets/thirdEstate.svg';
import forthEstate from '../../assets/forthEstate.svg';
import fifthEstate from '../../assets/fifthEstate.svg';
import noFoto from '../../assets/noFoto.svg';
import { motion } from 'framer-motion';

const variants = {
	open: { opacity: 1 },
	closed: { opacity: 0, display: 'none' },
};
const lands = [
	{ image: firstEstate, land: '#4567' },
	{ image: secondEstate, land: '#4269' },
	{ image: thirdEstate, land: '#4106' },
	{ image: forthEstate, land: '#3012' },
	{ image: fifthEstate, land: '#7952' },
	{ image: noFoto, land: '#2235' },
	{ image: noFoto, land: '#3615' },
	{ image: noFoto, land: '#6798' },
	{ image: noFoto, land: '#8378' },
	{ image: noFoto, land: '#3615' },
	{ image: noFoto, land: '#6798' },
	{ image: noFoto, land: '#8378' },
];
function RealEstates() {
	const [ascendant, setAscendant] = useState(true);
	const [status, setStatus] = useState(false);
	const [price, setPrice] = useState(false);
	const [properties, setProperties] = useState(false);
	const [fiveColumn, setFiveColumn] = useState(false);
	const handleOrder = () => {
		setAscendant(!ascendant);
	};

	return (
		<div className="realEstate">
			<div className="containerEstate">
				<h3>Real Estate</h3>
				<nav>
					<button className="isNotAButton">Filters</button>
					<button className="filters">
						<img src={relaod} alt="Reload" />
					</button>
					<div className="inputWrapper">
						<input
							type="search"
							className="input"
							placeholder="Search by NFTs"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inputIcon"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<button
						id="order"
						className={ascendant ? null : 'highToLow'}
						onClick={handleOrder}
					>
						Price: {ascendant ? 'low to high' : 'high to low'}
						<img src={arrow} alt="Arrow" />
					</button>
					<Toggle setFiveColumn={setFiveColumn} fiveColumn={fiveColumn} />

					{/* <button onClick={() => setFiveColumn(!fiveColumn)}>grid</button> */}
				</nav>
				<div className="wrapperAsideSection">
					<aside className="asideFilters">
						<button
							className={`buttonAsideFilter ${status ? 'isActive' : null}`}
							onClick={() => setStatus(!status)}
						>
							Status <img src={arrow} alt="Arrow" />
						</button>
						<motion.nav
							animate={status ? 'open' : 'closed'}
							variants={variants}
						>
							{status ? <Status /> : null}
						</motion.nav>
						<button
							className={`buttonAsideFilter ${price ? 'isActive' : null}`}
							onClick={() => setPrice(!price)}
						>
							Price <img src={arrow} alt="Arrow" />
						</button>
						<motion.div animate={price ? 'open' : 'closed'} variants={variants}>
							{price ? <Price /> : null}
						</motion.div>
						<button
							className={`buttonAsideFilter ${properties ? 'isActive' : null}`}
							onClick={() => setProperties(!properties)}
						>
							Properties <img src={arrow} alt="Arrow" />
						</button>
						<motion.div
							animate={properties ? 'open' : 'closed'}
							variants={variants}
						>
							{properties ? <Properties /> : null}
						</motion.div>
					</aside>
					<section
						className={`${
							fiveColumn
								? 'previewEstatesFiveColums'
								: 'previewEstatesFourColums'
						}`}
					>
						{lands.map((land) => (
							<CardPreview
								image={land.image}
								land={land.land}
								fiveColumn={fiveColumn}
							/>
						))}
					</section>
				</div>
			</div>
		</div>
	);
}

export default RealEstates;
