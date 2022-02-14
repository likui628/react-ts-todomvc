import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { recoilState, Todo } from "../../../todo"

interface Props {
  todo: Todo
}

const Item: React.FC<Props> = ({ todo }) => {
  const [appState, setAppState] = useRecoilState(recoilState)
  const [state, setState] = useState({ onEdit: false })

  function reverseChecked(id: Todo['id']) {
    const newVal = appState.todoList.map(
      t => t.id === id
        ? { ...t, completed: !t.completed }
        : t
    )
    setAppState({ todoList: newVal })
  }

  function deleteTodo(id: Todo['id']) {
    const newVal = appState.todoList.filter((t: Todo) => t.id !== id)
    setAppState({ todoList: newVal })
  }

  function onClick(e: React.MouseEvent) {
    setState({ onEdit: true })
  }

  function onBlur() {
    setState({ onEdit: false })
  }

  function handleTodoTextEdit({ target: { value } }: React.ChangeEvent<HTMLInputElement>, id: Todo['id']) {
    const newVal = appState.todoList.map(
      t => t.id === id
        ? { ...t, bodyText: value }
        : t
    )

    setAppState(
      { todoList: newVal }
    )
  }

  return (
    <li className={`todo ${todo.completed ? 'completed' : ''} ${state.onEdit ? 'editing' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => reverseChecked(todo.id)}
        />
        <label onDoubleClick={onClick}>
          {todo.bodyText}
        </label>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
      <input
        className="edit"
        type="text"
        value={todo.bodyText}
        onChange={(e) => handleTodoTextEdit(e, todo.id)}
        onBlur={onBlur}
      />
    </li >
  )
}

export default Item
