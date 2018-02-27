import React,{ Component } from 'react';
import $ from 'n-zepto';
import {Link} from "react-router"

import t01 from '../img/t01.jpg';

class Home_blog extends Component{
	constructor(props){
		super(props);
		this.state = {
			article:[]
		}
	}
	render(){
		return(<div className="blog" data-scroll-reveal="enter top">
				{
					(this.state.article.slice(0,3)).map((data,index)=>{
					return(<figure key={index}>
					        <ul>
					         <Link to={"/Detail/"+data.id}><i><img src={data.img}/><span>查看详情</span></i></Link>
					        </ul>
					        <p><Link to={"/Detail/"+data.id}>{data.title}</Link></p>
					        <figcaption>{data.cue}</figcaption>
					    </figure>)
					})
				}
			</div>)
	}
	componentDidMount(){
		$.ajax({
			type:"get",
			url:"../static/mock/test.json",
			async:true,
			success:(data)=>{
				this.setState({
					article:data
				})
//				console.log(this.state.article);
			}
		});
	}
}

export default Home_blog;