import React,{ Component } from 'react';
import Home_list from './Home_list.js'
import Home_blog from './Home_blog.js'


class Home extends Component{
	render(){
		return(<div>
					<Home_blog></Home_blog>
					<Home_list></Home_list>
		</div>)
	}
}

export default Home;