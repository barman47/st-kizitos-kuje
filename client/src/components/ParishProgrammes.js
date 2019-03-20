import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const ParishProgrammes = () => (
	<Fragment>
		<Helmet>
			<title>Parish Programmes | St. Kizito's Catholic Parish, Kuje - Abuja.</title>
		</Helmet>
		<section className="container parish-programmes">
		<h3>Parish <span className="underline">Programmes</span></h3>
			<ul className="collection with-header">
				<li className="collection-header"><h4>Sunday Mass</h4></li>
				<li className="collection-item first"><div>Center<span className="secondary-content">6am, 8am, 10am &amp; 6pm.&nbsp;8:30am (Children Mass)</span></div></li>
				<li className="collection-item"><div>Holy Ghost Gudaba<span className="secondary-content">8:00am</span></div></li>
				<li className="collection-item"><div>St. Anthony's Bamishi<span className="secondary-content">6:30am</span></div></li>
				<li className="collection-item"><div>St. Benedict Adule<span className="secondary-content">10:00am</span></div></li>
				<li className="collection-item"><div>St. Maria Goretti GGSSS<span className="secondary-content">6:00am</span></div></li>
				<li className="collection-header"><h5>Adoration</h5></li>
				<li className="collection-item"><div>Every Thursday<span className="secondary-content">6:00-9:00pm</span></div></li>
				<li className="collection-header"><h5>Gudaba</h5></li>
				<li className="collection-item"><div>Wednesday &amp; Friday<span className="secondary-content">6:00am</span></div></li>
				<li className="collection-header"><h5>Church Wardens</h5></li>
				<li className="collection-item"><div>Third Sunday of the month<span className="secondary-content">1:00pm</span></div></li>
				<li className="collection-item"><div>Zone 5 Mass<span className="secondary-content">6:15am</span></div></li>
				<li className="collection-header"><h5>Laity Council</h5></li>
				<li className="collection-item">Third Sunday of the month</li>
				<li className="collection-header"><h5>CCRN</h5></li>
				<li className="collection-item">Every Wednesday</li>
				<li className="collection-header"><h5>PPC Meetings</h5></li>
				<li className="collection-item">Last Saturday of the month</li>
				<li className="collection-header"><h5>CMO</h5></li>
				<li className="collection-item"><div>Last Saturday of the month<span className="secondary-content">7:00am</span></div></li>
				<li className="collection-header"><h5>CWO</h5></li>
				<li className="collection-item"><div>First Saturday of the month<span className="secondary-content">7:00am</span></div></li>
				<li className="collection-header"><h5>CYON</h5></li>
				<li className="collection-item">First Sunday of the month</li>
				<li className="collection-header"><h5>Infant Baptism</h5></li>
				<li className="collection-item">Third Saturday of the month</li>
				<li className="collection-header"><h5>Benediction</h5></li>
				<li className="collection-item">Begins with the Rosary</li>
				<li className="collection-header"><h5>Confession</h5></li>
				<li className="collection-item">Every Saturday after Mass</li>
				<li className="collection-header"><h5>Parish Priest Office</h5></li>
				<li className="collection-item"><div>Tuesdays &amp; Wednesdays <span className="secondary-content">9:00am - 1:00pm</span></div></li>
				<li className="collection-header"><h5>Catechist Office</h5></li>
				<li className="collection-item"><div>Tuesday - Friday<span className="secondary-content">8:00am - 2:00pm</span></div></li>
				<li className="collection-header"><h5>Lectors Practice</h5></li>
				<li className="collection-item">Every Saturday after Mass</li>
				<li className="collection-header"><h5>Parish Vigil</h5></li>
				<li className="collection-item">Last Friday of the Month</li>
			</ul>
		</section>
	</Fragment>
);

export default ParishProgrammes;