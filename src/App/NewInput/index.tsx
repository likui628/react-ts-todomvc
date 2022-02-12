import React, { useState } from "react"
import { useSetRecoilState } from "recoil"
import { Todo, todoListState } from "../../todo"
import { UUID } from "../../utils"

function NewInput() {
  const setTodoList = useSetRecoilState(todoListState)
  const [inputValue, setInputValue] = useState('')

  function addTodoItem(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!inputValue.trim()) return

    if (e.key === "Enter") {
      const todo: Todo = {
        id: UUID(),
        bodyText: inputValue,
        completed: false,
      }
      setTodoList((oldTodoList) => [todo, ...oldTodoList])

      setInputValue('')
    }
  }

  function onChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(value)
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={onChange}
        onKeyPress={addTodoItem}
        data-testid="new-todo-input-text"
      />
    </header>
  )
}

export default NewInput
