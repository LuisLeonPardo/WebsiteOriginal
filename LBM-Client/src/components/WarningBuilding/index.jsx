import React from 'react';
import './index.scss';
function WarningBuilding() {
	return (
		<div className="bg-warning">
			<div className="warning">
				<div className="bandas">
					<div className="banda inclinacion banda__negra"></div>
					<div className="banda inclinacion banda__amarilla"></div>
					<div className="banda inclinacion banda__negra"></div>
				</div>
				<h1 className="titulo">Website under construction</h1>
				<div className="bandas">
					<div className="banda inclinacion__invertida banda__negra"></div>
					<div className="banda inclinacion__invertida banda__amarilla"></div>
					<div className="banda inclinacion__invertida banda__negra"></div>
				</div>
			</div>
		</div>
	);
}

export default WarningBuilding;
