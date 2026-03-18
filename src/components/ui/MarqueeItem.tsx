interface MarqueeProps {
	text: string;
}

export const MarqueeItem = ({ text }: MarqueeProps) => {
	return (
		<>
			<div className="marquee-item">{text}</div>
		</>
	);
};
