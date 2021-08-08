import { createContext, useEffect, useState } from "react"

interface Props {
	theme: string
	toggleTheme: () => void
}

const AppContext = createContext<Props>({} as Props)

export const AppProvider: React.FC = props => {
	const [theme, setTheme] = useState('dark')

	useEffect(() => {
		setTheme(localStorage.getItem('theme'))
	}, [])

	const toggleTheme = () => {
		const newTheme = !theme ? 'dark' : ''
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	return (
		<AppContext.Provider
			value={{
				theme,
				toggleTheme,
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

//used as exemple
export const AppConsumer = AppContext.Consumer

export default AppContext
