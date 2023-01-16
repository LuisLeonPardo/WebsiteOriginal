import React, { useState } from 'react';
import './index.scss';
function Status() {
	const [status, setStatus] = useState({
		all: true,
		buy: false,
		notSale: false,
	});
	return (
		<div className="statusComponent">
			<button
				className={`buttonStatus ${status.all ? 'isActive' : null}`}
				onClick={() => setStatus({ all: true, buy: false, notSale: false })}
			>
				All
			</button>
			<button
				className={`buttonStatus ${status.buy ? 'isActive' : null}`}
				onClick={() => setStatus({ all: false, buy: true, notSale: false })}
			>
				Buy now
			</button>
			<button
				className={`buttonStatus ${status.notSale ? 'isActive' : null}`}
				onClick={() => setStatus({ all: false, buy: false, notSale: true })}
			>
				Not for sale
			</button>
		</div>
	);
}

export default Status;
