import React from 'react';
import Country from './Country';
import './index.scss';
const countries = [
	{
		country: 'usa',
		value: 41,
		states: [
			{ state: 'New york', value: 83 },
			{ state: 'Los Angeles', value: 83 },
			{ state: 'Chicago', value: 84 },
			{ state: 'Boston', value: 106 },
			{ state: 'San Francisco', value: 106 },
			{ state: 'Houston', value: 107 },
		],
	},
	{
		country: 'brazil',

		states: [
			{ state: 'New york', value: 83 },
			{ state: 'Los Angeles', value: 83 },
			{ state: 'Chicago', value: 84 },
			{ state: 'Boston', value: 106 },
			{ state: 'San Francisco', value: 106 },
			{ state: 'Houston', value: 107 },
		],
	},
];
function Properties() {
	return (
		<div className="propertiesComponent">
			<div className="inputWrapperProperties">
				<input
					type="search"
					className="inputProperties"
					placeholder="Search by traits..."
				/>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="inputIconProperties"
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
			{countries.map((country) => (
				<Country country={country.country} value={country.value} states={country.states} />
			))}
		</div>
	);
}

export default Properties;
