import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import { todoListState } from "../../todo"

const Filters: React.FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const completedCount = todoList.filter(t => t.completed).length

  function clearCompletd() {
    setTodoList(todoList.filter(t => !t.completed))
  }

  return (
    <footer className="footer" >
      <span className="todo-count">
        <strong>{todoList.length}</strong> items left
      </span>
      <ul className="filters">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "selected" : ''}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/active"
            className={({ isActive }) => isActive ? "selected" : ''}>
            Active
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/completed"
            className={({ isActive }) => isActive ? "selected" : ''}>
            Completed
          </NavLink>
        </li>
      </ul>
      {
        completedCount > 0 &&
        <button
          className="clear-completed"
          onClick={clearCompletd}
        >
          Clear completed
        </button>
      }
    </footer >
  )
}

export default Filters
