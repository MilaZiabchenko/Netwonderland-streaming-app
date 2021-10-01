import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const Login = () => {
	return (
		<div>
			<div className="showcase-top">
				<Link to="/" className="logo">
					NeTWondeRLanD
				</Link>
			</div>
			<Modal text="Sign In" />
		</div>
	);
};

export default Login;
