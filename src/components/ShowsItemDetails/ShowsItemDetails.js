import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import './ShowsItemDetails.css';

const ShowsItemDetails = () => {
  const { id } = useParams();
  const { items: show } = useFetch('https://api.tvmaze.com/shows/' + id);

  return (
    <div className="card-details">
      <article>
        <h2>{show.name}</h2>
        <p>{show.summary}</p>
      </article>
    </div>
  );
};

export default ShowsItemDetails;
