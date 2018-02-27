import React,{ Component } from 'react';

import About_banner from './About_banner.js'
import About_memory from './About_memory.js'
import About_me from './About_me.js'

class About extends Component{
	render(){
		return(<div>
			<About_banner></About_banner>
			<About_memory></About_memory>
			<About_me></About_me>
		</div>)
	}
}

export default About;