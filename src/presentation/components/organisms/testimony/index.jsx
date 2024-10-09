// -- atoms
import TextTitle from "@atoms/TextTitle";

// -- molecules
import TestimonyItem from "@molecules/TestimonyItem";

// -- style
import style from "./style.module.scss";

const Testimony = (props) => {
	const { title, testimony } = props;
	console.log(testimony);
	return (
		<section className={style.testimony}>
			<div className="container">
				<TextTitle text={title} align="left" />
				<div className={style.list}>
					{testimony.map((val, idx) => (
						<TestimonyItem key={`na-${idx}`} {...val} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimony;
