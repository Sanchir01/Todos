export interface ITodos {
	id: string
	todo: string
	isChecked: boolean
}

export interface ITodoStore {
	allTodo: ITodos[]
	createTodo: (todo: string) => void
	updateTodo: (id: string) => void
}
