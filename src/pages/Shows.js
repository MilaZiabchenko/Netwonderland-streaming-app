import { useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import ShowsGrid from '../components/ShowsGrid';

const Shows = () => {
	const {
		items: shows,
		isLoading,
		error
	} = useFetch('https://api.tvmaze.com/shows');

	console.log(shows);

	const [inputText, setInputText] = useState('');
	const inputRef = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		setInputText(inputRef.current.value);
		// setInputText('');
	};

	const filteredShows = shows.filter(show =>
		show.name.toLowerCase().includes(inputText.toLowerCase())
	);

	const handleSearch = e => {
		setInputText(e.target.value);
	};

	const clearInput = () => {
		setInputText('');
	};

	return (
		<>
			<Header />
			<h2 className="text-lg">Shows</h2>
			<section className="search">
				<form onSubmit={handleSubmit}>
					<div className="searchInputs">
						<input
							type="text"
							className="form-control"
							placeholder="Search..."
							ref={inputRef}
							value={inputText}
							onChange={handleSearch}
							autoFocus
						/>
						<div className="searchIcon">
							{inputText === '' ? (
								<i className="fas fa-search fa-2x"></i>
							) : (
								<i
									className="fas fa-times fa-2x clear-btn"
									onClick={clearInput}
								></i>
							)}
						</div>
					</div>
				</form>
			</section>
			{error ? (
				<h3 className="text-lg">
					{' '}
					<span> {error} :( </span>{' '}
				</h3>
			) : (
				<ShowsGrid isLoading={isLoading} shows={filteredShows} />
			)}
		</>
	);
};

export default Shows;
