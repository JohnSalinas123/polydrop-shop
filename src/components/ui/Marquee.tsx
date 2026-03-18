/* Modification of MagicUI marquee */
import { type ComponentPropsWithoutRef } from "react";
import { MarqueeItem } from "./MarqueeItem";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
	className?: string;
	items: {
		text: string;
	}[];
	reverse?: boolean;
	pauseOnHover?: boolean;
	vertical?: boolean;
	repeat?: number;
}

export function Marquee({
	className,
	items,
	reverse = false,
	pauseOnHover = true,
	vertical = false,
	repeat = 4,
	...props
}: MarqueeProps) {
	return (
		<div
			{...props}
			className={`marquee-root ${vertical ? "marquee-vertical" : "marquee-horizontal"} ${className ?? ""}`}
		>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={[
							"marquee-inner",
							vertical
								? "marquee-inner--vertical"
								: "marquee-inner--horizontal",
							pauseOnHover ? "marquee-pause-on-hover" : "",
							reverse ? "marquee-reverse" : "",
						].join(" ")}
					>
						{items.map((item, i) => (
							<MarqueeItem key={i} text={item.text} />
						))}
					</div>
				))}
		</div>
	);
}
