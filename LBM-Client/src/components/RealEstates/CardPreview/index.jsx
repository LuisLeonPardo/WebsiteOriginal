import React from 'react';
import './index.scss';
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
				<h5>Land #{number}</h5>
				<div>
					<table>
						<tbody>
							<tr>
								<th>Price</th>
								<th>Highest bid</th>
							</tr>
							<tr>
								{/* Posiblemente mas adelante esta 2 <td> sean variables dinamicas */}
								<td>200 LUSD</td>
								<td>No bids Yet</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default CardPreview;
