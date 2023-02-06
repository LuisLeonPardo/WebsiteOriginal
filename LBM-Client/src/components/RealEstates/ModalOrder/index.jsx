import React, { useEffect, useState } from 'react';
import './index.scss';
import {IoClose} from 'react-icons/io5'
//<ModalOrder /> es importado en RealEstate, este model renderiza las opciones por las cuales se puede ordenar los estates
//Recibe por propiedades un booleano que le dice si esta abierto no, una funcion para cerrarlo y ademas una funcion para settear un estado de orden que es pasado al componente padre (<RealEstates/>)
function ModalOrder({ isOpen, closeModal, setOrder }) {
	//El estado "active" se usa para saber que valor de filtrado esta seleccionado y asi poder darle un estilo particular
	const [active, setActive] = useState('low');
	//handleChange settea que valor esta seleccionado, luego settea el orden que es pasado al padre y por ultimo cierra el modal
	const handleChange = (e) => {
		setActive(e.target.id);
        setOrder(e.target.value)
		closeModal()
	};

	return (
		<div
			className={`modalOrder ${isOpen ? null : 'isClosed'}`}
			onClick={() => closeModal()}
		>
			<ul
				className={`ulOrder ${isOpen ? null : 'isClosed'}`}
				onClick={(e) => e.stopPropagation()}
			>
				<button onClick={() => closeModal()} className="closeModal">
					<IoClose className="iconModalBuy" />
				</button>
				<li className="ulOrder__li">
					{' '}
					<label
						htmlFor="low"
						className={`label ${active === 'low' ? 'isActive' : null}`}
					>
						Price: low to high
					</label>{' '}
					<input
						type="checkbox"
						onChange={handleChange}
						id="low"
						checked={active === 'low' ? true : false}
                        value='Price: low to high'
					/>
				</li>
				<li className="ulOrder__li">
					<label
						htmlFor="high"
						className={`label ${active === 'high' ? 'isActive' : null}`}
					>
						Price: high to low{' '}
					</label>{' '}
					<input
						type="checkbox"
						onChange={handleChange}
						id="high"
						checked={active === 'high' ? true : false}
                        value='Price: high to low'
					/>
				</li>
				<li className="ulOrder__li">
					<label
						htmlFor="recently"
						className={`label ${active === 'recently' ? 'isActive' : null}`}
					>
						Recently listed{' '}
					</label>{' '}
					<input
						type="checkbox"
						onChange={handleChange}
						id="recently"
						checked={active === 'recently' ? true : false}
                        value='Recently listed'
					/>
				</li>
			</ul>
		</div>
	);
}

export default ModalOrder;
