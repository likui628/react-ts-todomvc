import Copyright from './Copyright'
import Filters from './Filters'
import NewInput from './NewInput'
import TodoList from './TodoList'

const App: React.FC = () => {
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
