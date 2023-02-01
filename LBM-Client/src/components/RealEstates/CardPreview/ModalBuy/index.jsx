import React from 'react';
import './index.scss';
import { IoClose } from 'react-icons/io5';

function ModalBuy({ isOpen, close, number }) {
	return (
		<article
			className={`modalBuy ${isOpen ? null : 'isClosed'}`}
			onClick={() => close()}
		>
			<ul className="ulModal">
				<button onClick={() => close()} className="closeModal">
					<IoClose className="iconModalBuy" />
				</button>
				<li className="ulModal__li">Buy Land #{number} now</li>
				<hr className="ulModal__hr" />
				<li className="ulModal__li">Share</li>
				<hr className="ulModal__hr" />
				<li className="ulModal__li">Refresh Metadata</li>
			</ul>
		</article>
	);
}

export default ModalBuy;
