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
		value: 50,
		states: [
			{ state: 'San Pablo', value: 90 },
			{ state: 'Rio de Janeiro', value: 60 },
			{ state: 'Goias', value: 94 },
			{ state: 'Mato Grosso', value: 50 },
			{ state: 'Salvador', value: 100 },
		],
	},
	
	{
		country: 'hong kong',
		value: 75,
		states: [
			{ state: 'Kowloon', value: 67 },
			{ state: 'Hong Kong Island', value: 34 },
			{ state: 'Kwai Tsing', value: 29 },
			{ state: 'Sai Kung', value: 107 },
			{ state: 'Tai Po', value: 90 },
			{ state: 'Tsuen Wan', value: 83 },
		],
	},
	{
		country: 'italia',
		value: 80,
		states: [
			{ state: 'Roma', value: 82 },
			{ state: 'Milan', value: 46 },
			{ state: 'Napoles', value: 91 },
			{ state: 'Turin', value: 73 },
			{ state: 'Génova', value: 50 },
			{ state: 'Florencia', value: 92 },
		],
	},
	{
		country: 'dubai',
		value: 100,
		states: [
			{ state: 'Dubai', value: 300 },
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
