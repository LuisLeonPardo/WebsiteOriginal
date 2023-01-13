import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
// import Dashboard from "./components/Dashboards/Dashboard";
import './App.css';
import RealEstates from './components/RealEstates';
import Dash from './components/Dashboards/Dash/Dash';

function App() {
	return (
			<div className="App">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/realestate" element={<RealEstates />} />
					<Route path="/dashboard" element={<Dash />} />

				</Routes>
			</div>
	);
}

export default App;
