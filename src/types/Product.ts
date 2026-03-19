export type Product = {
	id: number;
	imageURL: string;
	isNew: boolean;
    isHot: boolean;
	category: string;
	name: string;
	specs: string[];
	price: number;
	salePrice: number | null;
};