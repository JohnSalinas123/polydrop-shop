import { HeroSection } from "../components/home/HeroSection";
import { Marquee } from "../components/ui/Marquee";

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
				<Marquee items={marqueeItems} />
			</div>
		</>
	);
};
