import { HeroSection } from "../components/home/HeroSection";
import { RecentDropsSection } from "../components/home/RecentDropsSection";
import { Marquee } from "../components/ui/Marquee";

import { marqueeItems, recentDrops } from "../lib/dev/placeholders";

export const Home = () => {
	return (
		<>
			<div>
				<HeroSection />
				<Marquee items={marqueeItems} />
				<RecentDropsSection items={recentDrops} />
			</div>
		</>
	);
};
