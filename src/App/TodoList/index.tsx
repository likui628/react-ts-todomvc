import React, { ReactElement } from 'react'
import { useRecoilState, } from 'recoil'
import { Todo, todoState, TodoState } from '../../todo'
import Item from './Item'

const TodoList: React.FC = () => {
  const [appState, setAppState] = useRecoilState<TodoState>(todoState)

  function toggleAll(e: React.ChangeEvent<HTMLInputElement>): void {
    setAppState({
      todos: appState.todos
        .map((t: Todo) => ({ ...t, completed: e.target.checked }))
    })
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
          appState.todos.map((t: Todo): ReactElement => {
            return <Item key={t.id} todo={t} />
          })
        }
      </ul>
    </section>
  )
}

export default TodoList
