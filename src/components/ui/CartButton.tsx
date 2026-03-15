import { BiCart } from "react-icons/bi";

export const CartButton = () => {
	return (
		<>
			<button className="cart-button">
				<BiCart />
				<span>Cart</span>
				<span>0</span>
			</button>
		</>
	);
};
