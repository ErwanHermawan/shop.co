const SystemIcon = (props) => {
	const { name } = props;
	const classNames = `fi-${name}`;

	return <i className={classNames} icon="search"></i>;
};

export default SystemIcon;
