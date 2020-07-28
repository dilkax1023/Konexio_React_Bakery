import React from 'react';
import specimen from '../../specimen.jpg';

class Card extends React.Component {
	state = { source: specimen };

	componentDidMount() {
		fetch(
			`http://konexio.codiscovery.co/bakery/api/?q=${this.props.name}`
		).then((response) => {
			if (!response.ok) throw new Error('status code error');
			response
				.json()
				.then((data) => this.setState({ source: data.source }))
				.catch((err) => console.log(err));
		});
	}

	render() {
		const { name, price, onClickFn } = this.props;

		const style = {
			maxWidth: '100%',
			Height: '100%',
			display: 'block',
			objectFit: 'fill',
		};

		return (
			<div className='col-md-3'>
				<button className='m-1 w-100' onClick={() => onClickFn(name, price)}>
					<img src={this.state.source} alt={name} style={style} />
				</button>
			</div>
		);
	}
}

export default Card;
