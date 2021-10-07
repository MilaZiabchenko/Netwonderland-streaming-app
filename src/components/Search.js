import { useState } from 'react';

const Search = ({ getQuery }) => {
	const [text, setText] = useState('');

	const handleSearch = q => {
		// console.log('query', q);
		setText(q);
		// console.log(text);
		getQuery(q);
	};

	return (
		<section className="search">
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Search..."
					value={text}
					onChange={e => handleSearch(e.target.value)}
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
