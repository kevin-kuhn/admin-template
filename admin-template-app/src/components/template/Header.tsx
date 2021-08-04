import React from "react"
import useAppData from "../../data/hook/useAppData"
import ThemeButton from "./ThemeButton"
import Title from "./Title"

interface Props {
	title: string
	subtitle: string
}

const Header: React.FC<Props> = props => {
	const { theme, toggleTheme } = useAppData()

	return (
		<div className='flex flex-row'>
			<Title title={props.title} subtitle={props.subtitle} />
			<div className='flex flex-grow justify-end'>
				<ThemeButton theme={theme} toggleTheme={toggleTheme} />
			</div>
		</div>
	)
}

export default Header
