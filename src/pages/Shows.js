import axios from 'axios';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import Search from '../components/Search';
import ShowsGrid from '../components/ShowsGrid';

const Shows = () => {
	const { items, isLoading, error } = useFetch('https://api.tvmaze.com/shows');

	const [searchedItem, setItem] = useState(items);
	const [query, setQuery] = useState(searchedItem);

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				`https://api.tvmaze.com/search/shows?q=${query}`
			);

			setItem(result.data);
		};

		fetchItems();
		// console.log(query);
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
				// <ShowsGrid isLoading={isLoading} items={searchedItem} />
			)}
		</>
	);
};

export default Shows;
