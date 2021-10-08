import { useRef, useState } from 'react';

const Search = ({ newValue }) => {
	const [text, setText] = useState('');
	const inputRef = useRef();

	const handleSubmit = e => {
		e.preventDefault();

		const enteredText = inputRef.current.value;

		console.log(enteredText);

		return enteredText;
	};

	const handleSearch = q => {
		console.log(q);

		newValue = setText(q);

		console.log(q);
		
		return newValue;
	};

	return (
		<section className="search">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Search..."
					value={text}
					ref={inputRef}
					onChange={e => handleSearch(e.target.value)}
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
