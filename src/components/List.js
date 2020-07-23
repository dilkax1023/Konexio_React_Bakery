import React from 'react';

const List = ({ items }) => {
	const itemsList = items.map((item) => {
		return (
			<div key={item.name} className='card card-body mb-1 mx-auto'>
				<h4 className='align-baseline '>
					{item.name}
					<span className='float-right text-primary'>{item.price}$</span>
				</h4>
			</div>
		);
	});
	return (
		<div style={{ width: '60%', lineHeight: '100%' }} className='mx-auto'>
			{itemsList}
		</div>
	);
};

export default List;
