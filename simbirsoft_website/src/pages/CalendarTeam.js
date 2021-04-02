import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FormT from '../Components/FormT';
import winner from '../img/winner.png';
import draw from '../img/free-icon-not-equal-3898212.png';

const config = {
	method: 'GET',
	headers: { 'X-Auth-Token': '716110be467a449db37bde0affb10e9c' }
};

export default class CalendarTeam extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	gettingMatching = async (event) => {
		//async чтобы всё работало ассинхронно(без перезагрузки)
		event.preventDefault();
		var team = event.target.elements.team.value;

		if (team) {
			const api_url = await fetch(`https://api.football-data.org/v2/teams/${team}/matches`, config);
			const data = await api_url.json();
			console.log(data.matches);

			if (data.matches !== undefined) {
				this.setState({
					items: data.matches,
					error: undefined
				});
			} else {
				this.setState({
					items: [],
					error: (
						<h5>
							<h4>Invalid team ID,</h4>please try again
						</h5>
					)
				});
			}
		} else {
			this.setState({
				items: [],
				error: <h4>Enter the team ID</h4>
			});
		}
	};
	render() {
		const { error } = this.state;
		if (error) {
			return (
				<Container className="cont " style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
					<Row>
						<Col md="9">
							<FormT MatchingMethod={this.gettingMatching} />
							<span>{error}</span>
						</Col>
					</Row>
				</Container>
			);
		} else {
			const list = this.state.items.map((item, index) => {
				return (
					<tr key={item.id}>
						<th scope="row">{index + 1} </th>
						<td>{item.utcDate.replace(/[a-zа-яё]/gi, ' ')}</td>
						<td>
							{item.homeTeam.name}
							{item.score.winner === 'HOME_TEAM' ? <img alt="winner" src={winner} /> : ''}
						</td>
						<td> {item.score.winner === 'DRAW' ? <img alt="draw" src={draw} /> : ''}</td>
						<td>
							{item.awayTeam.name}
							{item.score.winner === 'AWAY_TEAM' ? <img alt="winner" src={winner} /> : ''}
						</td>
					</tr>
				);
			});
			return (
				<Container className="cont " style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
					<Row>
						<Col md="9">
							<FormT MatchingMethod={this.gettingMatching} />
							<table class="table table-hover">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Date and Time</th>
										<th scope="col">HomeTeam</th>
										<th scope="col" />
										<th scope="col">AwayTeam</th>
									</tr>
								</thead>
								<tbody>{list}</tbody>
							</table>
						</Col>
					</Row>
				</Container>
			);
		}
	}
}
