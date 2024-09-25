// -- asset image
import logo from "core/assets/img/logo/shop.co.svg";
import visa from "core/assets/img/icon/visa.svg";
import mastercard from "core/assets/img/icon/mastercard.svg";
import paypal from "core/assets/img/icon/paypal.svg";
import applePay from "core/assets/img/icon/apple-pay.svg";
import googlePay from "core/assets/img/icon/google-pay.svg";

const footerData = {
	about:
		"We have clothes that suits your style and which you’re proud to wear. From women to men.",
	menu: [
		{
			title: "Company",
			list: [
				{
					to: "/about",
					text: "About",
				},
				{
					to: "/features",
					text: "Features",
				},
				{
					to: "/works",
					text: "Works",
				},
				{
					to: "/career",
					text: "Career",
				},
			],
		},
		{
			title: "Help",
			list: [
				{
					to: "/",
					text: "Customer Support",
				},
				{
					to: "/",
					text: "Delivery Details",
				},
				{
					to: "/",
					text: "Terms & Conditions",
				},
				{
					to: "/",
					text: "Privacy Policy",
				},
			],
		},
		{
			title: "Faq",
			list: [
				{
					to: "/",
					text: "Account",
				},
				{
					to: "/",
					text: "Manage Deliveries",
				},
				{
					to: "/",
					text: "Orders",
				},
				{
					to: "/",
					text: "Payments",
				},
			],
		},
		{
			title: "Resources",
			list: [
				{
					to: "/",
					text: "Free eBooks",
				},
				{
					to: "/",
					text: "Development Tutorial",
				},
				{
					to: "/",
					text: "How to - Blog",
				},
				{
					to: "/",
					text: "Youtube Playlist",
				},
			],
		},
	],
	sosmed: [
		{
			to: "twitter.com",
			icon: "twitter",
		},
		{
			to: "facebook.com",
			icon: "facebook",
		},
		{
			to: "instagram.com",
			icon: "instagram",
		},
		{
			to: "github.com",
			icon: "github",
		},
	],
	payment: [
		{
			to: "visa.com",
			img: visa,
			alt: "Visa",
		},
		{
			to: "mastercard.com",
			img: mastercard,
			alt: "Mastercard",
		},
		{
			to: "paypal.com",
			img: paypal,
			alt: "Paypal",
		},
		{
			to: "apple.com",
			img: applePay,
			alt: "Apple Pay",
		},
		{
			to: "google.com",
			img: googlePay,
			alt: "Google Pay",
		},
	],
	copyright: "Shop.co © 2000-2023, All Rights Reserved",
};

export default footerData;
