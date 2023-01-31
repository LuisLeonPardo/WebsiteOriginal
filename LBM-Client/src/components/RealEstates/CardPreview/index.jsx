import React from 'react';
import './index.scss';
import {BsThreeDots} from 'react-icons/bs'
function CardPreview({ image, number, fiveColumn }) {
	//En este componente de renderiza la imagen y el numero de la land pasadas por props
	//recibe por props image (imagen de la land), number (numero de la land) y fiveColumn que es un booleando
	//Aclaracion: de momento todo esto es un maquetado, posiblemente mas adelante sea necesario hacer modificaciones para las variables dinamicas que podamos recibir
	return (
		<div
			//Aqui utilizamos fiveColumn para el manejo de estilos a traves de un ternario
			className={`${
				fiveColumn ? 'cardPreviewFiveColumns' : 'cardPreviewFourColumns'
			}`}
		>
			<img src={image} alt="imagen preview" className="imgCardPreview" />
			<div className="bottomCard">
				<h5 className='land'>Land #{number}</h5>
				<div className='price'>
					<span className='priceLabel'>Price: </span>
					<span className='value'>200 LUSD</span>
				</div>
				<BsThreeDots className='threeDots'/>
			</div>
		</div>
	);
}

export default CardPreview;
