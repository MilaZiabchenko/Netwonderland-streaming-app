import './ShowsGridItem.css';

const ShowsGridItem = ({ show }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={show.image.original} alt='' />
        </div>
        <div className='card-back'>
          <h1>{show.name}</h1>
          <ul>
            <li>
              <strong>Language:</strong> {show.language}
            </li>
            <li>
              <strong>Genres:</strong> {show.genres.map(genre => `${genre} `)}
            </li>
            <li>
              <strong>Premiered:</strong> {show.premiered}
            </li>
            <li>
              <strong>Ended:</strong> {show.ended}
            </li>
            <li>
              <strong>Rating:</strong> {show.rating.average}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowsGridItem;
