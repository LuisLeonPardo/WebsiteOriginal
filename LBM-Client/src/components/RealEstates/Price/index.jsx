import React, { useState } from 'react';
import './index.scss';
import arrow from '../../../assets/down.svg';
import { motion } from 'framer-motion';
const variants = {
	open: { opacity: 1 },
	closed: { opacity: 0, display: 'none' },
};
function Price() {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState('LUSD');
	const handleSelect = (e) => {
		console.log(e.target.name);
		setValue(e.target.name);
		setIsOpen(false);
	};
	return (
		<div className="priceContainer">
			<div className="maxAndMin">
				<input className="inputValue" type="text" placeholder="Min..." />
				<p>to</p>
				<input className="inputValue" type="text" placeholder="Max..." />
				{/* <select
					name="coin"
					id="coin"
					defaultValue="lusd"
					className="selectCoin"
				>
					<option value="lusd">LUSD</option>
					<option value="btc">BTC</option>
					<option value="eth">ETH</option>
				</select> */}
				<div className="selectButton">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`selectCoin ${isOpen ? 'isOpen' : null}`}
					>
						<p>{value}</p>
						<img src={arrow} alt="Arrow" />
					</button> 
					<motion.div animate={isOpen ? 'open' : 'closed'} variants={variants} transition={{ ease: "anticipate", duration: 0.15 }}>
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
			<button className="apply">Apply</button>
		</div>
	);
}

export default Price;
