// cart image
import product1 from "core/assets/img/dummy/product-1.png";
import product2 from "core/assets/img/dummy/product-2.png";
import product3 from "core/assets/img/dummy/product-3.png";
import product4 from "core/assets/img/dummy/product-4.png";

const headerData = {
	promo: {
		text: "Sign up and get 20% off to your first order.",
		button: {
			to: "/signup",
			text: "Sign Up Now",
		},
	},
	menu: [
		{
			to: "/shop",
			text: "Shop",
			dropdown: true,
			active: "shop",
			category: [
				{
					name: "Shirt",
					to: "/shirt",
					list: [
						{
							name: "Linen Shirt",
							to: "/",
						},
						{
							name: "Polo Shirt",
							to: "/",
						},
						{
							name: "Dress Shirt",
							to: "/",
						},
						{
							name: "Chambray",
							to: "/",
						},
						{
							name: "Overshirt",
							to: "/",
						},
						{
							name: "Hawaiian Shirt",
							to: "/",
						},
						{
							name: "Flannel Shirt",
							to: "/",
						},
						{
							name: "Cuban Collar",
							to: "/",
						},
					],
				},
				{
					name: "Formal",
					to: "/formal",
					list: [
						{
							name: "Blouse",
							to: "/",
						},
						{
							name: "Suite",
							to: "/",
						},
						{
							name: "Dress",
							to: "/",
						},
						{
							name: "Gown",
							to: "/",
						},
						{
							name: "Vest",
							to: "/",
						},
						{
							name: "Trench Coat",
							to: "/",
						},
						{
							name: "Cargo Pants",
							to: "/",
						},
						{
							name: "Blazer",
							to: "/",
						},
					],
				},
				{
					name: "Party",
					to: "/party",
					list: [
						{
							name: "Sheath Dress",
							to: "/",
						},
						{
							name: "Shift Dress",
							to: "/",
						},
						{
							name: "Ball gown",
							to: "/",
						},
						{
							name: "Apron Dress",
							to: "/",
						},
						{
							name: "Asymmetric Dress",
							to: "/",
						},
						{
							name: "Balloon Dress",
							to: "/",
						},
						{
							name: "Maxi Dress",
							to: "/",
						},
						{
							name: "Minidress",
							to: "/",
						},
					],
				},
				{
					name: "Gym",
					to: "/gym",
					list: [
						{
							name: "Technical T-Shirt",
							to: "/",
						},
						{
							name: "Gym Leggings",
							to: "/",
						},
						{
							name: "Training Socks",
							to: "/",
						},
						{
							name: "Sports Bra",
							to: "/",
						},
						{
							name: "Gym Shoes",
							to: "/",
						},
						{
							name: "Gym Vest",
							to: "/",
						},
					],
				},
			],
		},
		{
			to: "/sale",
			text: "ON Sale",
			active: "sale",
		},
		{
			to: "/arrival",
			text: "New Arrival",
			active: "arrival",
		},
		{
			to: "/brands",
			text: "Brands",
			active: "brands",
		},
	],
	cart: [
		{
			image: product1,
			name: "T-shirt with Tape Details lorem lorem lorem lorem",
			price: 120,
		},
		{
			image: product2,
			name: "Skinny Fit Jeans",
			price: 240,
			discount: 20,
		},
		{
			image: product3,
			name: "Checkered Shirt",
			price: 260,
		},
		{
			image: product4,
			name: "Sleeve Striped T-Shirt",
			price: 160,
			discount: 30,
		},
		{
			image: product4,
			name: "Sleeve Striped T-Shirt",
			price: 160,
			discount: 30,
		},
		{
			image: product4,
			name: "Sleeve Striped T-Shirt",
			price: 160,
			discount: 30,
		},
	],
};

export default headerData;
