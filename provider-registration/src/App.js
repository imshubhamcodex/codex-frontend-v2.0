import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './styles/App.css';
import Stepper from './components/Stepper';
import ProviderTable from './components/ProviderTable';
import ServiceTable from './components/ServiceTable';
import Home from './components/Homepage'


function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact={true} path="/">
						<Home />
					</Route>
					<Route exact={true} path="/process">
						<Stepper />
					</Route>
					<Route exact={true} path="/table">
						<ProviderTable />
					</Route>
					<Route exact={true} path="/s_table">
						<ServiceTable />
					</Route>
				</Switch>
				<br />
				<br />
				<br />
				{/* <ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/process">Stepper</Link>
					</li>
					<li>
						<Link to="/table">PTable</Link>
					</li>
					<li>
						<Link to="/s_table">S_Table</Link>
					</li>
				</ul> */}
			</div>
		</Router>
	);
}

export default App;
