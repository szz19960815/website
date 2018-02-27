import React,{ Component } from 'react';
import '../css/about.css'

class About_memory extends Component{
	render(){
		return(
			<div className="memorial_day">
		      <div className="time_axis"></div>
		      <ul>
		        <li className="n1"><a href="/">进入大学</a>
		          <div className="dateview">2014-8-30</div>
		        </li>
		        <li className="n2"><a href="/">加入乒乓球社</a>
		          <div className="dateview">2015-4</div>
		        </li>
		         <li className="n3"><a href="/">获校园辩论赛冠军</a>
		          <div className="dateview">2015-11-16</div>
		        </li>
		        <li className="n4"><a href="/">加入百胜集团</a>
		          <div className="dateview">2016-04</div>
		        </li>
		        <li className="n5"><a href="/">来到成都</a>
		          <div className="dateview">2017-09-04</div>
		        </li>
		      </ul>
		    </div>
		)
	}
}

export default About_memory;