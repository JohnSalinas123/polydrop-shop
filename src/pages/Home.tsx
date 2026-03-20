import { AboutBannerSection } from "../components/home/AboutBannerSection";
import { HeroSection } from "../components/home/HeroSection";
import { NewsletterSection } from "../components/home/NewsletterSection";
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
				<AboutBannerSection />
				<NewsletterSection />
			</div>
		</>
	);
};
