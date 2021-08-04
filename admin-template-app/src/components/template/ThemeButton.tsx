import { MoonIcon, SunIcon } from "../icons"

interface Props {
	theme: string
	toggleTheme: () => void
}

const ThemeButton: React.FC<Props> = props => {
	return props.theme === "dark" ? (
		<div
			className='hidden cursor-pointer p-1 rounded-full select-none sm:flex items-center bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8'
			onClick={props.toggleTheme}
		>
			<div className='flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full'>
				{SunIcon(4)}
			</div>
			<span className='hidden lg:flex items-center ml-4 text-white'>Claro</span>
		</div>
	) : (
		<div
			className='hidden cursor-pointer u p-1 select-none rounded-full sm:flex items-center justify-end bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8'
			onClick={props.toggleTheme}
		>
			<span className='hidden lg:flex items-center mr-2 text-gray-300'>Escuro</span>
			<div className='flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full'>
				{MoonIcon(4)}
			</div>
		</div>
	)
}

export default ThemeButton
