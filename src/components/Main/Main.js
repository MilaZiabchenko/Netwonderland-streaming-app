import Tab1Content from '../Tab1Content';
import Tab2Content from '../Tab2Content';
import Tab3Content from '../Tab3Content';
import { useState } from 'react';
import './style.css';

const FIRST_TAB = 1;
const SECOND_TAB = 2;
const THIRD_TAB = 3;

const Main = () => {
	const [toggleState, setToggleState] = useState(FIRST_TAB);

	const toggleTab = index => {
		setToggleState(index);
	};

	return (
		<section className="main">
			<div className="tabs">
				<div className="container">
					<div
						id="tab-1"
						className={toggleState === FIRST_TAB ? 'tab-border' : ''}
						onClick={() => toggleTab(FIRST_TAB)}
					>
						<i className="fas fa-tablet-alt fa-3x"></i>
						<p>Watch anywhere</p>
					</div>
					<div
						id="tab-2"
						className={toggleState === SECOND_TAB ? 'tab-border' : ''}
						onClick={() => toggleTab(SECOND_TAB)}
					>
						<i className="fas fa-door-open fa-3x"></i>
						<p>Cancel anytime</p>
					</div>
					<div
						id="tab-3"
						className={toggleState === THIRD_TAB ? 'tab-border' : ''}
						onClick={() => toggleTab(THIRD_TAB)}
					>
						<i className="fas fa-tags fa-3x"></i>
						<p>Pick your price</p>
					</div>
				</div>
			</div>
			<div className="tab-content">
				<div className="container">
					<Tab1Content className={toggleState === FIRST_TAB ? 'show' : ''} />
					<Tab2Content className={toggleState === SECOND_TAB ? 'show' : ''} />
					<Tab3Content className={toggleState === THIRD_TAB ? 'show' : ''} />
				</div>
			</div>
		</section>
	);
};

export default Main;
