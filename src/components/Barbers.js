import React, { useEffect }from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StyledBarbers from './styles/StyledBarbers';
import stephen from '../images/stephen.jpg';
import josh from '../images/josh.jpg';
import michael from '../images/michael.jpg';
import kenni from '../images/kenni.jpg';

const Barbers = () => (
	//init Aos - Global animations parameters
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}),
		<StyledBarbers>
			<div className="barbers" id="barbers">
				<div className="barbers-title">
					<h1 
						className="barbers-title-inner"
						data-aos="fade"
					>
							Meet the Team
					</h1>
				</div>
				<div className="barbers-body">
					<div className="m-grid">
						<div 
							data-aos="fade-left"
							className="Michael"
						>
							<img src={michael} alt="" style={{ "width": "100%" }} />
							<div className="Michael-container">
								<h2>Michael</h2>
								<p>Wednesday, Thursday, Friday, Saturday, Sunday</p>
							</div>
						</div>
					</div>
					
					<div className="j-grid">
						<div className="Josh" data-aos="fade-right">
							<img src={josh} alt="" style={{ "width": "100%" }} />
							<div className="Josh-container">
								<h2>Josh</h2>
								<p>Wednesday, Thursday, Friday, Saturday, Sunday</p>
							</div>
						</div>
					</div>

					<div className="s-grid">
						<div className="Stephen" data-aos="fade-left">
							<img src={stephen} alt="" style={{ "width": "100%" }} />
							<div className="Stephen-container">
								<h2>Stephen</h2>
								<p>Monday, Tuesday, Thursday, Friday, Saturday</p>
							</div>
						</div>
					</div>

					<div className="k-grid">
						<div 
							data-aos="fade-right"
							className="Kenni"
						>
							<img src={kenni} alt="" style={{ "width": "100%" }} />
							<div className="Kenni-container">
								<h2>Kenni</h2>
								<p>Monday, Tuesday, Wednesday, Thursday, Friday</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</StyledBarbers>
);

export default Barbers;