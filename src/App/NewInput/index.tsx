import React, { createRef } from "react"
import { useAppDispatch } from "../../hooks"
import { addTodoAction, AppDispatch } from "../../store"

function NewInput() {
  const textInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()
  const dispatch: AppDispatch = useAppDispatch()

  function addTodo(e: React.KeyboardEvent<HTMLInputElement>) {
    if (textInput.current === null) return

    const val = textInput.current.value.trim()
    if (e.key === "Enter" && val.length > 0) {
      dispatch(addTodoAction(val))
      
      textInput.current.value = ""
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        ref={textInput}
        onKeyPress={(e) => addTodo(e)}
      />
    </header>
  )
}

export default NewInput
