import Item from './Item'

function TodoList() {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        <Item />
      </ul>
    </section>
  )
}

export default TodoList
