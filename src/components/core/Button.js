import React from 'react';

const Button = ({ onClick, children, type }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className='btn btn-primary px-4 py-2 mx-2'>
			{children}
		</button>
	);
};

export default Button;
