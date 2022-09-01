import React from 'react';
import styled from 'styled-components';

const StyledShell = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding-left: 50px;
	padding-right: 50px;
`;

function Shell({ children }) {
	return <StyledShell>{children}</StyledShell>;
}

export default Shell;
