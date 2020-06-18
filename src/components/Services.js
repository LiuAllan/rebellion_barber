import React, { useEffect }from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StyledServices from './styles/StyledServices';
import { Card, CardGroup } from 'react-bootstrap';

import focus from '../images/focus.jpg';
import beard from '../images/beard.jpg';
import photo5 from '../images/photo5.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import tools from '../images/tools.jpg';

const Services = () => (

	useEffect(() => {
		Aos.init({ duration: 2000 });
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

			<div className="services-body">

				<div style={{ "overflow": "hidden" }}>
					<CardGroup data-aos="fade-up">
					  <Card>
					    <Card.Img variant="top" src={focus} />
					    <Card.Body>
					      <Card.Title>Regular Haircut - 22</Card.Title>
					      <Card.Text>
					        The standard. A personalized haircut tailored to your liking and styled with your favourite product.
					      </Card.Text>
					    </Card.Body>
					  </Card>



					  <Card>
					    <Card.Img variant="top" src={photo4} />
					    <Card.Body>
					      <Card.Title>Senior Haircut - 17</Card.Title>
					      <Card.Text>
					       Same as the regular one, but for our more experienced clientele. 65+.
					      </Card.Text>
					    </Card.Body>
					  </Card>

					  <Card>
					    <Card.Img variant="top" src={photo3} />
					    <Card.Body>
					      <Card.Title>Child Haircut - 18</Card.Title>
					      <Card.Text>
					        Haircuts for future leaders! 12 & Under.
					      </Card.Text>
					    </Card.Body>
					  </Card>
					</CardGroup>

					<CardGroup data-aos="fade-up">
					  <Card>
					    <Card.Img variant="top" src={photo5} />
					    <Card.Body>
					      <Card.Title>Buzzcut - 17</Card.Title>
					      <Card.Text>
					        Maximum of 2 lengths, clippers only. May we suggest the ol’ 2X4?
					      </Card.Text>
					    </Card.Body>
					  </Card>

					  <Card>
					    <Card.Img variant="top" src={beard} />
					    <Card.Body>
					      <Card.Title>Beard Trim - 15</Card.Title>
					      <Card.Text>
					       Carefully sculpted beards by our experienced team of face hair specialists, Finished with Rebellion Beard Oil.
					      </Card.Text>
					    </Card.Body>
					  </Card>

					  <Card>
					    <Card.Img variant="top" src={tools} />
					    <Card.Body>
					      <Card.Title>Beard Buzz - 10</Card.Title>
					      <Card.Text>
					        It’s a buzzcut for your beard! Nice and simple. One length all over, lined up, and finished with Rebellion Beard Oil.
					      </Card.Text>
					    </Card.Body>
					  </Card>
					</CardGroup>
				</div>


			</div>
		</div>
	</StyledServices>
);

export default Services;