// -- core
import Link from "next/link";
import Image from "next/image";

// -- asset image
import logo from "core/assets/img/logo/shop.co.svg";

// -- style
import style from "./style.module.scss";

const Logo = (props) => {
	const data = { to: "/", image: logo, alt: "SHOP.CO" };

	return (
		<div>
			<Link href={data.to} {...props}>
				<Image
					src={data.image}
					alt={data.alt}
					width={160}
					className={style.image}
				/>
			</Link>
		</div>
	);
};

export default Logo;
