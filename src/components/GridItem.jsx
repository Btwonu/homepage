import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGridItem = styled.div`
	flex: 0 0 ${({ widthPercentage }) => widthPercentage}%;
	padding: 20px;
`;

function GridItem({ children, xs }) {
	const widthPercentage = (100 / 12) * xs;

	return (
		<StyledGridItem widthPercentage={widthPercentage}>
			{children}
		</StyledGridItem>
	);
}

// GridItem.propTypes
GridItem.propTypes = {
	children: PropTypes.node.isRequired,
	xs: PropTypes.number.isRequired,
};

export default GridItem;
