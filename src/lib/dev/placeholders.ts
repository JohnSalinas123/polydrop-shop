// Development  only - replace with db data images

import type { Product } from "../../types/Product";

export const placeholders = {
	hero: "https://placehold.co/1500x700/E8E4DE/FFF",
	cardWide: "https://placehold.co/640x320/E8E4DE/FFF",
	cardSquare: "https://placehold.co/320x320/E8E4DE/FFF",
};

export const marqueeItems = [
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

export const recentDrops: Product[] = [
	{
		id: 1,
		imageURL: placeholders.cardWide,
		badge: "New",
		category: "Hard Surface · Weapon",
		name: "ASSAULT FRAME MK-VII",
		specs: ["GLB", "FBX", "4K PBR", "12,440 tris"],
		price: 2400,
		oldPrice: null,
	},
	{
		id: 2,
		imageURL: placeholders.cardSquare,
		badge: "Hot",
		category: "Sci-Fi · Prop",
		name: "VOID CORE REACTOR",
		specs: ["GLB", "UE5", "2K PBR"],
		price: 1800,
		oldPrice: null,
	},
	{
		id: 3,
		imageURL: placeholders.cardSquare,
		badge: "Sale",
		category: "Organic · Flora",
		name: "ANCIENT BARK TREE",
		specs: ["OBJ", "8K", "LODs"],
		price: 1540,
		oldPrice: 2200,
	},
	{
		id: 4,
		imageURL: placeholders.cardSquare,
		badge: null,
		category: "Architecture · Interior",
		name: "BRUTALIST COLUMN SET",
		specs: ["FBX", "4K", "Modular"],
		price: 1200,
		oldPrice: null,
	},
	{
		id: 5,
		imageURL: placeholders.cardSquare,
		badge: "New",
		category: "Sci-Fi · Vehicle",
		name: "RECON DRONE UNIT",
		specs: ["GLB", "Rigged", "4K PBR"],
		price: 3200,
		oldPrice: null,
	},
	{
		id: 6,
		imageURL: placeholders.cardSquare,
		badge: null,
		category: "Bundle · Mixed",
		name: "GEMSTONE CRYSTAL SET",
		specs: ["OBJ", "GLB", "12 pieces"],
		price: 2800,
		oldPrice: null,
	},
	{
		id: 7,
		imageURL: placeholders.cardSquare,
		badge: "New",
		category: "Low Poly · Nature",
		name: "FOREST MUSHROOM PACK",
		specs: ["GLB", "FBX", "50 models"],
		price: 500,
		oldPrice: null,
	},
];
