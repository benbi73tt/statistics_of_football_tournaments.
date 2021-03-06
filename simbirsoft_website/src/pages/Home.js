import { Carousel } from 'react-bootstrap';
import React from 'react';

export default function Home() {
	return (
		<Carousel>
			<Carousel.Item style={{ height: '160px' }}>
				<img
					className="d-block w-100"
					src="http://prosoccerandfitness.com/images/profitness.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Sports statistics</h3>
					<p>All matches for seasons, all teams, all leagues and much more ...</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{ height: '160px' }}>
				<img
					className="d-block w-100"
					src="https://sun1-92.userapi.com/sA7UPJQBknCb_pzVl_S3_9NIhwLTtPsOan57eg/IEcMUU4QAqY.jpg"
					alt="second slide"
				/>
				<Carousel.Caption>
					<h3>Спортивная статистика</h3>
					<p>Все матчи за сезоны, все команды, все лиги и еще многое другое...</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{ height: '160px' }}>
				<img className="d-block w-100" src="https://muaither.com/img/bg.jpg" alt="First slide" />
				<Carousel.Caption>
					<h3>Спортивная статистика</h3>
					<p>Все матчи за сезоны, все команды, все лиги и еще многое другое...</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
