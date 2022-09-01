import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
	padding: 60px 0;
`;

function Section({ children }) {
	return <StyledSection>{children}</StyledSection>;
}

export default Section;
