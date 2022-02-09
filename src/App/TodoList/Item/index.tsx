import { useRecoilState } from "recoil"
import { Todo, todoState, TodoState } from "../../../todo"

interface Props {
  todo: Todo
}

const Item: React.FC<Props> = ({ todo }) => {
  const [appState, setAppState] = useRecoilState<TodoState>(todoState)

  function reverseChecked(id: Todo['id']) {
    setAppState({
      todos: appState.todos
        .map((t: Todo) =>
          t.id === id
            ? { ...t, completed: !t.completed }
            : t
        )
    })
  }

  function deleteTodo(id: Todo['id']) {
    setAppState({
      todos: appState.todos
        .filter((t: Todo) => t.id !== id)
    })
  }

  return (
    <li className={`todo ${todo.completed ? 'completed' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => reverseChecked(todo.id)}
        />
        <label>{todo.bodyText}</label>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
      <input className="edit" type="text" />
    </li>
  )
}

export default Item
