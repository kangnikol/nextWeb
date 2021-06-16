import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		AOS.init({});
	}, []);
	return (
		<div className="aboutRoot">
			<div className="container">
				<div className="row">
					<div className="col aboutCol">
						<h1>Who Are We</h1>
					</div>
					<div className="col aboutCol" data-aos="fade-down">
						<p>
							Cloud bread cardigan messenger bag raw denim swag drinking
							vinegar. Pok pok authentic fashion axe, vegan venmo leggings
							raclette tousled twee tattooed. Banh mi humblebrag hammock tacos
							fashion axe aesthetic vegan sustainable taiyaki thundercats jean
							shorts tousled cloud bread waistcoat kogi. Banh mi humblebrag
							hammock tacos fashion axe aesthetic vegan sustainable taiyaki
							thundercats jean shorts tousled cloud bread waistcoat kogi. Cloud
							bread cardigan messenger bag raw denim swag drinking vinegar. Pok
							pok authentic fashion axe, vegan venmo leggings raclette tousled
							twee tattooed.
						</p>
						<div className="row" data-aos="fade-left">
							<div className="col">
								<p>Strategy</p>
								<ul class="list-group">
									<li className="">Digital Strategy</li>
									<li className="">Content Strategy</li>
									<li className="">Responsive Development</li>
									<li className="">Web Design</li>
									<li className="">Motion Design</li>
								</ul>
							</div>
							<div className="col">
								<p>Strategy</p>
								<ul class="list-group">
									<li className="">An item</li>
									<li className="">A second item</li>
									<li className="">A third item</li>
									<li className="">A fourth item</li>
									<li className="">And a fifth one</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col aboutCol">
						<h1 data-aos="fade-up">What We Do</h1>
					</div>
					<div className="col">
						<b>Front End Development</b>
						<div className="col">
							<p>
								Lomo dreamcatcher bushwick gastropub swag. Hammock sriracha
								paleo, iPhone swag af flexitarian hella pickled neutra pug.
								Trust fund chicharrones iPhone stumptown chia. Godard 3 wolf
								moon tacos try-hard. Shoreditch cliche marfa godard gochujang
								kinfolk hoodie you probably haven't heard of them echo park DIY
								tilde PBR&B.
							</p>
						</div>
						<hr data-aos="fade-right" />
						<b>Front End Development</b>
						<div className="col">
							<p>
								Lomo dreamcatcher bushwick gastropub swag. Hammock sriracha
								paleo, iPhone swag af flexitarian hella pickled neutra pug.
								Trust fund chicharrones iPhone stumptown chia. Godard 3 wolf
								moon tacos try-hard. Shoreditch cliche marfa godard gochujang
								kinfolk hoodie you probably haven't heard of them echo park DIY
								tilde PBR&B.
							</p>
						</div>
						<hr data-aos="fade-right" />
						<b>Front End Development</b>
						<div className="col">
							<p>
								Lomo dreamcatcher bushwick gastropub swag. Hammock sriracha
								paleo, iPhone swag af flexitarian hella pickled neutra pug.
								Trust fund chicharrones iPhone stumptown chia. Godard 3 wolf
								moon tacos try-hard. Shoreditch cliche marfa godard gochujang
								kinfolk hoodie you probably haven't heard of them echo park DIY
								tilde PBR&B.
							</p>
						</div>
						<hr data-aos="fade-right" />
						<b>Front End Development</b>
						<div className="col">
							<p>
								Lomo dreamcatcher bushwick gastropub swag. Hammock sriracha
								paleo, iPhone swag af flexitarian hella pickled neutra pug.
								Trust fund chicharrones iPhone stumptown chia. Godard 3 wolf
								moon tacos try-hard. Shoreditch cliche marfa godard gochujang
								kinfolk hoodie you probably haven't heard of them echo park DIY
								tilde PBR&B.
							</p>
						</div>
						<hr data-aos="fade-right" />
						<b>Front End Development</b>
						<div className="col">
							<p>
								Lomo dreamcatcher bushwick gastropub swag. Hammock sriracha
								paleo, iPhone swag af flexitarian hella pickled neutra pug.
								Trust fund chicharrones iPhone stumptown chia. Godard 3 wolf
								moon tacos try-hard. Shoreditch cliche marfa godard gochujang
								kinfolk hoodie you probably haven't heard of them echo park DIY
								tilde PBR&B.
							</p>
						</div>
						<hr data-aos="fade-right" />
					</div>
				</div>
				<div className="row">
					<div className="col aboutCol">
						<h1>Who Are We</h1>
					</div>
					<div className="col aboutCol" data-aos="fade-down">
						<div className="row" data-aos="fade-left">
							<div className="col">
								<p>Strategy</p>
								<ul class="list-group">
									<li className="">An item</li>
									<li className="">A second item</li>
									<li className="">A third item</li>
									<li className="">A fourth item</li>
									<li className="">And a fifth one</li>
								</ul>
							</div>
							<div className="col">
								<p>Strategy</p>
								<ul class="list-group">
									<li className="">An item</li>
									<li className="">A second item</li>
									<li className="">A third item</li>
									<li className="">A fourth item</li>
									<li className="">And a fifth one</li>
								</ul>
							</div>
						</div>
						<div className="row" data-aos="fade-left">
							<div className="col">
								<p>Strategy</p>
								<ul class="list-group">
									<li className="">An item</li>
									<li className="">A second item</li>
									<li className="">A third item</li>
									<li className="">A fourth item</li>
									<li className="">And a fifth one</li>
								</ul>
							</div>
							<div className="col">
								<p>Strategy</p>
								<ul class="list-group">
									<li className="">An item</li>
									<li className="">A second item</li>
									<li className="">A third item</li>
									<li className="">A fourth item</li>
									<li className="">And a fifth one</li>
								</ul>
							</div>
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default About;
