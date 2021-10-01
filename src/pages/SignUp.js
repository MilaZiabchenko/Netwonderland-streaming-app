import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const SignUp = () => {
	return (
		<div>
			<div className="showcase-top">
				<Link to="/" className="logo">
					NeTWondeRLanD
				</Link>
				<nav className="links">
					<Link to="/login" className="btn btn-rounded">
						Sign In
					</Link>
				</nav>
			</div>
			<Modal text="Sign Up" />
		</div>
	);
};

export default SignUp;
