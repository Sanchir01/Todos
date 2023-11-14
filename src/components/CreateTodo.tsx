import { PlusSquare } from 'lucide-react'
import { FC, useState } from 'react'
import { todoStore } from '../store/Todos.store'
import '../styles/CrateInput.scss'

const CreateTodo: FC = () => {
	const create = todoStore(state => state.createTodo)
	const [inputValue, setInputValue] = useState('')
	return (
		<div className='create'>
			<div className='wrapper'>
				<div className='create__block'>
					<input
						className='create__add'
						type='text'
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
					/>
					<button onClick={() => create(inputValue)}>
						<PlusSquare />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CreateTodo
