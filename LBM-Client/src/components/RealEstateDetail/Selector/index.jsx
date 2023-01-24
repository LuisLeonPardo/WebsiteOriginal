import React, { useState } from 'react';
import './index.scss';
import { motion } from 'framer-motion';
const variants = {
	open: { backgroundColor: '#fff' },
	closed: { backgroundColor: 'hsla(349, 100%, 100%, 0)' },
};
function Selector() {
	const [isActive, setIsActive] = useState({
		over: true,
		prop: false,
		hist: false,
	});
	return (
		<ul className="selector">
			<motion.div
				animate={isActive.over ? 'open' : 'closed'}
				variants={variants}
				transition={{ ease: 'backIn' }}
				className="selector__li"
			>
				<li
					className={`ul__li ${isActive.over ? 'active' : null}`}
					onClick={() =>
						setIsActive({
							over: true,
							prop: false,
							hist: false,
						})
					}
				>
					Overview
				</li>
			</motion.div>
			<motion.div
				animate={isActive.prop ? 'open' : 'closed'}
				variants={variants}
				transition={{ ease: 'backIn' }}
				className="selector__li"
			>
				<li
					className={`ul__li ${isActive.prop ? 'active' : null}`}
					onClick={() =>
						setIsActive({
							over: false,
							prop: true,
							hist: false,
						})
					}
				>
					Properties
				</li>
			</motion.div>
			<motion.div
				animate={isActive.hist ? 'open' : 'closed'}
				variants={variants}
				transition={{ ease: 'backIn' }}
				className="selector__li"
			>
				<li
					className={`ul__li ${isActive.hist ? 'active' : null}`}
					onClick={() =>
						setIsActive({
							over: false,
							prop: false,
							hist: true,
						})
					}
				>
					History
				</li>
			</motion.div>
		</ul>
	);
}

export default Selector;
