import React from "react"
import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons"
import ItemMenu from "./ItemMenu"
import Logo from "./Logo"

const SideMenu: React.FC = props => {
	return (
		<aside className='flex flex-col bg-gray-200 dark:bg-gray-900'>
			<div className='flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800'>
				<Logo />
			</div>
			<ul className='flex-grow'>
				<ItemMenu url='/' text='Início' icon={HomeIcon} />
				<ItemMenu url='/ajustes' text='Ajustes' icon={SettingsIcon} />
				<ItemMenu url='/notificacoes' text='Notificações' icon={BellIcon} />
			</ul>
			<ul>
				<ItemMenu
					text='Sair'
					icon={LogoutIcon}
					onClick={() => {
						console.log("Logout")
					}}
					className='text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white'
				/>
			</ul>
		</aside>
	)
}

export default SideMenu
