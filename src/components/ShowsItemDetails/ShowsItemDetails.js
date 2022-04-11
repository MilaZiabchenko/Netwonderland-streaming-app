import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './ShowsItemDetails.css';

const ShowsItemDetails = () => {
  const { id } = useParams();
  const { items: show } = useFetch('https://api.tvmaze.com/shows/' + id);

  const showSummaryReplacer = show.summary
    .replace('<p>', '')
    .replace('</p>', '')
    .replace('<b>', '')
    .replace('</b>', '');

  return (
    <article className='card-details'>
      <h2>{show.name}</h2>
      {/* <p>{show.summary}</p> */}
      <p>{showSummaryReplacer}</p>
      <div>
        <img src={show.image.original} alt='' />
      </div>
    </article>
  );
};

export default ShowsItemDetails;
