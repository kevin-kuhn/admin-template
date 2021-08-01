interface Props {
	title: string
	subtitle: string
}

const Title: React.FC<Props> = (props) => {
	return (
		<div>
			<h1 className="">{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	)
}

export default Title