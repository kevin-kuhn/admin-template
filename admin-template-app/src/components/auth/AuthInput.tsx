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
		<div className='flex flex-col mt-4'>
			<label htmlFor=''>{props.label}</label>
			<input
				type={props.type}
				value={props.value}
				onChange={e => props.onChange(e.target.value)}
				required={required}
				className='px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white'
			/>
		</div>
	) : null
}

export default AuthInput
