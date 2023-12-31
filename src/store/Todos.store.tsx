import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { generateId } from '../helpers/createId.ts'
import { ITodoStore } from '../types/TodosStore.types.ts'

export const todoStore = create<ITodoStore>()(
	devtools(
		persist(
			(set, get) => ({
				allTodo: [],
				createTodo: (todo: string) => {
					const { allTodo } = get()
					const newTodo = {
						id: generateId(),
						todo: todo,
						isChecked: false
					}
					set({ allTodo: [newTodo].concat(allTodo) })
				},
				updateTodo: (id: string) => {
					const { allTodo } = get()
					const myIndex = allTodo.find(todo => todo.id === id)
					set({
						allTodo: allTodo.map(item => ({
							...item,
							isChecked: item.id === id ? !myIndex?.isChecked : item.isChecked
						}))
					})
				}
			}),
			{
				name: 'todos',
				storage: createJSONStorage(() => localStorage)
			}
		)
	)
)
