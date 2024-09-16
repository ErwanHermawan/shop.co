// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- data
import brandsData from "./brandsData";

const Brands = (props) => {
	return (
		<section className={style.brands}>
			<div className={style.wrapper}>
				<ul className={style.list}>
					{brandsData.map((val, idx) => (
						<li className={style.item} key={`br-${idx}`}>
							<Image src={val.image} alt={val.alt} className={style.image} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Brands;
