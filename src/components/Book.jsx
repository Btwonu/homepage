import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBook = styled.div`
	&.is-done {
		background: rgba(30, 30, 30, 0.2);
	}
`;

function Book({ title, description, done }) {
	return (
		<StyledBook className={done && 'is-done'}>
			<h3>{title}</h3>

			<p>{description}</p>
		</StyledBook>
	);
}

// Book.propTypes
Book.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
};

export default Book;
