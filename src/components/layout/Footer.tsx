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
							<li>HardSurface</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
						</ul>
					</div>
					<div className="footer-col">
						<div>Info</div>
						<ul>
							<li>HardSurface</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
						</ul>
					</div>
					<div className="footer-col">
						<div>Support</div>
						<ul>
							<li>HardSurface</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
							<li>OrganicAssets</li>
						</ul>
					</div>
				</div>
				<div className="footer-bottom"></div>
			</footer>
		</>
	);
};
