import { AnyAction, configureStore } from '@reduxjs/toolkit'
import {
  ADD_TODO,
  DEL_TODO,
  REVERSE_TODO,
  Todo,
  TOGGLE_ALL,
} from './types'
import { UUID } from './utils'

const initialState: Todo[] = []

export const addTodoAction = (payload: string) => ({ type: ADD_TODO, payload })
export const delTodoAction = (payload: string) => ({ type: DEL_TODO, payload })
export const toggleAllAction = (payload: boolean) => ({
  type: TOGGLE_ALL,
  payload,
})
export const reverseTodoAction = (payload: string) => ({
  type: REVERSE_TODO,
  payload,
})

function todoReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: UUID(),
          bodyText: action.payload,
          completed: false,
        },
      ]
    case DEL_TODO:
      return state.filter((t: Todo) => t.id !== action.payload)
    case TOGGLE_ALL:
      return state.map((t: Todo) => ({ ...t, completed: action.payload }))
    case REVERSE_TODO:
      return state.map((t: Todo) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      )
    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
})

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
