import spinner from '../images/spinner.gif';
import { Link } from 'react-router-dom';
import ShowsGridItem from './ShowsGridItem';

const ShowsGrid = ({ shows, isLoading }) => {
	return isLoading ? (
		<img src={spinner} className="spinner" alt="" />
	) : (
		<section className="cards">
			{shows.map(show => (
				<div key={show.id}>
					<Link to={`/shows/${show.id}`}>
						<ShowsGridItem show={show} />
					</Link>
				</div>
			))}
		</section>
	);
};

export default ShowsGrid;
