import { atom, RecoilState } from 'recoil'
export interface Todo {
  id: string
  bodyText: string
  completed: boolean
}
export interface TodoState {
  todos: Todo[]
}

export const todoState: RecoilState<TodoState> = atom({
  key: 'todoState',
  default: {
    todos: [],
  } as TodoState,
})
