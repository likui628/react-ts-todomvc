import React, { ReactElement } from 'react'
import { useRecoilState, } from 'recoil'
import { Todo, todoListState } from '../../todo'
import Item from './Item'

const TodoList: React.FC = () => {
  const [todoList, setAppState] = useRecoilState(todoListState)

  function toggleAll(e: React.ChangeEvent<HTMLInputElement>): void {
    setAppState(
      todoList.map(
        t => ({ ...t, completed: e.target.checked }))
    )
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
          todoList.map((t: Todo): ReactElement => {
            return <Item key={t.id} todo={t} />
          })
        }
      </ul>
    </section>
  )
}

export default TodoList
