import { IoMdCheckmark } from "react-icons/io";
import { SectionTag } from "../ui/SectionTag";

export const AboutBannerSection = () => {
	return (
		<>
			<section className="about-section">
				<div className="about-grid-bg"></div>
				<div className="about-inner">
					<div className="about-header">
						<SectionTag color={"var(--accent-red)"} text={"About the studio"} />
						<div className="about-title">
							Craft built
							<br />
							For <span>creators</span>
						</div>
					</div>
					<div className="about-sub">
						<p className="about-description">
							Polydrop is a one-person studio focused on clean, game-ready low
							poly assets. Every model is handcrafted with indie developers,
							hobbyists, and students in mind — affordable, well-structured, and
							ready to drop straight into your project.
						</p>
						<ul className="about-points">
							<li>
								<span className="point-check">
									<IoMdCheckmark />
								</span>
								Clean low poly topology, game-engine ready
							</li>
							<li>
								<span className="point-check">
									<IoMdCheckmark />
								</span>
								Multiple formats included - GLB, FBX, OBJ
							</li>
							<li>
								<span className="point-check">
									<IoMdCheckmark />
								</span>
								Blender native, Unity and Unreal compatible
							</li>
							<li>
								<span className="point-check">
									<IoMdCheckmark />
								</span>
								Commercial license included with every purchase
							</li>
							<li>
								<span className="point-check">
									<IoMdCheckmark />
								</span>
								Lifetime access — redownload anytime from your library
							</li>
						</ul>
						<div className="about-buttons">
							<button className="btn-primary">Shop now</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
