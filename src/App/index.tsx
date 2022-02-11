import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { APP_STATE_KEY, todoListState } from '../todo'
import Copyright from './Copyright'
import Filters from './Filters'
import NewInput from './NewInput'
import TodoList from './TodoList'

const App: React.FC = () => {
  const todoList = useRecoilValue(todoListState)

  useEffect(() => {
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(todoList))
  }, [todoList])

  return (
    <>
      <section className="todoapp">
        <NewInput />
        <TodoList />
        <Filters />
      </section>
      <Copyright />
    </>
  )
}

export default App
