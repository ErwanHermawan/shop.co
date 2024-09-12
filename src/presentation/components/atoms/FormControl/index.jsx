// -- atom
import SystemIcon from "@atoms/SystemIcon";

// -- style
import style from "./style.module.scss";

const FormControl = (props) => {
	const { variant = "input", placeholder, color, icon, list } = props;

	let colorStyle = "";
	switch (color) {
		case "grey":
			colorStyle = style.inputGrey;
			break;
	}

	return (
		<>
			{/* input select */}
			{variant == "select" && (
				<select {...props} className={`${style.select} ${color && color}`}>
					{list?.map((val, idx) => {
						return (
							<option value={val.value} key={`op-${idx}`}>
								{val.unit}
							</option>
						);
					})}
				</select>
			)}

			{/* input group */}
			{icon && (
				<div className={style.group}>
					<input
						{...props}
						className={`${style.input} ${style.inputGroup} ${
							color !== undefined ? colorStyle : ""
						}`}
						placeholder={placeholder}
					/>
					<SystemIcon name={icon} />
				</div>
			)}

			{/* input default */}
			{!icon && (
				<input
					{...props}
					className={`${style.input} ${color !== undefined ? color : ""}`}
					placeholder={placeholder}
				/>
			)}
		</>
	);
};

export default FormControl;
