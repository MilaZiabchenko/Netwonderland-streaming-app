import Tab1Content from './Tab1Content';
import Tab2Content from './Tab2Content';
import Tab3Content from './Tab3Content';
import { useState } from 'react';

const Main = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = index => {
		setToggleState(index);
	};

	return (
		<section className="main">
			<div className="tabs">
				<div className="container">
					<div
						id="tab-1"
						className={toggleState === 1 ? 'tab-border' : ''}
						onClick={() => toggleTab(1)}
					>
						<i className="fas fa-tablet-alt fa-3x"></i>
						<p>Watch anywhere</p>
					</div>
					<div
						id="tab-2"
						className={toggleState === 2 ? 'tab-border' : ''}
						onClick={() => toggleTab(2)}
					>
						<i className="fas fa-door-open fa-3x"></i>
						<p>Cancel anytime</p>
					</div>
					<div
						id="tab-3"
						className={toggleState === 3 ? 'tab-border' : ''}
						onClick={() => toggleTab(3)}
					>
						<i className="fas fa-tags fa-3x"></i>
						<p>Pick your price</p>
					</div>
				</div>
			</div>
			<div className="tab-content">
				<div className="container">
					<Tab1Content className={toggleState === 1 ? 'show' : ''} />
					<Tab2Content className={toggleState === 2 ? 'show' : ''} />
					<Tab3Content className={toggleState === 3 ? 'show' : ''} />
				</div>
			</div>
		</section>
	);
};

export default Main;
