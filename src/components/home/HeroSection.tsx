import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { RiArrowRightLine } from "react-icons/ri";

const slides = [
	{
		imageURL: "https://placehold.co/1500x700/E8E4DE/FFF",
		tag: "New Release — Vol. 04",
		tagColor: "var(--accent-red)",
		headline: ["ULTRA", "HARD", "SURFACE"],
		sub: "Cinematic-grade mechanical assets for games, film, and archviz.",
		stats: [
			{ num: "340+", lbl: "Assets" },
			{ num: "4K", lbl: "Textures" },
		],
	},
	{
		imageURL: "https://placehold.co/1500x700/E8E4DE/FFF",
		tag: "Organic Pack",
		tagColor: "#f59e0b",
		headline: ["NATURE", "& FLORA", "PACK"],
		sub: "Hand-sculpted organic assets with displacement maps.",
		stats: [
			{ num: "120", lbl: "Models" },
			{ num: "8K", lbl: "Maps" },
		],
	},
	{
		imageURL: "https://placehold.co/1500x700/E8E4DE/FFF",
		tag: "Sci-Fi Series",
		tagColor: "#7c3aed",
		headline: ["VOID", "MECH", "SERIES"],
		sub: "Modular sci-fi architecture and prop sets.",
		stats: [
			{ num: "60+", lbl: "Modules" },
			{ num: "UE5", lbl: "Ready" },
		],
	},
];

const INTERVAL = 7500;

export const HeroSection = () => {
	const [current, setCurrent] = useState(0);
	const [progress, setProgress] = useState(0);

	// auto advance
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
			setProgress(0);
		}, INTERVAL);
		return () => clearInterval(timer);
	}, [current]);

	// progress bar
	useEffect(() => {
		setProgress(0);
		const timer = setTimeout(() => setProgress(100), 50);
		return () => clearTimeout(timer);
	}, [current]);

	const prev = () => {
		setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
		setProgress(0);
	};

	const next = () => {
		setCurrent((prev) => (prev + 1) % slides.length);
		setProgress(0);
	};

	return (
		<>
			<section className="hero">
				{slides.map((slide, i) => (
					<div key={i} className={`slide ${i === current ? "active" : ""}`}>
						<div
							className="slide-overlay"
							style={{
								backgroundImage: `url(${slide.imageURL})`,
							}}
						/>
						<div className="slide-content">
							<div className="slide-tag" style={{ color: slide.tagColor }}>
								<span
									className="slide-tag-line"
									style={{ backgroundColor: slide.tagColor }}
								></span>
								{slide.tag}
							</div>
							<h1 className="slide-headline">
								{slide.headline.map((line, i) => (
									<span key={i}>
										{line}
										<br />
									</span>
								))}
							</h1>
							<p className="slide-sub">{slide.sub}</p>
							<div className="slide-actions">
								<button
									className="btn-primary"
									style={{ backgroundColor: slide.tagColor }}
								>
									Browse series
									<RiArrowRightLine />
								</button>
								<button className="btn-ghost">Preview Files</button>
							</div>
						</div>

						<div className="slide-stats">
							{slide.stats.map((stat, i) => (
								<div key={i} className="stat-item">
									<div className="stat-num" style={{ color: slide.tagColor }}>
										{stat.num}
									</div>
									<div className="stat-lbl">{stat.lbl}</div>
								</div>
							))}
						</div>
					</div>
				))}

				<div className="hero-controls">
					<button className="hero-prev" onClick={prev}>
						<IoIosArrowRoundBack />
					</button>
					<div className="hero-dots">
						{slides.map((_, i) => (
							<div
								key={i}
								className={`hero-dot ${i === current ? "active" : ""}`}
								onClick={() => {
									setCurrent(i);
									setProgress(0);
								}}
							/>
						))}
					</div>
					<button className="hero-next" onClick={next}>
						<IoIosArrowRoundForward />
					</button>
				</div>

				<div className="slide-number">
					<span>{String(current + 1).padStart(2, "0")}</span> /
					<span>{slides.length}</span>
				</div>

				<div
					className="hero-progress"
					style={{
						transition:
							progress !== 0 ? `width ${INTERVAL - 200}ms linear` : "",
						width: progress === 0 ? "0%" : "100%",
					}}
				/>
			</section>
		</>
	);
};
