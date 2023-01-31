import React from 'react';
import './index.scss';
import { BsInfoCircle } from 'react-icons/bs';

function WarningBuilding({ isOpen, closeModal }) {
	return (
		<article
			className={`modalBuilding ${isOpen ? null : 'is-close'}`}
			onClick={() => closeModal()}
		>
			<div
				className={`modalContainerBuilding ${isOpen ? null : 'is-close'}`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className='info'>
					<BsInfoCircle className="icon" />
				</div>
				<h1 className="modalContainerBuilding__h1">
					Website under construction
				</h1>
				<p className="modalContainerBuilding__p">
					Thank you for visiting us, our website is currently under
					construction. We are still working on improving it, what you are
					seeing at the moment is just a preview, but you can still explore some
					of our available sections.
				</p>
				<button onClick={() => closeModal()} className="information button__modal">More information</button>
				<button onClick={() => closeModal()} className="understood button__modal">Understood</button>
			</div>
		</article>
	);
}

export default WarningBuilding;
