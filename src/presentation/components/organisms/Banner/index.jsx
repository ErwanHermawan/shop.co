// -- core
import Image from "next/image";

// components
import Button from "@atoms/Button";

// -- style
import style from "./style.module.scss";

const Banner = (props) => {
	const { title, description, image, button, widget } = props;

	return (
		<section className={style.banner}>
			<div className="container">
				<div className={style.wrapper}>
					<div className={style.image}>
						<Image src={image} alt={title} className={style.imageEl} />
					</div>
					<div className={style.text}>
						<h1 className={style.title}>{title}</h1>
						<p className={style.description}>{description}</p>
						<div className={style.button}>
							<Button href={button.to}>{button.text}</Button>
						</div>
						<ul className={style.widget}>
							{widget.map((val, idx) => (
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
