import React from 'react';
import { TextField, Button } from '@material-ui/core';

const form = (props) => (
	<form onSubmit={props.MatchingMethod}>
		<TextField type="text" name="team" id="standard-basic" label="Team" />
		<Button ps="5" type="submit" variant="contained">
			Get matches
		</Button>
	</form>
);

export default form;
