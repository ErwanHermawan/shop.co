// -- asset image
import product1 from "core/assets/img/dummy/product-5.png";
import product2 from "core/assets/img/dummy/product-6.png";
import product3 from "core/assets/img/dummy/product-7.png";
import product4 from "core/assets/img/dummy/product-8.png";

const topSellingData = {
	title: "TOP SELLING",
	button: {
		to: "/",
		text: "View All",
	},
	product: [
		{
			image: product1,
			to: "/",
			title: "Vertical Striped Shirt",
			rating: 5,
			price: 232,
			discount: 20,
		},
		{
			image: product2,
			to: "/",
			title: "Courage Graphic T-shirt",
			rating: 4,
			price: 145,
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
			title: "Loose Fit Bermuda Shorts",
			rating: 4.5,
			price: 210,
		},
	],
};

export default topSellingData;
