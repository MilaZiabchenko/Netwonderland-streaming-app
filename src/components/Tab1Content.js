import Beth_1 from '../images/beth_1.jpg';
import Beth_2 from '../images/beth_2.jpg';
import Beth_3 from '../images/beth_3.jpg';
import Beth_4 from '../images/beth_4.jpg';
import Tab1ContentItem from './Tab1ContentItem';

const Tab1Content = ({ className }) => {
	const highlightedText = (
		<>
			<span>NeTWondeRLanD</span> is optimized for today’s browsers so you
			can watch on your PC or laptop.
		</>
	);

	return (
		<div id="tab-1-content" className={className}>
			<div className="tab-1-content-top">
				<p className="text-lg">
					Watch TV shows and movies anytime, anywhere — personalized
					for you.
				</p>
			</div>
			<div className="tab-1-content-bottom">
				<Tab1ContentItem
					source={Beth_1}
					text1="Watch on your TV"
					text2="Streaming Media Players, Smart TVs, Game
								Consoles and more."
				/>
				<Tab1ContentItem
					source={Beth_2}
					text1="Stream on your Blu-ray player"
					text2="Enjoy sights and sounds, using Blu-ray player or
								Home Theater System."
				/>
				<Tab1ContentItem
					source={Beth_3}
					text1="Watch instantly or download for later"
					text2="Available on phone and tablet, wherever you go."
				/>
				<Tab1ContentItem
					source={Beth_4}
					text1="Use any computer"
					text2={highlightedText}
				/>
			</div>
		</div>
	);
};

export default Tab1Content;
