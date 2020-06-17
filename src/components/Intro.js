import React from 'react';
import styled from 'styled-components';
import BannerAnim from 'rc-banner-anim';
// import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
// import 'rc-queue-anim/assets/index.css';
// import 'rc-tween-one/assets/index.css';
import video from '../images/Intro.mp4'

const StyledIntro = styled.div`
	.intro {
		height: 100vh;
	}

	.banner-anim {
		position: relative;
		overflow: hidden;
		height: 100%;
	}

	video {
		position: relative;  
	    width: auto; 
	    height: 100vh; 
	    object-fit: contain;
	}
`;

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

const Intro = () => {
	return(
		<StyledIntro>
			<div className="intro" id="home">
			    <BannerAnim>
			      <Element key="element1"
			        prefixCls="banner-user-elem"
			      >
			        <BgElement key="bg" className="bg">
			          <video muted loop autoPlay>
			            <source src={video} type="video/mp4" />
			          </video>
			        </BgElement>
			      </Element>
			    </BannerAnim>
			</div>
		</StyledIntro>
	);

}

export default Intro;