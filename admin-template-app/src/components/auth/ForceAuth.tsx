import Image from "next/image"
import router from "next/router"
import loading from "../../../public/images/loading.gif"
import useAuth from "../../data/hook/useAuth"
import Head from "next/head"

const ForceAuth: React.FC = props => {
	const { user, isLoading } = useAuth()

	const renderContent = () => {
		return (
			<>
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `
						if(!document.cookie?.includes("admin-template-cod3r-auth")) {
							window.location.href = "/autenticacao"
						}
					`,
						}}
					/>
				</Head>
				{props.children}
			</>
		)
	}

	const renderLoading = () => {
		return (
			<div className='flex justify-center items-center h-screen'>
				<Image src={loading} alt='Loading' />
			</div>
		)
	}

	if (!isLoading && user?.email) {
		return renderContent()
	}

	if (isLoading) {
		return renderLoading()
	}

	router.push("/autenticacao")
	return null
}

export default ForceAuth
