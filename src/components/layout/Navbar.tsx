import { Link } from "react-router";

export const Navbar = () => {
	return (
		<>
			<header>
				<nav>
					<h1>PolyDrop</h1>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/shop">Home</Link>
						</li>
						<li>
							<Link to="/about">Home</Link>
						</li>
						<li>
							<Link to="/contact">Home</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
