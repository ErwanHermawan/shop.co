// components
import Button from "@atoms/Button";
import ProductItem from "@molecules/ProductItem";

// -- style
import style from "./style.module.scss";

const TopSelling = (props) => {
	const { title, products, button } = props;
	return (
		<section className={style.topSelling}>
			<div className="container">
				<h2 className={style.title}>{title}</h2>
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
