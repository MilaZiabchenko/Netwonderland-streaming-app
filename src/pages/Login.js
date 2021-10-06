import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<header className="showcase-top">
				<Link to="/" className="logo">
					NeTWondeRLanD
				</Link>
			</header>
			<div className="modal">
				<div className="modal-content">
					<section className="sign-in">
						<h2 className="text-xl">
							{' '}
							<span>Sign In</span>
						</h2>
						<form>
							<input
								type="email"
								className="form-control"
								placeholder="Email"
								required
							/>
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								required
							/>
							<button type="submit" className="btn btn-submit">
								Sign In
							</button>
						</form>
						<p>
							New to NeTWondeRLanD?{' '}
							<Link to="/signup">
								{' '}
								<strong className="text-black">
									{' '}
									Sign up now.
								</strong>
							</Link>{' '}
						</p>
					</section>
				</div>
			</div>
		</>
	);
};

export default Login;
