// -- style
import style from "./style.module.scss";

const TextTitle = ({ text, align = "center" }) => {
	const variantStyle =
		align === "left" ? `${style.title} ${style.titleLeft}` : style.title;

	return <h2 className={variantStyle}>{text}</h2>;
};

export default TextTitle;
