import { BiCube } from "react-icons/bi";

export const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer-grid">
					<div className="footer-brand">
						<div className="footer-logo">
							<BiCube />
							Polydrop
						</div>
						<p className="footer-tagline">
							Affordable low poly assets for indie developers, game jammers, and
							hobbyists. Built in Blender, ready for Unity and Unreal.
						</p>
						{/* Planned: social links */}
					</div>
					<div className="footer-col">
						<div>Models</div>
						<ul>
							<li>Hard Surface</li>
							<li>Organic Assets</li>
							<li>Sci-Fi Packs</li>
							<li>Architecture</li>
							<li>Bundles</li>
						</ul>
					</div>

					<div className="footer-col">
						<div>Support</div>
						<ul>
							<li>FAQ</li>
							<li>License Guide</li>
							<li>Refund Policy</li>
							<li>Contact</li>
						</ul>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="footer-copy">© 2026 Polydrop Studio — All rights reserved</div>
					<div className="footer-legal">
						<button>Privacy Policy</button>
						<button>Terms of Service</button>
						<button>Cookie Settings</button>
					</div>
				</div>
			</footer>
		</>
	);
};
