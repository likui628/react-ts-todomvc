import React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState, } from 'recoil'
import { todoListState } from '../../todo'
import Item from './Item'

const TodoList: React.FC = () => {
  const [todoList, setAppState] = useRecoilState(todoListState)
  const path = useLocation().pathname

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
          todoList.filter(t => {
            switch (path) {
              case '/active':
                return t.completed === false
              case '/completed':
                return t.completed === true
              default:
                return true
            }
          }).map(t => {
            return <Item key={t.id} todo={t} />
          })
        }
      </ul>
    </section>
  )
}

export default TodoList
