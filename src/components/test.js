import React,{ Component } from 'react';
import $ from 'n-zepto';

class Test extends Component{
	
	render(){
		
		return(<div>
			<h2>这是测试部分</h2>
		</div>)
	}
	componentWillMount(){
		$.ajax({
			type:"get",
			url:"../mock/test.json",
			async:true,
			success:function(data){
				console.log(data);
			}
		});
	}
}

export default Test;
