import React from 'react';
import Button from './core/Button';
import Slider from './core/Slider';

class Add extends React.Component {
	state = { price: 3, input: '' };

	onSlideChange = (val) => {
		this.setState({ price: val });
	};

	onInputChange = (e) => {
		this.setState({ input: e.target.value });
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		const { input, price } = this.state;
		this.props.onSubmit(input, price);
		this.setState({ input: '' });
	};

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div className='form-group vw-100 '>
					<div className='d-flex align-items-center justify-content-center mb-5'>
						<input
							style={{ width: '50%' }}
							className='form-control'
							type='text'
							onChange={this.onInputChange}
							value={this.state.input}
						/>
						<Button type='submit'>add</Button>
					</div>
					<h4 className='text-center'>{this.state.price}$</h4>
					<div style={{ width: '40%', margin: 'auto' }}>
						<Slider onChange={this.onSlideChange} value={this.state.price} />
					</div>
				</div>
			</form>
		);
	}
}

export default Add;
