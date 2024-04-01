import React from 'react';
import { useState } from 'react';
import { ReactDOM } from 'react';
import './square.styles.css';

function Square({ value, onSquareClick }) {
	return (
		<button
			className="square"
			onClick={onSquareClick}
		>
			{value}
		</button>
	);
}

export default Square;
