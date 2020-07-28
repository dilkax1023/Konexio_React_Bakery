import React from 'react';
import './App.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { activeTab: 'add', items: [] };

		this.onClickTabAdd = this.onClickTabAdd.bind(this);
		this.onClickTabList = this.onClickTabList.bind(this);
		this.onClickTabPay = this.onClickTabPay.bind(this);
	}

	onClickTabAdd() {
		this.setState({ activeTab: 'add' });
	}
	onClickTabList() {
		this.setState({ activeTab: 'list' });
	}
	onClickTabPay() {
		this.setState({ activeTab: 'pay' });
	}

	onFormSubmit = (item, price) => {
		const items = this.state.items;
		items.push({ name: item, price: price });
		this.setState({ items: items });
	};

	updateItemsHandler = (index) => {
		const items = this.state.items;
		items.splice(index, 1);
		this.setState({ items: items });
	};

	render() {
		return (
			<div className='container-fluide m-5 p-3'>
				<h1 className='text-center m-5 font-weight-bold'>MY BOULANGERIE</h1>
				<div className='row d-flex justify-content-center align-items-center mb-5'>
					<Button onClick={this.onClickTabAdd} type='button'>
						Add
					</Button>
					<Button
						onClick={this.onClickTabList}
						type='button'
						color='btn-success'>
						List
					</Button>
					<Button onClick={this.onClickTabPay} type='button' color='btn-danger'>
						Pay
					</Button>
				</div>
				<div className='row d-flex justify-content-center'>
					{this.state.activeTab === 'add' ? (
						<Add onSubmit={this.onFormSubmit} />
					) : null}
					{this.state.activeTab === 'list' ? (
						<List
							deleteHandler={this.updateItemsHandler}
							items={this.state.items}
						/>
					) : null}
					{this.state.activeTab === 'pay' ? (
						<Pay items={this.state.items} />
					) : null}
				</div>
			</div>
		);
	}
}

export default App;
