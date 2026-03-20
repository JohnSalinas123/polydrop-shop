import { RiArrowRightLine } from "react-icons/ri";
import { SectionTag } from "../ui/SectionTag";
import { SectionTitle } from "../ui/SectionTitle";

export const NewsletterSection = () => {
	return (
		<>
			<section className="newsletter-section">
				<div className="newsletter-text">
					<SectionTag color={"var(--accent-red)"} text={"Stay Updated"} />
					<SectionTitle text="New Drops, First" as={"h3"} fontSize={"40px"} />
					<p className="newsletter-sub">
						Get notified when new packs land. No spam, ever
					</p>
				</div>
				<div className="newsletter-form">
					<input
						id="email-input"
						className="newsletter-input"
						type="email"
						placeholder="your@email.com"
					/>
					<button className="btn-primary">
						Subscribe <RiArrowRightLine />
					</button>
				</div>
			</section>
		</>
	);
};
