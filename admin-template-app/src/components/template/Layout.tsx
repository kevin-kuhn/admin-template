import React from "react"
import Content from "./Content"
import Header from "./Header"
import SideMenu from "./SideMenu"

interface Props {
	title: string
	subtitle: string
}

const Layout: React.FC<Props> = props => {
	return (
		<div className='font-poppins flex h-screen w-screen'>
			<SideMenu />
			<div className='flex flex-col w-full p-7 bg-gray-300'>
				<Header title={props.title} subtitle={props.subtitle} />
				<Content>{props.children}</Content>
			</div>
		</div>
	)
}

export default Layout
