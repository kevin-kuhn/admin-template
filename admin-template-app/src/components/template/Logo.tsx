const Logo: React.FC = () => {
	return (
		<div className='h-14 w-14 items-center justify-center bg-white rounded-full flex flex-col'>
			<div className=' h-3 w-3 rounded-full bg-red-600 mb-0.5' />
			<div className='flex mt-0.5'>
				<div className=' h-3 w-3 rounded-full bg-yellow-500 mr-0.5' />
				<div className=' h-3 w-3 rounded-full bg-green-600 ml-0.5' />
			</div>
		</div>
	)
}

export default Logo
