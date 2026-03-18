import { HeroSection } from "../components/home/HeroSection";
import { Marquee } from "../components/ui/Marquee";
import { MarqueeItem } from "../components/ui/MarqueeItem";

const marqueeItems = [
	{ text: "Hard Surface" },
	{ text: "Organic Sculpts" },
	{ text: "Sci-Fi Props" },
	{ text: "Architecture" },
	{ text: "Game Assets" },
	{ text: "VFX Ready" },
	{ text: "Blender Native" },
	{ text: "Unreal Engine" },
	{ text: "Unity Compatible" },
	{ text: "PBR Textures" },
];

export const Home = () => {
	return (
		<>
			<div>
				<HeroSection />
				<Marquee>
					{marqueeItems.map((item, i) => (
						<MarqueeItem key={i} text={item.text} />
					))}
				</Marquee>
			</div>
		</>
	);
};
