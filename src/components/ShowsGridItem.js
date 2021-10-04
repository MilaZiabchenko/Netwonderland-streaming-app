import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ShowsGridItem = ({ item }) => {
	const [heartIcon, setIcon] = useState('fas fa-heart fa-2x');
	const history = useHistory();

	const handleLikes = () => {
		setIcon('far fa-heart fa-2x');
	};

	const handleFavorites = () => {
		history.push('/favorites');
	}

	return (
		<div className="card">
			<div className="card-inner">
				<div className="card-front">
					<img src={item.image.original} alt="" />
				</div>
				<div className="card-back">
					<h1>{item.name}</h1>
					<ul>
						<li>
							<strong>Language:</strong> {item.language}
						</li>
						<li>
							<strong>Genres:</strong>{' '}
							{item.genres.map(genre => `${genre} `)}
						</li>
						<li>
							<strong>Premiered:</strong> {item.premiered}
						</li>
						<li>
							<strong>Rating:</strong> {item.rating.average}
						</li>
						<li>
							<i className={heartIcon} onClick={handleLikes}></i>
							<i className="fas fa-share fa-2x btn-icon"></i>
						</li>
						<li>
							<button className="btn btn-center" onClick={handleFavorites}>
								Add to favorites
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ShowsGridItem;
