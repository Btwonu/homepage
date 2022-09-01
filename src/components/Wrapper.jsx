import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	overflow-x: hidden;
`;

function Wrapper({children}) {
	return <StyledWrapper>{children}</StyledWrapper>;
}

// Wrapper.propTypes
Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Wrapper;