import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { setupUserLogout } from '../../actions/auth.action';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

export const NavbarCompo = () => {
	const { isloggedin } = useSelector((state) => state.AcademicReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(setupUserLogout(undefined));
		navigate('/login');
	};

	return (
		<div className="navbar_comp">
			<div className="left_bar">
				<Link to="/">
					<button className="left_bar_btn">Home</button>
				</Link>
				<Link to="/dashboard">
					<button className="left_bar_btn">Dashboard</button>
				</Link>
			</div>
			<div className="right_bar">
				{isloggedin ? (
					<Button onClick={handleLogout} variant="outline-secondary" size="sm">
						Sign out
					</Button>
				) : (
					<Link to="/login">
						<Button variant="outline-secondary" size="sm">
							Sign in
						</Button>
					</Link>
				)}

				<Link to="/signup">
					<Button variant="success" size="sm">
						Sign up
					</Button>
				</Link>
			</div>
		</div>
	);
};
