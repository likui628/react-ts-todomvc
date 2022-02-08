import { Todo } from "../../../types"

interface Props {
  todo: Todo
}

const Item: React.FC<Props> = ({ todo }) => {
  return (
    <li className="todo">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todo.bodyText}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" type="text" />
    </li>
  )
}

export default Item
