import React, { useState } from 'react';
import logo from '../../../public/icons/Logo.svg';
import { useParams } from 'react-router-dom';
import './index.scss';
import { SlRefresh } from 'react-icons/sl';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare, FiEye } from 'react-icons/fi';
import { BsArrowUpRight } from 'react-icons/bs';
import db from '../RealEstates/fakedb/db.json';
import CardPreview from '../RealEstates/CardPreview';
import { Link } from 'react-router-dom';
import Selector from './Selector';
import Modal from './Modal';
import { useModal } from '../../helpers/useModal/useModal';
import { motion } from 'framer-motion';

function RealEstateDetail() {
	const start = Math.floor(Math.random() * db.length);
	const splicedb = db.slice(start > 11 ? 11 : start, start + 5);
	const { id } = useParams();
	const [showMore, setShowMore] = useState(false);
	const land = db.find((e) => e.number === id);
	const [isOpenModal, openModal, closeModal] = useModal();
	const variants = {
		open: { opacity: 1 },
		closed: { opacity: 0 },
	};
	return (
		<div className="realEstateDetail">
			<motion.div
				animate={isOpenModal ? 'open' : 'closed'}
				variants={variants}
				transition={{ duration: 0.1 }}
			>
				<Modal
					number={land.number}
					isOpen={isOpenModal}
					closeModal={closeModal}
				/>
			</motion.div>
			<section className="section">
				<figure className="section__figure">
					<img src={land.image} alt="Land" className="section__image" />
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
							voluptatum nihil a sunt quaerat odio consequatur! Magnam magni
							vitae asperiores vel dignissimos recusandae. Libero, nam tempore?
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
						<h2 className="aside__text aside__text--medium">Details</h2>
						<ul className="ul">
							<li className="aside_text aside__text--semibold aside__text--gray-darker ul__li">
								<img
									src="https://res.cloudinary.com/dd7pglmrp/image/upload/v1674229299/Binance_zawmhn.svg"
									alt="Binance"
								/>{' '}
								Binance (ERC-721)
							</li>
							<li className="aside_text aside__text--semibold aside__text--gray-darker ul__li">
								<img
									src="https://res.cloudinary.com/dd7pglmrp/image/upload/v1674229299/BinanceFill_hbsntv.svg"
									alt="Binance"
								/>{' '}
								View on Binancescan <BsArrowUpRight />{' '}
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
				</figure>
				<aside className="aside">
					<h1 className="aside__text aside__text--bold aside__text--large ">
						Land #{land.number}
					</h1>
					<section className="aside__section">
						<figure className="aside__figure">
							<img src={logo} alt="Logo" />
						</figure>
						<div className="aside__div">
							<small className="aside__text aside__text--gray aside__text--semibold">
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
						</div>
					</div>
					<div className="cardBid">
						<div className="cardBid__div">
							<small className="aside__text aside__text--gray aside__text--semibold">
								Price
							</small>
							<span className="aside__text aside__text--bold">
								Not for sale
							</span>
						</div>
						<p className="aside__text aside__text--semibold">
							There are no bids yet. Be the first!
						</p>
						<button className="cardBid__button" onClick={() => openModal()}>
							Place a bid
						</button>
					</div>
				</aside>
			</section>
			<h2 className="h2">More from this collection</h2>
			<footer className="cards">
				{splicedb.map((e) => (
					<Link to={`/realestate/${e.number}`} className="link" key={e.id}>
						<CardPreview
							key={e.id}
							image={e.image}
							number={e.number}
							fiveColumn={true}
						/>
					</Link>
				))}
			</footer>
		</div>
	);
}

export default RealEstateDetail;
