import React from 'react';

const Button = () => {
	return (
		<div>
			<button type='button' className='active btn btn-primary px-4 py-1 mx-2'>
				add
			</button>
			<button type='button' className=' btn btn-secondary px-4 py-1 mx-2'>
				list
			</button>
			<button type='button' className=' btn btn-success px-4 py-1 mx-2'>
				pay
			</button>
		</div>
	);
};

export default Button;
