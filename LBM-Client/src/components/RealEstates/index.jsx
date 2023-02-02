import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './index.scss';
import { SlRefresh } from 'react-icons/sl';
import Toggle from './ToggleButton';
import Status from './Status';
import Price from './Price';
import Properties from './Properties';
import CardPreview from './CardPreview';
import RealEstateDetail from '../RealEstateDetail';
import { MdOutlineFilterList } from 'react-icons/md';
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack } from 'react-icons/io';
import { GoSettings } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { TbSearchOff } from 'react-icons/tb';

// db es una ase de datos falsa, para poder renderizar las lands con sus imagenes y numeros, esto deberia cambiar mas adelante, pero sirve para maquetar los componentes
import db from '../RealEstates/fakedb/db.json';
import { sort } from '../../helpers/useModal/utils';
const variants = {
	open: { opacity: 1 },
	closed: { opacity: 0, display: 'none' },
};
import { useModal } from '../../helpers/useModal/useModal';
import ModalOrder from './ModalOrder';
//Aclarancion, a parti de ahora me voy a referir a los estaes que estan en venta como "Lands"
//El componente RealEstates se renderiza en la ruta /realestates y /realestates/:id pero aqui con algunas modificaciones como se vera mas adelante en el codigo.
function RealEstates() {
	const location = useLocation();
	const navigate = useNavigate();
	const [order, setOrder] = useState('Price: low to high');
	//'status', 'price', 'properties', son estados booleanos que utiliza para saber cuando renderizar los componentes del mismo nombre (<Status /> <Price /> <Properties />)
	const [status, setStatus] = useState(false);
	const [price, setPrice] = useState(false);
	const [properties, setProperties] = useState(false);
	//'fiveColumn' es otro estado booleando que se utiliza para:
	//-Toggle, para manejar el estilo grid que renderiza las cards de las lands (tambien se pasar por props su setState)
	//-Al tag <section>, aqui se usa para el manejo de las clases de css por medio de un ternario
	//-por ultimo se lo pasa por propiedad al componente <CardPreview /> para el manejo de estilos en su respectivo componente
	const [fiveColumn, setFiveColumn] = useState(false);
	//filters es un estado booleano que sirve para abrir y cerrar los filtros en responsive
	const [filters, setFilters] = useState(false);
	const [lands, setLands] = useState(db);

	//Hook que apenas se monta el componente ordena las cards
	useEffect(() => {
		setOrder('Price: low to high');
		setLands(sort(lands, order));
	}, [])

	//Hook que actualiza el orden de las cards cada vez que hay cambios en las tierras o en el orden
	useEffect(() => {
		setLands(sort(lands, order))
	}, [lands, order])

	//show, lastScrollY y controlNavbar son estados y una funcion para el manejo del navbar con esto, el navbar se muestra cuando se scrollea hacia arriba y desaparece hacia abajo, todo esto solo en responsive
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > lastScrollY) {
				// if scroll down hide the navbar
				setShow(false);
			} else {
				// if scroll up show the navbar
				setShow(true);
			}

			// remember current page location to use in the next move
			setLastScrollY(window.scrollY);
		}
	};
	//este es un hook personalizado, se utiliza en varias partes del codigo, sirve para abrir y cerrar un modal, hay que invocarlo una vez por cada modal que se quiera abrir, esto ahora codigo
	const [isOpen, openModal, closeModal] = useModal();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
	}, [lastScrollY]);
	return (
		<div className="realEstate">
			<div className="containerEstate">
				<nav
					className={`navBar ${
						location.pathname === '/realestate' ? null : 'detailEstate'
					} ${show ? null : 'notShowNavBar'}`}
				>
					<h3>Real Estate</h3>
					{/* utilizo location en un ternario, en '/realestate' no deberia renderizarse el boton de volver atras */}
					{location.pathname === '/realestate' ? null : (
						<button
							id="goBack"
							className="button__realEstate"
							onClick={() => navigate('/realestate')}
						>
							<IoIosArrowBack className="icon" />
						</button>
					)}
					{/* Aquie abajo se utiliza el boton para abrir y cerrar los filtros (en responsive) */}
					<button
						id="filters"
						className="button__realEstate"
						onClick={() => setFilters(!filters)}
					>
						Filters
						<GoSettings className="display icon" />
					</button>
					<button
						id="refresh"
						className="button__realEstate"
						onClick={() => setLands(db)}
					>
						<SlRefresh className="icon" />
					</button>
					{/* Este div con classname  "inputWrapper" es un buscador*/}
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
						className="button__realEstate"
						onClick={() => (isOpen ? closeModal() : openModal())}
					>
						{order}
						{!isOpen ? (
							<IoIosArrowDown className="icon" />
						) : (
							<IoIosArrowUp className="icon" />
						)}
					</button>
					{/* Este es un modal en responsive, y un select en desktop, sirve para seleccionar el filtro por orden, es importado de ./RealEstates/ModalOrder  */}
					<ModalOrder
						isOpen={isOpen}
						closeModal={closeModal}
						setOrder={setOrder}
					/>
					<button
						id="menu"
						className="button__realEstate display"
						onClick={() => openModal()}
					>
						<MdOutlineFilterList className="icon" />
					</button>
					{/* Nuevamente usa location en un ternario, debe renderizarse el toggle en la ruta /realestate, ya que en 'realestate/:id no se muestra el grid con las lands para ordenar*/}
					{location.pathname === '/realestate' ? (
						//aqui le pasamos el estado de fiveColumn como se dijo anteriormente (ir a la parte de estados, esta explicado), es importado de ./RealEstate/ToggleButton
						<Toggle setFiveColumn={setFiveColumn} fiveColumn={fiveColumn} />
					) : null}
				</nav>
				{/* Aqui se usa location nuevamente, este es el cambio mas grande que depende del path, en '/realestate' se renderiza el div de clase "wrapperAsideSection", que como dice el nombre, en su interior tiene dos tags un <aside> y un <section> en el <aside> se encuentran los botones de Status, Price y Properties. En el <section> se encuentra la grilla donde se muetran las cards de las lands. */}
				{
					location.pathname === '/realestate' ? (
						<div className="wrapperAsideSection">
							<aside className={`asideFilters ${filters ? null : 'is-closed'}`}>
								{/* Este boton solo aparece en responsive, en la parte de filtros, sirve para cerrar los filtros */}
								<div className="filter display">
									<h1>Filters</h1>
									<button
										className="button__realEstate"
										onClick={() => setFilters(!filters)}
									>
										<IoClose className="icon" />
									</button>
								</div>
								{/* Los botones Status, Price y Properties, solo setean los estados del mismo nombre para renderizar, o dejar de hacerlo, los componentes <Status/>, <Price /> y <Properties />. Como se ve, debajo de cada boton, hay un <motion> esto envuelve al componente que renderiza y le da una animacion cuando se renderiza */}
								{/* Boton Status */}
								<button
									className={`buttonAsideFilter`}
									onClick={() => setStatus(!status)}
								>
									Status {status ? <IoIosArrowUp /> : <IoIosArrowDown />}
								</button>
								<div className={`animation ${status ? null : 'is-close'}`}>
									{/* El componente <Status /> is importado de ./RealEstate/Status */}
									{status ? <Status boolean={status} /> : null}
								</div>
								{/* Boton Price */}
								<button
									className={`buttonAsideFilter`}
									onClick={() => setPrice(!price)}
								>
									Price {price ? <IoIosArrowUp /> : <IoIosArrowDown />}
								</button>
								<div className={`animation ${price ? null : 'is-close'}`}>
									{/* El componente <Price /> is importado de ./RealEstate/Price */}
									{price ? <Price
										setLands={setLands}
										lands={db}
									/> : null }
								</div>
								{/* Boton properties */}
								<button
									className={`buttonAsideFilter`}
									onClick={() => setProperties(!properties)}
								>
									Properties{' '}
									{properties ? <IoIosArrowUp /> : <IoIosArrowDown />}
								</button>
								<div className={`animation ${properties ? null : 'is-close'}`}>
									{/* El componente <Properties /> is importado de ./RealEstate/Properties */}
									{properties ? <Properties /> : null}
								</div>
								{/* Estos botones solo aparecen en responsive, sirven para aplicar el filtro, recomiendo que se renderice tambien en desktop para asi aplicar los filtro dandole al boton y no de manera dinamica mientras se escribe, para renderizarlo tambien en desktop, simplemente hay que borrar la clase "display" del classname */}
								<div className="btn-filter display">
									<button className="button__realEstate btn-reset">
										Reset all
									</button>
									<button className="button__realEstate btn-applay">
										Apply
									</button>
								</div>
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
								{
									lands.length?
										lands.map((land) => (
										<Link to={`/realestate/${land.number}`} key={land.id}>
											<CardPreview
												image={land.image}
												key={land.number}
												number={land.number}
												fiveColumn={fiveColumn}
												price={land.price}
											/>
										</Link>
								)) :
								<div id='advisor'>
									<TbSearchOff id='searchOff' color='#f7931a'/>
									<p>There are no properties matching your requirements</p>
								</div>
								}
							</section>
						</div>
					) : (
						//En la ruta '/realestate/:id' se renderiza el componente <RealEstateDetal/> que es donde se encuentra el detalle de la land.
						<RealEstateDetail />
					)
				}
			</div>
		</div>
	);
}

export default RealEstates;
