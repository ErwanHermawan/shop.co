// -- core
import Image from "next/image";
import Link from "next/link";

// -- atoms
import TextTitle from "@atoms/TextTitle";

// -- style
import style from "./style.module.scss";

const DressStyle = (props) => {
	const { title, categories } = props;
	return (
		<section className={style.dress}>
			<div className="container">
				<div className={style.box}>
					<TextTitle text={title} />
					<div className={style.list}>
						{categories.map((val, idx) => (
							<div className={style.card} key={`ds-${idx}`}>
								<div className={style.cardBox}>
									<Link href={val.to} className={style.link}>
										{val.title}
									</Link>
									<Image
										src={val.image}
										alt={val.title}
										height={288}
										className={style.image}
									/>
									<h4 className={style.cardTitle}>{val.title}</h4>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default DressStyle;
