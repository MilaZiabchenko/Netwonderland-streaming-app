import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Main from '../../components/Main';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="showcase">
        <Header />
        <div className="showcase-content">
          <Link to="/signup" className="btn btn-xl">
            Get Started{' '}
            <i className="fas fa-chevron-right btn-icon"></i>
          </Link>
        </div>
      </section>
      <Main />
    </>
  );
};

export default Home;
