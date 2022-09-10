import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../../lib/loading-bar/dist/loading-bar.min.css';
import '../../lib/loading-bar/dist/loading-bar.min.js';

const StyledLoadingBar = styled.div`
	font-size: 30px;
	text-align: center;

	h2 {
		margin-bottom: 25px;
		font-weight: 400;
	}
	
	.loading-bar {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.ldBar-label {
		font-weight: 600;
		order: -1;
	}
`;

function LoadingBar({ percentage }) {
	useEffect(() => {
		const loadingBar = new ldBar('.loading-bar', {
			width: 300,
			stroke: 'data:ldbar/res,gradient(0,1,#85ff12,#29fa15, #03ff6c)',
			'stroke-width': 50,
			'aspect-ratio': 'none',
			preset: 'line',
			value: percentage,
		});
	}, []);

	return (
		<StyledLoadingBar>
			<h2>Resources done</h2>

			<div className="loading-bar" style={{width: '100%'}} />
		</StyledLoadingBar>
	);
}

// LoadingBar.propTypes
LoadingBar.propTypes = {
	percentage: PropTypes.number.isRequired,
};

export default LoadingBar;
