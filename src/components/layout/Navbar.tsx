import { Link } from "react-router";
import { CartButton } from "../ui/CartButton";
import { BiCube } from "react-icons/bi";

export const Navbar = () => {
	return (
		<>
			<header>
				<nav>
					<div className="logo">
						<BiCube />
						<h1>PolyDrop</h1>
					</div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/shop">Shop</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
					<div>
						<CartButton />
					</div>
				</nav>
			</header>
		</>
	);
};
