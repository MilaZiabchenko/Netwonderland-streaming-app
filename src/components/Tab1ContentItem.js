const Tab1ContentItem = ({ source, text1, text2 }) => {
	return (
		<div>
			<img className="tab-1-image" src={source} alt="" />
			<p className="text-md">{text1}</p>
			<p className="text-dark">{text2}</p>
		</div>
	);
};

export default Tab1ContentItem;
