import router from "next/router"
import { createContext, useEffect, useState } from "react"
import firebase from "../../firebase/config"
import User from "../../model/User"
import Cookies from "js-cookie"

interface Props {
	user: User
	isLoading: boolean
	googleLogin: () => Promise<void>
	logout: () => Promise<void>
	loginWithEmailAndPassword: (email: string, password: string) => Promise<void>
	registerWithEmailAndPassword: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<Props>({} as Props)

const handleCookie = (loggedIn: boolean) => {
	if (loggedIn) {
		Cookies.set("admin-template-cod3r-auth", loggedIn, {
			expires: 7,
		})
	} else {
		Cookies.remove("admin-template-cod3r-auth")
	}
}

const getNormalizedUser = async (
	firebaseUser: firebase.User
): Promise<User> => {
	const token = await firebaseUser.getIdToken()

	return {
		token,
		uid: firebaseUser.uid,
		name: firebaseUser.displayName,
		email: firebaseUser.email,
		provider: firebaseUser.providerData[0].providerId,
		urlImage: firebaseUser.photoURL,
	}
}

export const AuthProvider: React.FC = props => {
	const [user, setUser] = useState<User>()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (Cookies.get("admin-template-cod3r-auth")) {
			const cleanUp = firebase.auth().onIdTokenChanged(configureSession)

			return () => cleanUp()
		} else {
			setIsLoading(false)
		}
	}, [])

	const configureSession = async firebaseUser => {
		if (firebaseUser?.email) {
			const user = await getNormalizedUser(firebaseUser)
			setUser(user)
			handleCookie(true)
			setIsLoading(false)

			return user.email
		} else {
			setUser(null)
			handleCookie(false)
			setIsLoading(false)

			return false
		}
	}

	const loginWithEmailAndPassword = async (email: string, password: string) => {
		try {
			setIsLoading(true)
			const response = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)

			const resp = await configureSession(response.user)
			resp && router.push("/")
		} finally {
			setIsLoading(false)
		}
	}

	const registerWithEmailAndPassword = async (email: string, password: string) => {
		try {
			setIsLoading(true)
			const response = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)

			const resp = await configureSession(response.user)
			resp && router.push("/")
		} finally {
			setIsLoading(false)
		}
	}

	const googleLogin = async () => {
		try {
			setIsLoading(true)
			const response = await firebase
				.auth()
				.signInWithPopup(new firebase.auth.GoogleAuthProvider())

			const resp = await configureSession(response.user)
			resp && router.push("/")
		} finally {
			setIsLoading(false)
		}
	}

	const logout = async () => {
		try {
			setIsLoading(true)
			await firebase.auth().signOut()
			await configureSession(null)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				googleLogin,
				logout,
				loginWithEmailAndPassword,
				registerWithEmailAndPassword
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
