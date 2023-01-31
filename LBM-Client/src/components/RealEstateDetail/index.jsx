import React, { useState, useMemo, useRef, useEffect } from 'react';
import logo from '../../../public/icons/Logo.svg';
import { useParams } from 'react-router-dom';
// import './index.scss';
import './RealEstateDetail.scss';
import { SlRefresh } from 'react-icons/sl';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare, FiEye } from 'react-icons/fi';
import { BsArrowUpRight, BsThreeDots } from 'react-icons/bs';
import db from '../RealEstates/fakedb/db.json';
import CardPreview from '../RealEstates/CardPreview';
import { Link } from 'react-router-dom';
import Selector from './Selector';
import Modal from './Modal';
import { useModal } from '../../helpers/useModal/useModal';
//<RealEstateDetail/> es el componente que muestra los detalles del land, es importado en el index.jsx de la carpeta RealEstates
function RealEstateDetail() {
	//Necesito acceder a un div que tiene un overflow para poder manejar el scroll con una funcioanlidad, por eso uso useRef
	const div = useRef()
	//accedo al id mediante useParamans
	const { id } = useParams();
	//Al final del componente, se renderizan 5 recomendaciones de estates, utilizo start para hacer un recorte de 5 lands a la base de datos y asi renderizar, uso un Math.random para que no siempre sean los mismos 5
	const start = useMemo(() => Math.floor(Math.random() * db.length), [id]);
	//aqui abajo se hace el recorte
	const splicedb = db.slice(start > 11 ? 11 : start, start + 5);
	//showMore sirve para mostrar mas o menos texto en la descripcion del detalle
	const [showMore, setShowMore] = useState(false);
	//con land encuentro el estate que se selecciono y guardo sus detalles alli
	const land = db.find((e) => e.number === id);
	//nuevamente el hook para abrir <Modal />
	const [isOpenModal, openModal, closeModal] = useModal();
	//este useEffect lo utilizo para scrollear automaticamente hacie arriba en ciertas situaciones
	useEffect(() => {
		window.scroll(0,0)
		div.current.scrollTo({ top: div.current.scrollTop = 5, behavior: 'smooth' });
	}, [id])
	
	return (
		<div ref={div} className="realEstateDetail">
			<Modal
				number={land.number}
				isOpen={isOpenModal}
				closeModal={closeModal}
			/>
			{/* Aqui abajo se encuentra la imagen del detalle del estate */}
			<figure className="figure">
				<img src={land.image} alt="Land" className="figure__image" />
			</figure>
			{/* Dentro del tag <aside> se encuentran todo lo que esta a la derecha de la imagen en la ruta /realestate/:id */}
			<aside className="aside">
				<h1
					id="land"
					className="aside__text aside__text--bold aside__text--large "
				>
					Land #{land.number}
				</h1>
				<section className="aside__section">
					<figure className="aside__figure">
						<img src={logo} alt="Logo" />
					</figure>
					<div className="aside__div">
						<small className="aside__text aside__text--gray aside__text--semibold display--none">
							Current owner
						</small>
						<h4 className="aside__text aside__text--bold">Libertum</h4>
					</div>
				</section>
				<div className="sectionActions">
					<hr className="hr" />
					<div className="actions">
						<div className="actions__div">
							<AiOutlineHeart className="aside__text--gray" />
							<span className="actions_span aside__text--gray aside__text--bold">
								0
							</span>
						</div>
						<div className="actions__div">
							<FiShare className="aside__text--gray" />
							<span className="actions_span aside__text--gray aside__text--bold">
								Share
							</span>
						</div>
						<div className="actions__div">
							<SlRefresh className="aside__text--gray" />
							<span className="actions_span aside__text--gray aside__text--bold">
								Refresh
							</span>
						</div>
						<button className="config">
							{' '}
							<BsThreeDots className="icon" />{' '}
						</button>
					</div>
				</div>
				<div className="cardBid">
					<div className="cardBid__div">
						<small className="aside__text aside__text--gray aside__text--semibold">
							Price
						</small>
						<span className="aside__text aside__text--bold">200 LUSD</span>
					</div>
					<button className="cardBid__button">
						Buy now
					</button>
					{/* Cuando le das click al boton de aqui abajo se abre el modal */}
					<button
						className="cardBid__button cardBid__button--bg-transparent"
						onClick={() => openModal()}
					>
						Place a bid
					</button>
					<p className="aside__text aside__text--semibold end_date">
						Sale ends in: 25d 15h32m 15s
					</p>
				</div>
			</aside>
			{/* En el tag se <section> abarca todo lo que esta debajo de la imagen hasta el h1 que dice "More from this collection" (sin incluir) */}
			<section className="section">
				<Selector />
				<div className="section__div section--flex--column">
					<h2 className="aside__text aside__text--medium">Description</h2>
					<p
						className={`section__p aside__text aside__text--gray section__text--justify ${
							showMore ? null : 'showMore'
						}`}
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
						accusamus eos ducimus, quae veritatis a animi natus, voluptas,
						debitis sit cupiditate aperiam tempore ipsum. Laborum, commodi
						consequuntur. Voluptatum, iste ullam. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Adipisci cum nam explicabo nobis
						voluptatum nihil a sunt quaerat odio consequatur! Magnam magni vitae
						asperiores vel dignissimos recusandae. Libero, nam tempore?
					</p>
					<hr className="section__hr" />
					<small
						className="section__small aside__text aside__text--bold"
						onClick={() => setShowMore(!showMore)}
					>
						{showMore ? 'Show less' : 'Show more'}
					</small>
				</div>
				<div className="section__div section--flex--column">
					<h2 className="aside__text aside__text--medium">Latest Bids</h2>
					<div className="section__div section__p aside__text aside__text--gray border">
						<p>No bids yet. Be the first to place a bid!</p>
					</div>
				</div>
				<div className="section__div section--flex--column">
					<h2 className="aside__text aside__text--medium">Details</h2>
					<ul className="ul">
						<li className="aside_text aside__text--semibold aside__text--gray-darker ul__li">
							<img
								src="https://res.cloudinary.com/dd7pglmrp/image/upload/v1674229299/Binance_zawmhn.svg"
								alt="Binance"
							/>{' '}
							Example ()
						</li>
						<li className="aside_text aside__text--semibold aside__text--gray-darker ul__li">
							<img
								src="https://res.cloudinary.com/dd7pglmrp/image/upload/v1674229299/BinanceFill_hbsntv.svg"
								alt="Binance"
							/>{' '}
							View on Example <BsArrowUpRight />{' '}
						</li>
						<li className="aside_text aside__text--semibold aside__text--gray-darker ul__li">
							<FiEye /> Open original <BsArrowUpRight />
						</li>
						<hr className="section__hr" />
						<li className="aside_text aside__text--semibold aside__text--gray-darker ul__li">
							<SlRefresh /> Refresh Metadata
						</li>
					</ul>
				</div>
			</section>
			{/* En el tag <footer> se encuentra el h1 nombrado anteriormente y las 5 cards de estates recomendadas */}
			<footer className="cards">
				<h2 className="h2">More from this collection</h2>
				<div className='gridCards'>
					{splicedb.map((e) => (
						<Link to={`/realestate/${e.number}`} className="link" key={e.id} >
							<CardPreview
								key={e.id}
								image={e.image}
								number={e.number}
								fiveColumn={true}

							/>
						</Link>
					))}
				</div>
			</footer>
		</div>
	);
}

export default RealEstateDetail;
