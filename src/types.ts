export interface Todo {
  id: string
  bodyText: string
  completed: boolean
}

export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const TOGGLE_ALL = 'TOGGLE_ALL'
export const REVERSE_TODO = 'REVERSE_TODO'

