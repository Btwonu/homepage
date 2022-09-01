import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	overflow: hidden;

	.wrapper__inner {
		padding-top: 200px;
		width: 100%;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
`;

function Wrapper({children}) {
	return (<StyledWrapper className="wrapper">
		<div className="wrapper__inner">
			{children}
		</div>
	</StyledWrapper>);
}

// Wrapper.propTypes
Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Wrapper;