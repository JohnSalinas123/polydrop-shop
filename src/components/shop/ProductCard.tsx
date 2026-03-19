import type { CSSProperties } from "react";
import type { Product } from "../../types/Product";
import { BiCartAdd } from "react-icons/bi";
import { formatPrice, getDiscount } from "../../lib/utils";

interface ProductCardProps {
	product: Product;
	style?: CSSProperties;
	className?: string;
}

export const ProductCard = ({
	product,
	style,
	className,
}: ProductCardProps) => {
	const getActivePrice = (product: Product) => {
		return product.salePrice ?? product.price;
	};

	const getBadge = (product: Product) => {
		if (product.salePrice)
			return {
				label: `-${getDiscount(product.price, product.salePrice)}%`,
				class: "badge-sale",
			};
		if (product.isNew) return { label: "New", class: "badge-new" };
		if (product.isHot) return { label: "Hot", class: "badge-hot" };
		return null;
	};

	const badge = getBadge(product);

	return (
		<>
			<div className={`product-card ${className ?? ""}`} style={style}>
				<div className="product-image">
					<img src={product.imageURL} />
					{badge && (
						<span className={`product-badge ${badge.class}`}>
							{badge.label}
						</span>
					)}
				</div>
				<div className="product-info">
					<div className="product-category">{product.category}</div>
					<div className="product-name">{product.name}</div>
					<div className="product-specs">
						{product.specs.map((item, i) => (
							<div key={i}>{item}</div>
						))}
					</div>
					<div className="product-footer">
						<div className="product-price">
							{product.salePrice && (
								<span className="old-price">{formatPrice(product.price)}</span>
							)}
							{formatPrice(getActivePrice(product))}
						</div>
						<button className="product-cart-button">
							<BiCartAdd />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
