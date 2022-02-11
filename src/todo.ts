import { atom } from 'recoil'

export interface Todo {
  id: string
  bodyText: string
  completed: boolean
}

export type TodoList = Todo[]

export const APP_STATE_KEY = 'TODO_LIST_STATE'

function loadFromLocalStorage(): TodoList {
  const data = localStorage.getItem(APP_STATE_KEY)
  
  return data ? JSON.parse(data) : []
}

export const todoListState = atom({
  key: APP_STATE_KEY,
  default: loadFromLocalStorage(),
})
