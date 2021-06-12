import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './styles/App.css';
import Stepper from './components/Stepper';
import ProviderTable from './components/ProviderTable';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact={true} path="/">
						<h1>This is home</h1>
					</Route>
					<Route exact={true} path="/process">
						<Stepper />
					</Route>
					<Route exact={true} path="/table">
						<ProviderTable />
					</Route>
				</Switch>
				<br />
				<br />
				<br />
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/process">Stepper</Link>
					</li>
					<li>
						<Link to="/table">PTable</Link>
					</li>
				</ul>
			</div>
		</Router>
	);
}

export default App;
