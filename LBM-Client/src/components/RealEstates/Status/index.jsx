import React, { useState } from 'react';
import './index.scss';
//Este componente renderiza 3 botones para filtrar las lands por estado: Todos ("All"), Comprar ahora ("Buy now") o los que no estan a la venta ("Not for sale")
//<Status /> es importado en el componente <RealEstates />
function Status() {
	//El estado status, es un objeto, que indica que boton esta activo, con este estado hacemos manejo de clases de css
	//este componente no tiene ninguna logica aplicada de momento, es solo maquetado
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
