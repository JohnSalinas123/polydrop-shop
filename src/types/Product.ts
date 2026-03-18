export interface Product {
	id: number;
	imageURL: string;
	badge: "New" | "Hot" | "Sale" | null;
	category: string;
	name: string;
	specs: string[];
	price: number;
	oldPrice: number | null;
}