interface SectionTagProps {
	color: string;
	text: string;
}

export const SectionTag = ({ color, text }: SectionTagProps) => {
	return (
		<>
			<div className="slide-tag" style={{ color: color }}>
				<span
					className="slide-tag-line"
					style={{ backgroundColor: color }}
				></span>
				{text}
			</div>
		</>
	);
};
