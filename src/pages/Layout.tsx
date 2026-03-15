import { Outlet } from "react-router";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export const Layout = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
