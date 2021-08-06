import React, { useState } from "react"
import AuthInput from "../components/auth/AuthInput"
import Image from "next/image"
import { WarningIcon } from "../components/icons"
import useAuth from "../data/hook/useAuth"

const Auth: React.FC = () => {
	const { user, googleLogin } = useAuth()

	const [email, setEmail] = useState("")
	const [password, setPasword] = useState("")
	const [mode, setMode] = useState<"login" | "register">("login")
	const [error, setError] = useState("")

	const showError = (msg: string, showTime = 5) => {
		setError(msg)
		setTimeout(() => setError(""), showTime * 1000)
	}

	const submit = () => {
		if (mode === "login") {
			showError("erro login", 5)
		} else {
			showError("erro cadastro", 5)
		}
	}

	return (
		<div className='flex h-screen items-center justify-center'>
			<div
				className={`hidden md:block relative w-full h-full md:w-1/2 lg:w-2/3`}
			>
				<img
					src={"https://source.unsplash.com/random"}
					alt='Imagem aleatória'
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='w-full md:w-1/2 m-10 lg:w-1/3'>
				<h1 className='text-xl font-bold mb-5'>
					{mode === "login"
						? "Entre com a sua conta"
						: "Cadastre-se na plataforma"}
				</h1>
				{error && (
					<div className='flex items-center gap-3 bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg'>
						{WarningIcon()}
						<span>{error}</span>
					</div>
				)}
				<AuthInput
					label='Email'
					type='email'
					required
					value={email}
					onChange={setEmail}
				/>
				<AuthInput
					label='Senha'
					type='password'
					required
					value={password}
					onChange={setPasword}
				/>

				<button
					onClick={submit}
					className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6 transition delay-75'
				>
					{mode === "login" ? "Entrar" : "Cadastrar"}
				</button>

				<hr className='my-6 border-gray-300' />
				<button
					onClick={googleLogin}
					className='w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 transition delay-75'
				>
					Entrar com Google
				</button>

				{mode === "login" ? (
					<p className='mt-8'>
						Novo por aqui?
						<a
							className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'
							onClick={() => {
								setError("")
								setMode("register")
							}}
						>
							{" "}
							Crie uma conta gratuitamente
						</a>
					</p>
				) : (
					<p className='mt-8'>
						Já faz parte da nossa comunidade?
						<a
							className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'
							onClick={() => {
								setError("")
								setMode("login")
							}}
						>
							{" "}
							Entre com suas credenciais
						</a>
					</p>
				)}
			</div>
		</div>
	)
}

export default Auth
