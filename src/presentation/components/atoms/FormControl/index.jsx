// -- style
import style from "./style.module.scss";

const FormControl = (props) => {
	const { variant = "input", placeholder, color = "black", list = [] } = props;

	if (variant === "select") {
		return (
			<select {...props} className={`${style.select} ${color}`}>
				{list?.map((val, idx) => {
					return (
						<option value={val.value} key={`op-${idx}`}>
							{val.unit}
						</option>
					);
				})}
			</select>
		);
	}

	return (
		<input
			{...props}
			className={`${style.input} ${color}`}
			placeholder={placeholder}
		/>
	);
};

export default FormControl;
