// import '../public/css/bootstrap.min.css';
import React from 'react';
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
		// console.log(items);
		this.setState({ items: items });
		// console.log(items);
	};

	render() {
		return (
			<div className='container-fluide mt-5'>
				<h1 className='text-center m-5 font-weight-bold'>
					WELCOME TO MY BOULANGERIE
				</h1>
				<div className='row d-flex justify-content-center align-items-center mb-4'>
					<Button onClick={this.onClickTabAdd} type='button'>
						Add
					</Button>
					<Button onClick={this.onClickTabList} type='button'>
						List
					</Button>
					<Button onClick={this.onClickTabPay} type='button'>
						Pay
					</Button>
				</div>
				<div className='row my-3'>
					{this.state.activeTab === 'add' ? (
						<Add onSubmit={this.onFormSubmit} />
					) : null}
					{this.state.activeTab === 'list' ? (
						<List items={this.state.items} />
					) : null}
					{this.state.activeTab === 'pay' ? <Pay /> : null}
				</div>
			</div>
		);
	}
}

export default App;
