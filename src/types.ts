export interface Todo {
  id: string
  bodyText: string
  completed: boolean
}

export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const TOGGLE_ALL = 'TOGGLE_ALL'
export const REVERSE_TODO = 'REVERSE_TODO'

export interface AddTodoAction {
  type: typeof ADD_TODO
  payload: string
}

export interface DelTodoAction {
  type: typeof DEL_TODO
  // payload: string
}

export interface ToggleAllAction {
  type: typeof TOGGLE_ALL
  payload: boolean
}

export interface ReverseTodoAction {
  type: typeof REVERSE_TODO
  payload: string
}

export type TodoActionTypes =
  | AddTodoAction
  | DelTodoAction
  | ToggleAllAction
  | ReverseTodoAction
