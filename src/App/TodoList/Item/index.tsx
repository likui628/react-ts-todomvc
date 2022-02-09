import { useAppDispatch } from "../../../hooks"
import { reverseTodoAction } from "../../../store"
import { Todo } from "../../../types"

interface Props {
  todo: Todo
}

const Item: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch()

  return (
    <li className={`todo ${todo.completed ? 'completed' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(reverseTodoAction(todo.id))}
        />
        <label>{todo.bodyText}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" type="text" />
    </li>
  )
}

export default Item
