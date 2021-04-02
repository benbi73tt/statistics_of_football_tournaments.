import React from 'react';

const form = (props) => (
	<form onSubmit={props.MatchingMethod}>
		<input type="text" name="team" placeholder="Лига" />
		<button>Получить Матчи</button>
	</form>
);

export default form;
