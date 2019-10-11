import React from 'react';

import Header from './component/Header';
import { Profile, Contact, Skills } from './component/Sidebar';
import { Experience } from './component/Main';

import './assets/css/reset.css';
import './assets/css/style.css';
import './assets/css/sidebar.css';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			profile: {
			}
		}
	}

	componentDidMount() {
		fetch("http://www.mocky.io/v2/5a5e38f3330000b0261923a5")
			.then(response => response.json())
			.then(user => {
				const { profile } = user;
				this.setState({ profile });
			})
	}

	render() {
		return (
			<main className="main">
				<aside className="sidebar">
					<Header {...this.state.profile} />
					<Profile {...this.state.profile} />
					<Contact {...this.state.profile} />
					<Skills {...this.state.profile} />
				</aside>
				<article className="mainContent">
					<h2 className="mainContent-title">Work Experience</h2>

					<Experience />
				</article>
			</main>
		);
	}
}

export default App;
