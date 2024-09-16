// -- core
import Image from "next/image";

// components
import Button from "@atoms/Button";

// -- style
import style from "./style.module.scss";

// -- data
import bannerData from "./bannerData";

const Banner = (props) => {
	return (
		<section className={style.banner}>
			<div className="container">
				<div className={style.wrapper}>
					<div className={style.image}>
						<Image
							src={bannerData.image}
							alt={bannerData.title}
							className={style.imageEl}
						/>
					</div>
					<div className={style.text}>
						<h1 className={style.title}>{bannerData.title}</h1>
						<p className={style.description}>{bannerData.description}</p>
						<div className={style.button}>
							<Button href={bannerData.button.to}>
								{bannerData.button.text}
							</Button>
						</div>
						<ul className={style.widget}>
							{bannerData.widget.map((val, idx) => (
								<li className={style.widgetItem} key={`hb-${idx}`}>
									<div>
										<h4 className={style.widgetNumber}>{val.number}</h4>
										<p className={style.widgetDescription}>{val.description}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
