import React from 'react';
import Card from './product/Card';

class Pay extends React.Component {
	state = {
		basket: [],
		subTotal: 0,
		totalVat: 0,
		totalEcoTax: 0,
		total: 0,
	};

	onClickItem = (name, price) => {
		this.setBasketFn(name, price);
		this.setPriceFn();
	};

	setBasketFn = (name, price) => {
		const { basket } = this.state;
		let selectedItem = { name: name, price: price, count: 1 };
		const selectedItemIndex = basket.findIndex((item) => item.name === name);
		if (selectedItemIndex !== -1) {
			basket[selectedItemIndex].count++;
		} else {
			basket.push(selectedItem);
		}
		// console.log(selectedItemIndex, basket);
		this.setState({ basket: basket });
	};

	setPriceFn = () => {
		let { basket, totalVat, totalEcoTax, total } = this.state;
		let subTotalTemp = 0;
		for (let item of basket) {
			subTotalTemp += item.price * item.count;
			totalEcoTax += item.count * 0.03;
		}
		totalVat = subTotalTemp * 0.2;
		total = subTotalTemp + totalVat + totalEcoTax;

		this.setState({
			subTotal: subTotalTemp,
			totalVat: totalVat,
			totalEcoTax: totalEcoTax,
			total: total,
		});
		console.log(subTotalTemp, totalVat, totalEcoTax, total);
	};

	render() {
		let { basket, subTotal, totalVat, totalEcoTax, total } = this.state;

		const { items } = this.props;
		const card = this.props.items.map((item, index) => {
			return (
				<Card
					name={item.name}
					price={item.price}
					onClickFn={this.onClickItem}
					key={index}
				/>
			);
		});

		const selectedItem = basket.map((item, index) => {
			return (
				<h5 key={index}>
					{item.name} x {item.count}
				</h5>
			);
		});

		const renderedContent = (
			<React.Fragment>
				<div className='col-md-6 text-center'>
					<h1 className='text-center mb-3'>Pay</h1>
					{selectedItem}
				</div>
				<div className='col-md-6 text-right mt-5 pt-5 pr-5'>
					<h5>SubTotal: {subTotal.toFixed(2)}$</h5>
					<h5>totalVat: {totalVat.toFixed(2)}$</h5>
					<h5>totalEcoTax: {totalEcoTax.toFixed(2)}$</h5>
					<h5>Total: {total.toFixed(2)}$</h5>
				</div>
				<div className='row mt-5'>{card}</div>;
			</React.Fragment>
		);

		return (
			<React.Fragment>
				{items.length ? (
					renderedContent
				) : (
					<h1 className='text-center m-5 p-5 bg-success rounded-lg'>
						No items are availeble
					</h1>
				)}
			</React.Fragment>
		);
	}
}

export default Pay;
