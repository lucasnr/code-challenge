import React from 'react';

import Header from './component/Header';
import { Profile, Contact, Skills } from './component/Sidebar';
import { Content } from './component/Main';

import './assets/css/reset.css';
import './assets/css/style.css';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			profile: {
			}
		}
	}

	componentDidMount() {
		fetch("https://www.mocky.io/v2/5a5e38f3330000b0261923a5")
			.then(response => response.json())
			.then(({ profile }) => {
				this.setState({ profile });
			})
	}

	render() {
		const { profile } = this.state;
		return (
			<main className="main">
				<aside className="sidebar">
					<Header {...profile} />
					<Profile {...profile} />
					<Contact {...profile} />
					<Skills {...profile} />
				</aside>
				<article className="mainContent">
					<h2 className="mainContent-title">Work Experience</h2>

					{profile.experience && profile.experience.map(experience => (
						<Content content={experience} />
					))}

					<h2 className="mainContent-title">Education</h2>
					{profile.education && profile.education.map(education => (
						<Content content={education} />
					))}

				</article>
			</main>
		);
	}
}

export default App;
