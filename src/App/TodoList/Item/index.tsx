import { useRecoilState } from "recoil"
import { Todo, todoListState } from "../../../todo"

interface Props {
  todo: Todo
}

const Item: React.FC<Props> = ({ todo }) => {
  const [todoList, setAppState] = useRecoilState(todoListState)

  function reverseChecked(id: Todo['id']) {
    setAppState(
      todoList.map(
        t => t.id === id
          ? { ...t, completed: !t.completed }
          : t
      )
    )
  }

  function deleteTodo(id: Todo['id']) {
    setAppState(todoList.filter((t: Todo) => t.id !== id))
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
