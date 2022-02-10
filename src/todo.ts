import { atom } from 'recoil'

export interface Todo {
  id: string
  bodyText: string
  completed: boolean
}

export type TodoList = Todo[]

export const todoListState = atom({
  key: 'todoListState',
  default: [] as TodoList,
})
