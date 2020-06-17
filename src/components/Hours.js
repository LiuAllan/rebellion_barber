import React, { useEffect }from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StyledHours from './styles/StyledHours';
import outside from '../images/outside1.jpg';
import environment from '../images/environment1.jpg';

const Hours = () => (
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []),

	<StyledHours>
		<div className="hours" id="hours">
			<div className="hours-title">
				<h1 
					className="hours-title-inner"
					data-aos="fade"
				>
						Hours
				</h1>
			</div>

			<div className="hours-body">
				<div className="info">
					<h3 className="time" data-aos="fade">We are open 9am-5pm every day of the week, except holidays!</h3>
					<div className="info-content">

						<img
							src={outside}
							alt=""
							data-aos="fade-right"
							data-aos-duration="1000"
						/>

						<div 
							className="info-row1"
							data-aos="fade-left"
							data-aos-duration="1000"
						>
							<h3>
								We are a <b>walk-in</b> only shop.
							</h3>
							<p>
								No appointment necessary!<br />
								Come in anytime you like, but do your best to get here before 4:30pm.
							</p>
						</div>

						<div 
							className="info-row2" 
							data-aos="fade-right"
						>
							<h3>
								<b>Cash only</b> payment
							</h3>
							<p>
								We are accepting e-transfers until COVID-19 protocols are lifted.
							</p>
						</div>

						<img
							src={environment}
							alt=""
							data-aos="fade-left"
						/>

						<div className="end">
							<h3>Feel free to wait for your favourite barber, we don’t take it personally!</h3>
							<p>If you have a hard time describing what you’d like for your haircut, bring a couple photos from the internet and our experienced barbers will take it from there!</p>
						</div>	
					</div>

				</div>

			</div>
		</div>
	</StyledHours>

);

export default Hours;