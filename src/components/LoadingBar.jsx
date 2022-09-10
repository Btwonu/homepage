import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../../lib/loading-bar/dist/loading-bar.min.css';
import '../../lib/loading-bar/dist/loading-bar.min.js';

const StyledLoadingBar = styled.div`
	&.is-done {
		background: rgba(30, 30, 30, 0.2);
	}
`;

function LoadingBar({ percentage }) {
	useEffect(() => {
		const loadingBar = new ldBar('.myBar', {
			stroke: 'data:ldbar/res,gradient(0,1,#85ff12,#29fa15, #03ff6c)',
			'stroke-width': 40,
			preset: 'line',
			value: percentage,
		});
	}, []);

	return (
		<StyledLoadingBar>
			<div className="myBar" />
		</StyledLoadingBar>
	);
}

// LoadingBar.propTypes
LoadingBar.propTypes = {
	percentage: PropTypes.number.isRequired,
};

export default LoadingBar;
