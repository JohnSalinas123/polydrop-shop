
export const getDiscount = (price: number, salePrice: number | null) => {
    if (!salePrice) return null;
    return Math.round((1 - price / salePrice) * 100);
}

export const formatPrice = (cents: number) => {
		return `$${(cents / 100).toFixed(2)}`;
	};