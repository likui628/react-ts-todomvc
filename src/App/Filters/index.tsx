function Filters() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> items left
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
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Filters
