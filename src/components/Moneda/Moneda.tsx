import React from 'react'
import Typography from '@mui/material/Typography'

interface Props {
	title: string
	value: number
}

export const Moneda = ({ title, value }: Props) => {
	return (
		<div>
			<Typography variant="h1">{title}</Typography>
			<Typography variant="h1" paddingLeft={10}>
				$ {value}
			</Typography>
		</div>
	)
}
