import spinner from '../../images/spinner.gif';
import { Link } from 'react-router-dom';
import ShowsGridItem from '../ShowsGridItem';
import './ShowsGrid.css';

const ShowsGrid = ({ shows, isLoading }) => {
  return isLoading ? (
    <img src={spinner} className="spinner" alt="" />
  ) : (
    <section className="cards">
      {shows.map(show => (
        <Link to={`/shows/${show.id}`}>
          <ShowsGridItem key={show.id} show={show} />
        </Link>
      ))}
    </section>
  );
};

export default ShowsGrid;
