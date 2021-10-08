// import axios from 'axios';
// import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import Search from '../components/Search';
import ShowsGrid from '../components/ShowsGrid';

const Shows = () => {
	const { items, isLoading, error } = useFetch('https://api.tvmaze.com/shows');

	console.log(items);

	const movies = [];
	items.map(item => movies.push({ id: item.id, title: item.name }));

	console.log(movies);

	const titles = movies.map(movie => movie.title);

	console.log(titles);

	// const [searchedItem, setItem] = useState(items.name);
	// const [query, setQuery] = useState('');

	// useEffect(() => {
	// 	const fetchItem = async () => {
	// 		const result = await axios(
	// 			`https://api.tvmaze.com/search/shows?q=${items}`
	// 		);

	// 		// setItem(result.data[1]);
	// 		console.log(result.data);
	// 		// setQuery(result.data);
	// 		// console.log(result.data);
	// 	};

	// 	fetchItem();
	// }, [items]);

	return (
		<>
			<Header />
			<h2 className="text-lg">Shows</h2>
			<Search newValue={movies.map(movie => movie.title)} />
			{error ? (
				<h3>{error.message}</h3>
			) : (
				<ShowsGrid isLoading={isLoading} items={items} />
			)}
		</>
	);
};

export default Shows;
