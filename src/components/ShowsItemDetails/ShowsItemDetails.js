import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './ShowsItemDetails.css';

const ShowsItemDetails = () => {
  const { id } = useParams();
  const { items: show } = useFetch('https://api.tvmaze.com/shows/' + id);

  const [heartIcon, setIcon] = useState('far fa-heart fa-2x');

  const navigate = useNavigate();

  const handleLikes = () => {
    heartIcon === 'far fa-heart fa-2x'
      ? setIcon('fas fa-heart fa-2x')
      : setIcon('far fa-heart fa-2x');
  };

  const handleFavorites = () => {
    navigate('/favorites');
  };

  return (
    <article className='show-details'>
      <h2>{show.name}</h2>
      <div className='card-details'>
        {show.summary && (
          <p>
            {show.summary
              .replace('<p>', '')
              .replace('</p>', '')
              .replace('<br />', '')
              .replace('<b>', '')
              .replace('</b>', '')
              .replace('<i>', '')
              .replace('</i>', '')}
          </p>
        )}
        <i className={heartIcon} onClick={handleLikes}></i>
        <i className='fas fa-share fa-2x btn-icon'></i>
        <button className='btn btn-lg btn-center' onClick={handleFavorites}>
          Add to favorites
        </button>
      </div>
    </article>
  );
};

export default ShowsItemDetails;
