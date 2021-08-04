interface Props {
	label: string
	value: string
	type: "text" | "email" | "password"
	required?: boolean
	render?: boolean
	onChange: (value: any) => void
}

const AuthInput: React.FC<Props> = ({
	render = true,
	required = false,
	...props
}) => {
	return render ? (
		<div className='flex flex-col'>
			<label htmlFor=''>{props.label}</label>
			<input
				type={props.type}
				value={props.value}
				onChange={e => props.onChange(e.target.value)}
				required={required}
			/>
		</div>
	) : null
}

export default AuthInput
