import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { todoStore } from '../store/Todos.store'
import '../styles/OneTodo.scss'

const OneTodo: FC = () => {
	const [todo, updateTodo] = todoStore(
		useShallow(state => [state.allTodo, state.updateTodo])
	)
	return (
		<section className='todos'>
			<div className='wrapper'>
				<div className=''>
					{todo.map(item => (
						<div key={item.id} className='todos__item'>
							<p>
								{item.todo} {item.isChecked === true ? 'Выполненный' : 'Новый'}
							</p>
							<input onChange={() => updateTodo(item.id)} type='checkbox' />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default OneTodo
