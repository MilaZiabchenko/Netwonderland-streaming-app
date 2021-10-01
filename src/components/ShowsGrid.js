import spinner from '../images/spinner.gif';
import { Link } from 'react-router-dom';
import ShowsGridItem from './ShowsGridItem';

const ShowsGrid = ({ items, isLoading }) => {
	return isLoading ? (
		<img src={spinner} className="spinner" alt="" />
	) : (
		<section className="cards">
			{items.map(item => (
				<div key={item.id}>
					<Link to={`/shows/${item.id}`}>
						<ShowsGridItem item={item} />
					</Link>
				</div>
			))}
		</section>
	);
};

export default ShowsGrid;
