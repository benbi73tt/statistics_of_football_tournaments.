import React from 'react';
import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const form = (props) => (
	<form onSubmit={props.MatchingMethod}>
		<h4>Enter the league code </h4>
		<TextField type="text" name="leag" id="standard-basic" label="League" />
		<FormControl>
			<InputLabel htmlFor="age-native-helper">League</InputLabel>
			<NativeSelect
				name="leag1"
				inputProps={{
					id: 'age-native-helper'
				}}
			>
				<option disabled selected>
					Select league
				</option>
				<option value="PL">Premier Liga</option>
				<option value="SA">Seria A</option>
				<option value="BL1">Bundesliga</option>
				<option value="FL1">Ligue 1</option>
				<option value="PD">LaLiga</option>
				<option value="WC">FIFA World Cup</option>
			</NativeSelect>
		</FormControl>
		<Button className="marginRight: theme.spacing(1)" type="submit" variant="contained">
			Get matches
		</Button>
	</form>
);

export default form;
