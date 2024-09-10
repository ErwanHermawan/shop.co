// -- asset image
import logo from "core/assets/img/logo/shop.co.svg";

const headerData = {
	promo: {
		text: "Sign up and get 20% off to your first order.",
		button: {
			to: "/signup",
			text: "Sign Up Now",
		},
	},
	logo: {
		to: "/",
		img: logo,
		alt: "SHOP.CO",
	},
	menu: [
		{
			to: "/shop",
			text: "Shop",
			dropdown: true,
			active: "shop",
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
};

export default headerData;
