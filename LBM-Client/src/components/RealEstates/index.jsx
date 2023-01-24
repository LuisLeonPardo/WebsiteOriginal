import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';
import { SlRefresh } from 'react-icons/sl';
import arrow from '../../assets/down.svg';
import Toggle from './ToggleButton';
import Status from './Status';
import Price from './Price';
import Properties from './Properties';
import CardPreview from './CardPreview';
import { motion } from 'framer-motion';
import RealEstateDetail from '../RealEstateDetail';
// db es una ase de datos falsa, para poder renderizar las lands con sus imagenes y numeros, esto deberia cambiar mas adelante, pero sirve para maquetar los componentes
import db from '../RealEstates/fakedb/db.json'
const variants = {
	open: { opacity: 1 },
	closed: { opacity: 0, display: 'none' },
};
//Aclarancion, a parti de ahora me voy a referir a los estaes que estan en venta como "Lands"
//El componente RealEstates se renderiza en la ruta /realestates y /realestates/:id pero aqui con algunas modificaciones como se vera mas adelante en el codigo.
//Aclaracion: Todos los componente que se importan en este archivo (a exepcion de <RealEstateDetail /> que se encuetra en la carpeta "RealEstateDetail"), se encuentran dentro de la carpeta 'RealEstates', las imagenes son importadas desde la carpeta assets fuera de la carpeta components
function RealEstates() {
	//Utiliza useLocacion para saber en el path que estoy parado y poder hacer un ternario para saber que renderizar
	const location = useLocation();
	//Utiliza useNavigate para el boton de vuelta atras que se renderiza en la ruta /realestaes/:id, en el navbar
	const navigate = useNavigate()
	//'ascendant' es un estado booleano para el manejo de un boton que aparece en el navbar que sirve para ordenar por precio (mayor a menos y viceversa) las lands
	const [ascendant, setAscendant] = useState(true);
	//'status', 'price', 'properties', son estados booleanos que utiliza para saber cuando renderizar los componentes del mismo nombre (<Status /> <Price /> <Properties />)
	const [status, setStatus] = useState(false);
	const [price, setPrice] = useState(false);
	const [properties, setProperties] = useState(false);
	//'fiveColumn' es otro estado booleando que se utiliza para: 
	//-Toggle, para manejar el estilo grid que renderiza las cards de las lands (tambien se pasar por props su setState)
	//-Al tag <section>, aqui se usa para el manejo de las clases de css por medio de un ternario 
	//-por ultimo se lo pasa por propiedad al componente <CardPreview /> para el manejo de estilos en su respectivo componente
	const [fiveColumn, setFiveColumn] = useState(false);
	return (
		<div className="realEstate">
			<div className="containerEstate">
				<h3>Real Estate</h3>
				<nav>
					{/* utilizo location en un ternario, en '/realestate' no deberia renderizarse el boton de volver atras */}
					{location.pathname === '/realestate' ? null : (
							<button className="filters" onClick={() => navigate('/realestate')}>
								<img src={arrow} alt="Back" className="goBack" />
							</button>
					)}
					<button className="isNotAButton">Filters</button>
					<button className="filters">
						<SlRefresh />
					</button>
					<div className="inputWrapper">
						<input
							type="search"
							className="input"
							placeholder="Search by NFTs"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inputIcon"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					{/* Este es el boton que ordena por precio como se dijo mas arriba en los estados */}
					<button
						id="order"
						className={ascendant ? null : 'highToLow'}
						onClick={() => setAscendant(!ascendant)}
					>
						Price: {ascendant ? 'low to high' : 'high to low'}
						<img src={arrow} alt="Arrow" />
					</button>
					{/* Nuevamente usa location en un ternario, debe renderizarse el toggle en la ruta /realestate, ya que en 'realestate/:id no se muestra el grid con las lands para ordenar*/}
					{location.pathname === '/realestate' ? (
						//aqui le pasamos el estado de fiveColumn como se dijo anteriormente (ir a la parte de estados, esta explicado)
						<Toggle setFiveColumn={setFiveColumn} fiveColumn={fiveColumn} />
					) : null}

				</nav> 
				{/* Aqui se usa location nuevamente, este es el cambio mas grande que depende del path, en '/realestate' se renderiza el div de clase "wrapperAsideSection", que como dice el nombre, en su interior tiene dos tags un <aside> y un <section> en el <aside> se encuentran los botones de Status, Price y Properties. En el <section> se encuentra la grilla donde se muetran las cards de las lands. */}
				{location.pathname === '/realestate' ? (
					<div className="wrapperAsideSection">
						<aside className="asideFilters">
							{/* Los botones Status, Price y Properties, solo setean los estados del mismo nombre para renderizar, o dejar de hacerlo, los componentes <Status/>, <Price /> y <Properties />. Como se ve, debajo de cada boton, hay un <motion> esto envuelve al componente que renderiza y le da una animacion cuando se renderiza */}
							<button
								className={`buttonAsideFilter ${status ? 'isActive' : null}`}
								onClick={() => setStatus(!status)}
							>
								Status <img src={arrow} alt="Arrow" />
							</button>
							<motion.nav
								animate={status ? 'open' : 'closed'}
								variants={variants}
							>
								{status ? <Status /> : null}
							</motion.nav>
							<button
								className={`buttonAsideFilter ${price ? 'isActive' : null}`}
								onClick={() => setPrice(!price)}
							>
								Price <img src={arrow} alt="Arrow" />
							</button>
							<motion.div
								animate={price ? 'open' : 'closed'}
								variants={variants}
							>
								{price ? <Price /> : null}
							</motion.div>
							<button
								className={`buttonAsideFilter ${
									properties ? 'isActive' : null
								}`}
								onClick={() => setProperties(!properties)}
							>
								Properties <img src={arrow} alt="Arrow" />
							</button>
							<motion.div
								animate={properties ? 'open' : 'closed'}
								variants={variants}
							>
								{properties ? <Properties /> : null}
							</motion.div>
						</aside>
						<section
						//Utiliza nuevamente el estado fiveColumn para el manejo de la grilla 
							className={`${
								fiveColumn
									? 'previewEstatesFiveColums'
									: 'previewEstatesFourColums'
							}`}
						>
							{/* Aqui se le aplica un map a la "base de datos falsa" renderizando, por cada elemento, un Link, que lleva al detalle de la land ('/realestate/:id'), y dentro de ella la card donde se muestra informacion de la land, pasandole por propiedades dicha informacion */}
							{db.map((land) => (
								<Link to={`/realestate/${land.number}`} key={land.id}>
									<CardPreview
										
										image={land.image}
										number={land.number}
										fiveColumn={fiveColumn}
									/>
								</Link>
							))}
						</section>
					</div>
				) : (
				//En la ruta '/realestate/:id' se renderiza el componente <RealEstateDetal/> que es donde se encuentra el detalle de la land.
					<RealEstateDetail />
				)}
			</div>
		</div>
	);
}

export default RealEstates;
