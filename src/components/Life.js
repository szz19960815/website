import React,{ Component } from 'react';
import t03 from '../img/t03.jpg'
import $ from 'n-zepto'
import {Link} from "react-router"

class Life extends Component{
	constructor(props){
		super(props);
		this.state = {
			article:[]
		}
	}
	render(){
		return(<div>
			<ul className="cbp_tmtimeline">
				{
					this.state.article.map((data,index)=>{
						return (<li key={index}>
							<time className="cbp_tmtime"><span>{data.time}</span> <span>2017</span></time>
							<div className="cbp_tmicon"></div>
							<div className="cbp_tmlabel" data-scroll-reveal="enter right over 1s" >
								<h2>{data.title}</h2>
								 <p><span className="blogpic"><Link to={'/Detail/'+data.id}><i><img src={data.img} /></i></Link></span>{data.cue}</p>
				                 <Link to={'/Detail/'+data.id} ><i className="readmore">全文阅读</i></Link>
							</div>
						</li>)
					})
				}
			</ul>
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

export default Life;