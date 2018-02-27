import React,{ Component } from 'react';

import '../css/base.css';
import '../css/book.css';

import Saying_book from './Saying_book.js'

class Saying extends Component{
	render(){
		return(<div>
			<h2 className="ctitle">
				<b>留言板</b> 
				<span>你，生命中最重要的过客，之所以是过客，因为你未曾为我停留。</span>
			</h2>
			<Saying_book></Saying_book>
		</div>)
	}
}

export default Saying;