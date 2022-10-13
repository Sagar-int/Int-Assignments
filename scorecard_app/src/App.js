import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Signup } from './components/forms/signup/Signup';
import { Login } from './components/forms/login/Login';
import { NavbarCompo } from './components/navbar/Navbar';
import { StartPage } from './components/startpage/StartPage';
import { Dashboard } from './components/dashboard/Dashboard';
import PrivateRoute from './components/privateroute/PrivateRoute';

function App() {
	return (
		<div className="App">
			<NavbarCompo />
			<br />
			<br />
			{/* <Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes> */}

			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/dashboard"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
