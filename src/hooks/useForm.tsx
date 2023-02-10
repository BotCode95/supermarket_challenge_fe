import {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	FormEventHandler,
	useState,
} from 'react'

export const useForm = () => {
	const [state, setState] = useState('')
	const handleChange: ChangeEventHandler<HTMLInputElement> = (
		e: ChangeEvent<HTMLInputElement>
	) => {
		setState(([e.target.name] = e.target.value))
		console.log(state)
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = (
		e: FormEvent<HTMLFormElement>
	) => {
		e.preventDefault()
	}
	return {
		state,
		handleChange,
		handleSubmit,
	}
}
