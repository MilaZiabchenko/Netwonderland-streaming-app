import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { signup } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    // signup(emailRef.current.value, passwordRef.current.value);
  };

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
            <form onSubmit={handleSubmit}>
              <input
                id="email"
                type="email"
                ref={emailRef}
                className="form-control"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                id="password"
                type="password"
                ref={passwordRef}
                className="form-control"
                placeholder="Password"
                autoComplete="off"
                required
              />
              <input
                id="password-confirm"
                type="password"
                ref={passwordConfirmRef}
                className="form-control"
                placeholder="Password confirmation"
                autoComplete="off"
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
                <strong className="text-black"> Sign in.</strong>
              </Link>{' '}
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignUp;
