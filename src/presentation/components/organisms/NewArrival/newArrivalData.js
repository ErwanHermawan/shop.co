// -- asset image
import product1 from "core/assets/img/dummy/product-1.png";
import product2 from "core/assets/img/dummy/product-2.png";
import product3 from "core/assets/img/dummy/product-3.png";
import product4 from "core/assets/img/dummy/product-4.png";

const newArrivalData = {
	title: "NEW ARRIVALS",
	button: {
		to: "/",
		text: "View All",
	},
	product: [
		{
			image: product1,
			to: "/",
			title: "T-shirt with Tape Details",
			rating: 4.5,
			price: 120,
		},
		{
			image: product2,
			to: "/",
			title: "Skinny Fit Jeans",
			rating: 3.5,
			price: 240,
			discount: 20,
		},
		{
			image: product3,
			to: "/",
			title: "Checkered Shirt",
			rating: 4.5,
			price: 260,
		},
		{
			image: product4,
			to: "/",
			title: "Sleeve Striped T-Shirt",
			rating: 4.5,
			price: 160,
			discount: 30,
		},
	],
};

export default newArrivalData;
