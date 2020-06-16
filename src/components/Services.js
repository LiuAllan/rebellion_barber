import React, { useEffect }from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StyledServices from './styles/StyledServices';

const Services = () => (

	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []),

	<StyledServices>
		<div className="services" id="services">
			<div className="services-title">
				<h1 
					className="services-title-inner"
					data-aos="fade"
				>
						Services
				</h1>
			</div>
		</div>
	</StyledServices>
);

export default Services;