import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

class App extends React.Component {
	state = { activeTab: 'add', items: [] };
	render() {
		return (
			<div>
				<Button />
				<Add />
				<List />
				<Pay />
			</div>
		);
	}
}

export default App;
