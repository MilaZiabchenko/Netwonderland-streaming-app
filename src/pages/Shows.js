import axios from 'axios';
import { useState, useEffect } from 'react';
import useFetch from '../components/useFetch';
import Header from '../components/Header';
import Search from '../components/Search';
import ShowsGrid from '../components/ShowsGrid';
import Footer from '../components/Footer';

const Shows = () => {
	const { items, isLoading, error } = useFetch(
		'https://api.tvmaze.com/shows'
	);

	const [searchedItem, setItem] = useState('')
	const [query, setQuery] = useState(searchedItem);

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);

			setItem(result.data);
		};

		fetchItems();
	}, [query]);

	return (
		<>
			<Header />
			<h2 className="text-lg">Shows</h2>
			<Search getQuery={q => setQuery(q)} />
			{error ? (
				<h3>{error.message}</h3>
			) : (
				<ShowsGrid isLoading={isLoading} items={items} />
			)}
			<Footer />
		</>
	);
};

export default Shows;
