import Title from "./Title"

interface Props {
	title: string
	subtitle: string
}

const Header: React.FC<Props> = props => {
	return (
		<div>
			<Title title={props.title} subtitle={props.subtitle} />
		</div>
	)
}

export default Header
