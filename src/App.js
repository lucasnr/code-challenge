import React from 'react';

import Header from './component/Header';
import { Profile, Contact, Skills } from './component/Sidebar';

import './assets/css/reset.css';
import './assets/css/sidebar.css';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			user: {
			}
		}
	}

	componentDidMount() {
		fetch("http://www.mocky.io/v2/5a5e38f3330000b0261923a5")
			.then(response => response.json())
			.then(user => {
				this.setState({ user });
			})
	}

	render() {
		return (
			<>
				<aside className="sidebar">
					<Header {...this.state.user.profile} />
					<Profile {...this.state.user.profile} />
					<Contact {...this.state.user.profile} />
					<Skills {...this.state.user.profile} />
				</aside>

			</>
		);
	}
}

export default App;
