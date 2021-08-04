import React, { useState } from "react"
import AuthInput from "../components/auth/AuthInput"

const Auth: React.FC = () => {
	const [email, setEmail] = useState("")
	const [password, setPasword] = useState("")
	const [mode, SetMode] = useState<"login" | "register">("login")

	return (
		<div>
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
		</div>
	)
}

export default Auth
