// components
import Button from "@atoms/Button";
import ProductItem from "@molecules/ProductItem";

// -- style
import style from "./style.module.scss";

// -- data
import newArrivalData from "./newArrivalData";

const NewArrival = (props) => {
	return (
		<section className={style.newArrival}>
			<div className="container">
				<div className={style.wrapper}>
					<h2 className={style.title}>{newArrivalData.title}</h2>
					<div className={style.list}>
						{newArrivalData.product.map((val, idx) => (
							<ProductItem key={`na-${idx}`} {...val} />
						))}
					</div>
					<div className={style.button}>
						<Button variant="white" href={newArrivalData.button.to}>
							{newArrivalData.button.text}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewArrival;
