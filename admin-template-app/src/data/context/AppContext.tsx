import { createContext, useState } from "react"

type ThemeType = "dark" | ""

interface Props {
	theme: ThemeType
	toggleTheme: () => void
}

const AppContext = createContext<Props>({} as Props)

export const AppProvider: React.FC = props => {
	const [theme, setTheme] = useState<ThemeType>('')

	const toggleTheme = () => {
		setTheme(theme => !theme ? 'dark' : '')
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
