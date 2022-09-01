import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
	padding: 60px 0;
`;

function Section({ children }) {
	return <StyledSection>{children}</StyledSection>;
}

// Section.propTypes
Section.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Section;
