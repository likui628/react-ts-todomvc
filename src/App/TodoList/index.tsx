import React, { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toggleAllAction } from '../../store'
import { Todo } from '../../types'
import Item from './Item'

const TodoList: React.FC = () => {
  const state = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()

  function toggleAll(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(toggleAllAction(e.target.checked))
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {
          state.map((t: Todo): ReactElement => {
            return <Item key={t.id} todo={t} />
          })
        }
      </ul>
    </section>
  )
}

export default TodoList
