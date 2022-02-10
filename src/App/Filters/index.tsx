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
          <a href="#/all" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/active" className="">
            Active
          </a>
        </li>
        <li>
          <a href="#/completed" className="">
            Completed
          </a>
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
