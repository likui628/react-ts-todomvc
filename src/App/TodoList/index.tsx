import { ReactElement } from 'react'
import { useAppSelector } from '../../hooks'
import { Todo } from '../../types'
import Item from './Item'

function TodoList() {
  const state = useAppSelector((state) => state.todos)

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all"></label>
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
