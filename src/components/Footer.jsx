import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
const Footer = () => {
	return (
		<footer className="flex main-footer">
			<div className="flex footer-section_1">
				<div className="flex flex-col footer-list">
					<h4>About</h4>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">Shop</a>
						</li>
						<li>
							<a href="/">Our Story</a>
						</li>
						<li>
							<a href="/">Blogs</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col footer-list">
					<h4>Help</h4>
					<ul>
						<li>
							<a href="/">FAQs</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col footer-list contacts">
					<h4>Contact</h4>
					<ul>
						<li>Phone:</li>
						{/* <li style="color: #dfdfdf">[phone number]</li> */}
						<li>Email:</li>
						{/* <li style="color: #dfdfdf">[email]</li> */}
					</ul>
				</div>
				<div className="flex flex-col footer-list contacts1">
					<h4>Contact</h4>
					<ul>
						<div>
							<li>Phone:</li>
							{/* <li style="color: #dfdfdf">[phone number]</li> */}
						</div>
						<div>
							<li>Email:</li>
							{/* <li style="color: #dfdfdf">[email]</li> */}
						</div>
					</ul>
				</div>
			</div>
			<div className="flex flex-col footer-section">
				<div className="flex flex-col subscribe">
					<h4>Receive New Promotions</h4>
					<p>Enter email to get regular updates</p>
					<div className="flex subscribe-form">
						<input type="email" placeholder="Input your email" />
						<button className="subscribe-button">Subscribe</button>
					</div>
				</div>
				<div className="flex social-icons">
					<BsFacebook></BsFacebook>
					<BsLinkedin></BsLinkedin>
					<BsTwitter></BsTwitter>
					<BsInstagram></BsInstagram>
				</div>
				<div className="flex copyright">
					&copy; 2023 HAM, Inc. &bull;
					<a href="/"> Privacy</a> &bull;
					<a href="/"> Terms</a> &bull;
					<a href="/"> Sitemap</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
