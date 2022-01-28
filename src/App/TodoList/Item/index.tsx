function Item() {
  return (
    <li className="todo">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>todo</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" type="text" />
    </li>
  )
}

export default Item
