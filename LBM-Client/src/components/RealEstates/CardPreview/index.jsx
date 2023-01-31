import React from 'react';
import './index.scss';
import { BsThreeDots } from 'react-icons/bs';
import ModalBuy from './ModalBuy';
import { Link } from 'react-router-dom';
import { useModal } from '../../../helpers/useModal/useModal';
function CardPreview({ image, number, fiveColumn }) {
	//En este componente de renderiza la imagen y el numero de la land pasadas por props
	//recibe por props image (imagen de la land), number (numero de la land) y fiveColumn que es un booleando. Para hacer un filtrado por precio deberia recibir tambien el precio por propiedades
	//Aclaracion: de momento todo esto es un maquetado, posiblemente mas adelante sea necesario hacer modificaciones para las variables dinamicas que podamos recibir
	//Utilizamos nuevamente el hook personalizado para abrir el modal <ModalBuy />
	const [isOpenModal, openModal, closeModal] = useModal();
	const handleClick = () => {
		isOpenModal ? closeModal() : openModal();
	};
	return (
		<div
			//Aqui utilizamos fiveColumn para el manejo de estilos a traves de un ternario
			className={`${
				fiveColumn ? 'cardPreviewFiveColumns' : 'cardPreviewFourColumns'
			}`}
		>
			<Link to={`/realestate/${number}`} className="linkImg">
				<img src={image} alt="imagen preview" className="imgCardPreview" />
			</Link>
			<div className="bottomCard">
				<Link to={`/realestate/${number}`} className="linkLand">
					<h5 className="land">Land #{number}</h5>
				</Link>

				<div className="price">
					<span className="priceLabel">Price: </span>
					{/* Aqui abajo tenemos un precio hardcodeado, esto deberia ser un valor dinamico, guardado en la base de datos falsa */}
					<span className="value">200 LUSD</span>
				</div>
				{/* El boton de aqui abajo abre y cierra el modal <ModalBuy /> que es importado de ./ModalBuy */}
				<button className="threeDots" onClick={handleClick}>
					<BsThreeDots  />
				</button>
				<ModalBuy isOpen={isOpenModal} close={closeModal} number={number}/>
			</div>
		</div>
	);
}

export default CardPreview;
