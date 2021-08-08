import React from "react"
import useAppData from "../../data/hook/useAppData"
import ForceAuth from "../auth/ForceAuth"
import Content from "./Content"
import Header from "./Header"
import SideMenu from "./SideMenu"

interface Props {
	title: string
	subtitle: string
}

const Layout: React.FC<Props> = props => {
	const { theme } = useAppData()

	return (
		<ForceAuth>
			<div className={`${theme} font-poppins flex h-screen w-screen`}>
				<SideMenu />
				<div className='flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800'>
					<Header title={props.title} subtitle={props.subtitle} />
					<Content>{props.children}</Content>
				</div>
			</div>
		</ForceAuth>
	)
}

export default Layout
