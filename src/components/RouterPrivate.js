import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavbarSection from './includes/NavbarSection';
import Home from './Home';
import NewQuestion from './includes/NewQuestion';
import QuestionPage from './includes/QuestionPage';
import LeaderBoard from './LeaderBoard';
import NotFoundPage from './NotFoundPage';

class RouterPrivate extends Component {
	render() {
		return (
			<Router>
				<div>
				<NavbarSection />
				<Container>
					<main>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/questions/:id" component={QuestionPage} />
							<Route path="/add" component={NewQuestion} />
							<Route path="/leaderboard" component={LeaderBoard} />
							<Route component={NotFoundPage} />
						</Switch>
					</main>
				</Container>
				</div>
			</Router>
		);
	}
}

export default RouterPrivate;
