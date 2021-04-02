import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@material-ui/core';

const config = {
	method: 'GET',
	headers: { 'X-Auth-Token': '716110be467a449db37bde0affb10e9c' }
};

export default class leag extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			items: [],
			filterItems: [],
			check: ''
		};
	}

	gettingMatch = async (event) => {
		//async чтобы всё работало ассинхронно(без перезагрузки)
		event.preventDefault();

		const api_url = await fetch(`http://api.football-data.org/v2/competitions/`, config);
		const data = await api_url.json();
		console.log(data.competitions);
	};
	componentDidMount() {
		fetch(`http://api.football-data.org/v2/competitions/`, config).then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					items: result.competitions,
					filterItems: result.competitions
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		);
	}
	filted = (event) => {
		this.setState({
			check: event.target.value
		});
		let filt = this.state.items.filter((item) => {
			return item.name.toLowerCase().search(this.state.check.toLowerCase()) !== -1;
		});
		this.setState({
			filterItems: filt
		});
	};

	render() {
		const { error, isLoaded, filterItems } = this.state;
		if (error) {
			return <h1>Error {error.message}</h1>;
		} else if (!isLoaded) {
			return <h1>Loading...</h1>;
		} else {
			return (
				<Container className="cont " style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
					<Row>
						<Col mt="5" pt="5" md="6">
							<form>
								<TextField id="standard-basic" label="Find a team" onChange={this.filted} />
								{console.log(this.state.check)}
							</form>
						</Col>
						<Col md="5">
							<ul>
								{filterItems.map((item) => (
									<li key={item.id}>
										{item.emblemUrl === null ? (
											''
										) : (
											<img alt="logo" width={'20px'} height={'20px'} src={item.emblemUrl} />
										)}
										{item.name} <p>League code:{item.code === null ? '___' : item.code}</p>
									</li>
								))}
							</ul>
						</Col>
					</Row>
				</Container>
			);
		}
	}
}
