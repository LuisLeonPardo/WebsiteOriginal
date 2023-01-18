import React from 'react';
import './index.scss';
function Price() {
	return (
		<div className="priceContainer">
			<div className="maxAndMin">
				<input className="inputValue" type="text" placeholder="Min..." />
				<p>to</p>
				<input className="inputValue" type="text" placeholder="Max..." />
				<select
					name="coin"
					id="coin"
					defaultValue="lusd"
					className="selectCoin"
				>
					<option value="lusd">LUSD</option>
					<option value="btc">BTC</option>
					<option value="eth">ETH</option>
				</select>
			</div>
			<button className='apply'>Apply</button>
		</div>
	);
}

export default Price;
