import React, { createRef } from "react"
import { useSetRecoilState } from "recoil"
import { Todo, todoListState } from "../../todo"
import { UUID } from "../../utils"

function NewInput() {
  const setTodoList = useSetRecoilState(todoListState)
  const textInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  function addTodo(e: React.KeyboardEvent<HTMLInputElement>) {
    if (textInput.current === null) return

    const val = textInput.current.value.trim()
    if (e.key === "Enter" && val.length > 0) {
      const todo: Todo = {
        id: UUID(),
        bodyText: textInput.current.value,
        completed: false,
      }
      setTodoList((oldTodoList) => [todo, ...oldTodoList])

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
