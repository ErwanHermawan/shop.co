// components
import Button from "@atoms/Button";
import ProductItem from "@molecules/ProductItem";

// -- style
import style from "./style.module.scss";

// -- data
import topSellingData from "./topSellingData";

const TopSelling = (props) => {
	return (
		<section className={style.topSelling}>
			<div className="container">
				<h2 className={style.title}>{topSellingData.title}</h2>
				<div className={style.list}>
					{topSellingData.product.map((val, idx) => (
						<ProductItem key={`na-${idx}`} {...val} />
					))}
				</div>
				<div className={style.button}>
					<Button variant="white" href={topSellingData.button.to}>
						{topSellingData.button.text}
					</Button>
				</div>
			</div>
		</section>
	);
};

export default TopSelling;
