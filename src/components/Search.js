import { useRef, useState } from 'react';

const Search = ({ newValue, data }) => {
	const [inputText, setInputText] = useState('');
	const inputRef = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		const enteredText = inputRef.current.value;
		console.log(enteredText);

		return enteredText;
	};

	const handleSearch = e => {
		const enteredText = e.target.value;
		setInputText(enteredText);

		console.log(enteredText);

		newValue = data.filter(value =>
			value.title.toLowerCase().includes(enteredText.toLowerCase())
		);

		console.log(newValue);

		return newValue;
	};

	return (
		<section className="search">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Search..."
					ref={inputRef}
					value={inputText}
					onChange={handleSearch}
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
