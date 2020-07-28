import React from 'react';

const Button = ({ onClick, /*isSelected*/ children, type }) => {
	return (
		// <div>
		<button
			// isSelected={isSelected}
			onClick={onClick}
			type={type}
			className='btn btn-primary px-4 py-2 mx-2'>
			{children}
		</button>
		// </div>
	);
};

export default Button;
