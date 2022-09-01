import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGridContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: -20px;
`;

function Grid({ children }) {
	return <StyledGridContainer>{children}</StyledGridContainer>;
}

// Grid.propTypes
Grid.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Grid;
