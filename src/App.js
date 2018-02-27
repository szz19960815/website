import React, { Component } from 'react';
import './App.css';
import Logo from './img/logo.png'

import {Link} from "react-router"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
					<div className="logo" data-scroll-reveal="enter right over 1s">
						<a href="/"><img src={Logo} /></a>
					</div>
					<nav className="topnav" data-scroll-reveal="enter bottom over 1s after 1s">
						<Link to="/Home"><i><span>首页</span><span className="en">Home</span></i></Link>
						<Link to="/About"><i><span>关于我</span><span className="en">About</span></i></Link>
						<Link to="/Life"><i><span>慢生活</span><span className="en">Life</span></i></Link>
						<Link to="/Saying"><i><span>留言</span><span className="en">Saying</span></i></Link>
						<Link to={'/Detail/'}></Link>
					</nav>
				</header>
				<article>
					<div className="container">
						<div>{this.props.children}</div>
					</div>
			</article>
				<footer>
					Design by SZZ <a href="/">1316225239@qq.com</a>
				</footer>
      </div>
    );
  }
}

export default App;
