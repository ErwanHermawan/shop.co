// -- core
import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

const Footer = (props) => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<h1>Footer</h1>
			</div>
		</footer>
	);
};

export default Footer;
