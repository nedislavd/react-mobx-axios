import React from 'react';
import loading from '../../assets/loading.svg';

const LoadingIndicator = ({ size }) => {
	return (
		<img src={loading} width={size} height={size} alt="loading" />
	)
}

export default LoadingIndicator;