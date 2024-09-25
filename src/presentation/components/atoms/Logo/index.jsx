// -- core
import Link from "next/link";
import Image from "next/image";

// -- asset image
import logo from "core/assets/img/logo/shop.co.svg";

const Logo = (props) => {
	const data = { to: "/", image: logo, alt: "SHOP.CO" };

	return (
		<Link href={data.to} {...props}>
			<Image src={data.image} alt={data.alt} width={160} />
		</Link>
	);
};
export default Logo;
