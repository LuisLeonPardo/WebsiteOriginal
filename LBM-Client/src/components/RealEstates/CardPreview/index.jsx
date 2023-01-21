import React from 'react';
import './index.scss';
function CardPreview({ image, number, fiveColumn }) {
	return (
		<div
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
