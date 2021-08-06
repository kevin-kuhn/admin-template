import Link from "next/link"
import useAuth from "../../data/hook/useAuth"

interface Props {
	className?: string
}

const UserAvatar: React.FC<Props> = props => {
	const { user } = useAuth()

	return (
		<Link href='/perfil' passHref>
			<img
				src={user?.urlImage ?? "/images/avatar.png"}
				alt='imagem usuario'
				className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
			/>
		</Link>
	)
}

export default UserAvatar
