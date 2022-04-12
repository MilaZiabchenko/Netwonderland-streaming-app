import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './ShowsItemDetails.css';

const ShowsItemDetails = () => {
  const { id } = useParams();
  const { items: show } = useFetch('https://api.tvmaze.com/shows/' + id);

  const [heartIcon, setIcon] = useState('far fa-heart fa-2x');
  const navigate = useNavigate();

  const handleLikes = () => {
    setIcon('fas fa-heart fa-2x');
  };

  const handleFavorites = () => {
    navigate('/favorites');
  };

  // const showSummaryReplacer = show.summary
  //   .replace('<p>', '')
  //   .replace('</p>', '')
  //   .replace('<b>', '')
  //   .replace('</b>', '');
  // console.log(show);

  // console.log(show)

  return (
    <article className='card-details'>
      <h2>{show.name}</h2>
      <div className='details'>
        {/* <p>{showSummaryReplacer}</p> */}
        {/* <p>{show.summary}</p> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          voluptate, labore reprehenderit eius suscipit voluptas. Aut nostrum
          sint, maiores alias facilis odio magnam, maxime, neque hic a
          voluptates? Vel, dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          praesentium quis nobis distinctio quas expedita alias veniam sit,
          optio facere!
        </p>

        <i className={heartIcon} onClick={handleLikes}></i>
        <i className='fas fa-share fa-2x btn-icon'></i>
        <button className='btn btn-center' onClick={handleFavorites}>
          Add to favorites
        </button>
      </div>
    </article>
  );
};

export default ShowsItemDetails;
