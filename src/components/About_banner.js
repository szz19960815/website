import React,{ Component } from 'react';
import '../css/about.css'

class About_banner extends Component{
	render(){
		return(<div className="banner">
			<p data-scroll-reveal="enter top over 2s" data-scroll-reveal-id="2"  data-scroll-reveal-initialized="true">我们不停的翻弄着回忆，却再也找不回那时的自己</p>
			<p data-scroll-reveal="enter left over 2s after 1s" data-scroll-reveal-id="3" data-scroll-reveal-initialized="true">人生，是一场盛大的遇见。若你懂得，就请珍惜。</p>
			<p data-scroll-reveal="enter bottom over 2s after 2s" data-scroll-reveal-id="4" data-scroll-reveal-initialized="true">无论下多久的雨，最后都会有彩虹；无论你多么悲伤，要相信幸福在前方等候.</p>
		</div>)
	}
}

export default About_banner;