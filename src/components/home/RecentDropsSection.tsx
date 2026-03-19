import { Link } from "react-router";
import { SectionTag } from "../ui/SectionTag";
import { SectionTitle } from "../ui/SectionTitle";
import { RiArrowRightLine } from "react-icons/ri";
import type { Product } from "../../types/Product";
import { ProductCard } from "../shop/ProductCard";

interface RecentDropsProps {
	items: Product[];
}

export const RecentDropsSection = ({ items }: RecentDropsProps) => {
	return (
		<>
			<section className="recent-drops">
				<div className="section-header">
					<div>
						<SectionTag color={`var(--accent-red)`} text={"Featured Models"} />
						<SectionTitle text={"Recent drops"} />
					</div>
					<Link to="/shop" className="section-link">
						View all products
						<RiArrowRightLine />
					</Link>
				</div>
				<div className="recent-drops-grid">
					{items.map((item, i) => (
						<ProductCard
							key={i}
							product={item}
							className={i === 0 ? "featured" : ""}
						/>
					))}
				</div>
			</section>
		</>
	);
};
