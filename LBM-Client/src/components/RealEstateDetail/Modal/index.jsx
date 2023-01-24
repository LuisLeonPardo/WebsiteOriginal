import React from 'react';
import './index.scss';
import { AiOutlineQuestionCircle, AiOutlineClose } from 'react-icons/ai';
import arrow from '../../../assets/down.svg';
function Modal({ number, isOpen, closeModal }) {
	return (
		<article className={`modalRealEstate ${isOpen ? 'is-open' : null}`}>
			<div className="modalContainer">
				<h1 className="modalContainer__h1">Place a bid</h1>
				<p className="modalContainer__p">
					You are about to place a bid for <br />
					<button className="closeButton" onClick={() => closeModal()}>
						<AiOutlineClose className="icon" />
					</button>
					<span className="modalContainer__span">Land #{number}</span> from{' '}
					<span className="modalContainer__span">Libertum</span> collection
				</p>
				<label htmlFor="your-bid" className="modalContainer__label">
					Your bid
				</label>
				<div className="inputWrapper">
					<input type="text" className="input" name="your-bid" />
					<div className="inputIcon inputIcon--flex">
						<AiOutlineQuestionCircle className="question" />
						<span>ETH</span>
					</div>
				</div>
				<label htmlFor="expiration" className="modalContainer__label">
					Bid expiration
				</label>
				<div className="inputWrapper">
					<input type="text" className="input" name="expiration" />
					<img
						src={arrow}
						alt="Arrow"
						className="inputIcon inputIcon--smaller"
					/>
				</div>
				<p className="modalContainer__p">Expires on 17/01/2023, 17:32</p>
				<div className="modalContainer__div">
					{' '}
					<p className="modalContainer__p modalContainer--margin">
						Your balance
					</p>{' '}
					<p className="modalContainer__p modalContainer--margin">0 ETH</p>
				</div>
				<div className="modalContainer__div">
					<p className="modalContainer__p modalContainer--margin">
						Service fee
					</p>{' '}
					<p className="modalContainer__p modalContainer--margin">- ETH</p>
				</div>
				<hr className="modalContainer__hr" />
				<div className="modalContainer__div">
					<p className="modalContainer__p modalContainer--margin">Total</p>{' '}
					<span className="modalContainer__span modalContainer--margin">
						- ETH
					</span>
				</div>
				<button className="button" onClick={() => closeModal()}>
					Place a bid
				</button>
			</div>
		</article>
	);
}

export default Modal;
