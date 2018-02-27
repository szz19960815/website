import React,{ Component } from 'react';

import '../css/base.css';
import '../css/book.css';
import '../css/Saying_book.css';
import '../js/SayingBook.js'
import girl from '../img/girl.jpg'

class Saying_book extends Component{
	
	render(){
		return(
			<div className="gbook">
		      <div className="about">
			        <div id="fountainG">
			          <li></li>
			          <li></li>
			          <li></li>
			          <li></li>
			          <li></li>
			          <li></li>
			          <li></li>
			          <li></li>
			        </div>
			        <div className="about_girl"><span><a href="/"><img src={girl}/></a></span>
			          <p>当您驻足停留过，从此便注定我们的缘分。站在时间的尽头，我们已是朋友，前端的路上我再也不用一个人独自行走。</p>
			        </div>
					<div className="bookList">
						<div id='loginBtn'>
							登录
						</div>
						<img className="header-skin" src="https://0d077ef9e74d8.cdn.sohucs.com/qIipIYK_gif"  />
						<div className="comment">
							<textarea id="comment_text"></textarea>
						</div>
						<div id="subBtn">
							<div id="biaoqing">☺</div>
							<button id="subText">评论</button>
						</div>
						<div id="commentList">
							<ul>
								<li>评论列表</li>
							</ul>
							<div id="tip">
								<span></span>
								<div>热门评论</div>
							</div>
							<ul>
								
							</ul>
						</div>
					</div>
				
				</div>
			</div>

		)
	}
	componentDidMount(){
	}
}

export default Saying_book;