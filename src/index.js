import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/Home.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Route,Router,browserHistory,IndexRoute} from "react-router"

import Home from './components/Home.js'
import About from './components/About.js'
import Saying from './components/Saying.js'
import Life from './components/Life.js'
import Detail from './components/Detail.js'

ReactDOM.render(<Router history={browserHistory}>
					<Route path="/" component={App}>
						<IndexRoute component={Home}></IndexRoute>
						<Route path="/Home" component={Home}></Route>
						<Route path="/About" component={About}></Route>
						<Route path="/Life" component={Life}></Route>
						<Route path="/Saying" component={Saying}></Route>
						<Route path="/Detail/:id" component={Detail}></Route>
					</Route>
				</Router>, document.getElementById('root'));
registerServiceWorker();
