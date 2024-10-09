// -- atoms
import Button from "@atoms/Button";
import TextTitle from "@atoms/TextTitle";

// -- molecules
import ProductItem from "@molecules/ProductItem";

// -- style
import style from "./style.module.scss";

const TopSelling = (props) => {
	const { title, products, button } = props;
	return (
		<section className={style.topSelling}>
			<div className="container">
				<TextTitle text={title} />
				<div className={style.list}>
					{products.map((val, idx) => (
						<ProductItem key={`na-${idx}`} {...val} />
					))}
				</div>
				<div className={style.button}>
					<Button variant="white" href={button.to}>
						{button.text}
					</Button>
				</div>
			</div>
		</section>
	);
};

export default TopSelling;
