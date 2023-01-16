import React from 'react';
import './index.scss';
const Toggle = () => {
	return (
		<div>
			<div className="toggle-switch">
				<input type="checkbox" className="checkbox" name='toggle' id='toggle' />
				<label className="label" htmlFor='toggle'>
					<span className="inner" />
					<span className="switch">h</span>
				</label>
			</div>
		</div>
	);
};
export default Toggle;
