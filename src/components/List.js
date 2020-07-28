import React from 'react';
import Button from './core/Button';

const List = ({ items, deleteHandler }) => {
	const itemsList = items.map((item, index) => {
		return (
			<div key={index} className='card card-body mb-1 mx-auto'>
				<h4 className='align-baseline '>
					{item.name}
					<span className='float-right text-primary'>
						{item.price}${' '}
						<Button onClick={() => deleteHandler(index)}>Delete</Button>
					</span>
				</h4>
			</div>
		);
	});

	return (
		<div style={{ width: '60%', lineHeight: '100%' }} className='mx-auto'>
			{itemsList.length ? (
				itemsList
			) : (
				<h1 className='text-center m-5 p-5 bg-success rounded-lg'>
					No items are availeble
				</h1>
			)}
		</div>
	);
};

export default List;
