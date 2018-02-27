import React,{ Component } from 'react'
import $ from 'n-zepto'
import {Link} from "react-router"

import '../css/Detail.css'

class Detail extends Component{
	constructor(props){
		super(props);
		this.state = {
			text:{},
			back:"<<返回首页"
		}
	}
	render(){
		return(<div className='textContent'>
			<div><Link to='/'>{this.state.back}</Link></div>
			<h4>{this.state.text.title}<span>{this.state.text.time}</span></h4>
			<p className='cue'>{this.state.text.cue}</p>
			<img src={this.state.text.img} />
			<div id='txt'></div>
		</div>)
	}
	componentDidMount(){
		$.ajax({
			type:"get",
			url:"../static/mock/test.json",
			async:true,
			success:(data)=>{
				this.setState({
					text:data[this.props.params.id - 1]
				})
//				console.log(data[this.props.params.id - 1])
//				console.log(this.state.text)
				
				$.ajax({
					type:"get",
					url:this.state.text.content,
					async:true,
					success:(txt)=>{
						console.log(txt)
						$("#txt").html(txt)
					}
				})
				
				
			}
		});
		
	}
}

export default Detail;