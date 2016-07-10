import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './style/style.css';

import User from './components/User.js';

class App extends Component {

	render() {
		return (
			<div>
				<User />
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById('root'));