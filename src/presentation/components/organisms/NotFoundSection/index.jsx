// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "@atoms/Button";

// asset image

const NotFoundSection = () => {
	return (
		<section className={style.notfound}>
			<div className="container">
				<h2 className={style.title}>Oops! Page is unavailable :(</h2>
			</div>
		</section>
	);
};

export default NotFoundSection;
