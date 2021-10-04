import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';

const ShowsItemDetails = () => {
	const { id } = useParams();
	const { items: item } = useFetch('https://api.tvmaze.com/shows/' + id);

	return (
		<div className="card-details">
			<article>
				<h2>{item.name}</h2>
				<p>{item.summary}</p>
			</article>
		</div>
	);
};

export default ShowsItemDetails;
