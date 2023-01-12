import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
// import Dashboard from "./components/Dashboards/Dashboard";
import './App.css';
import RealEstates from './components/RealEstates';

function App() {
	return (
			<div className="App">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/realestate" element={<RealEstates />} />
				</Routes>
			</div>
	);
}

export default App;
