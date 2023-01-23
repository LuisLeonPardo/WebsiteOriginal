import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';
import { SlRefresh } from 'react-icons/sl';
import arrow from '../../assets/down.svg';
import Toggle from './ToggleButton';
import Status from './Status';
import Price from './Price';
import Properties from './Properties';
import CardPreview from './CardPreview';
import { motion } from 'framer-motion';
import RealEstateDetail from '../RealEstateDetail';
import db from '../RealEstates/fakedb/db.json'
const variants = {
	open: { opacity: 1 },
	closed: { opacity: 0, display: 'none' },
};

function RealEstates() {
	const location = useLocation();
	const navigate = useNavigate()
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
					
					{location.pathname === '/realestate' ? null : (
							<button className="filters" onClick={() => navigate('/realestate')}>
								<img src={arrow} alt="Back" className="goBack" />
							</button>
					)}
					
					<button className="isNotAButton">Filters</button>
					<button className="filters">
						<SlRefresh />
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
					{location.pathname === '/realestate' ? (
						<Toggle setFiveColumn={setFiveColumn} fiveColumn={fiveColumn} />
					) : null}

					{/* <button onClick={() => setFiveColumn(!fiveColumn)}>grid</button> */}
				</nav>
				{location.pathname === '/realestate' ? (
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
							<motion.div
								animate={price ? 'open' : 'closed'}
								variants={variants}
							>
								{price ? <Price /> : null}
							</motion.div>
							<button
								className={`buttonAsideFilter ${
									properties ? 'isActive' : null
								}`}
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
							{db.map((land) => (
								<Link to={`/realestate/${land.number}`} key={land.id}>
									<CardPreview
										
										image={land.image}
										number={land.number}
										fiveColumn={fiveColumn}
									/>
								</Link>
							))}
						</section>
					</div>
				) : (
					<RealEstateDetail />
				)}
			</div>
		</div>
	);
}

export default RealEstates;
