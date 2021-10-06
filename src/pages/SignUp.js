import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<>
			<header className="showcase-top">
				<Link to="/" className="logo">
					NeTWondeRLanD
				</Link>
				<nav className="links">
					<Link to="/login" className="btn btn-rounded">
						Sign In
					</Link>
				</nav>
			</header>
			<div className="modal">
				<div className="modal-content">
					<section className="sign-up">
						<h2 className="text-xl">
							{' '}
							<span>Sign Up</span>
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
							<input
								type="password"
								className="form-control"
								placeholder="Password confirmation"
								required
							/>
							<button type="submit" className="btn btn-submit">
								Sign Up
							</button>
						</form>
						<p>
							Already have an account?{' '}
							<Link to="/login">
								{' '}
								<strong className="text-black">
									{' '}
									Sign in.
								</strong>
							</Link>{' '}
						</p>
					</section>
				</div>
			</div>
		</>
	);
};

export default SignUp;
