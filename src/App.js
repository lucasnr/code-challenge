import React from 'react';

import Sidebar from './component/Sidebar';
import Main from './component/Main';

import './App.scss';
import './assets/css/reset.css';

class App extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		fetch("https://raw.githubusercontent.com/lucasnr/code-challenge/master/src/assets/me.json")
			.then(response => response.json())
			.then(({ profile }) => {
				this.setState({ profile });
			});
	}

	render() {
		const { profile } = this.state;
		if(! profile) 
			return null;

		return (
			<div className="App">
				<Sidebar profile={profile} />
				<Main profile={profile} />
			</div>
		);
	}
}

export default App;
