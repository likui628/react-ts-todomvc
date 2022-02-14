import { render, screen } from '@testing-library/react'
import { wrapWithRecoilRoot, wrapWithRouter } from '../../testUtils'
import { AppState } from '../../todo'
import Filters from './'

const initialRecoilState: AppState = {
  todoList: [
    {
      id: '8btxpD9kDBlo',
      bodyText: 'something to do',
      completed: false,
    },
  ],
}

const App = () => {
  return wrapWithRouter(
    wrapWithRecoilRoot(<Filters />, initialRecoilState),
    '/'
  )
}

describe('Filters', () => {
  it('should render filters', () => {
    render(<App />)

    expect(screen.getByTestId('todo-yet-left').textContent).toBe('1')

    const allLink = screen.getByRole('link', { name: /all/i })
    expect(allLink).toHaveClass('selected')

    const activeLink = screen.getByRole('link', { name: /active/i })
    expect(activeLink).not.toHaveClass('selected')

    const completedLink = screen.getByRole('link', { name: /completed/i })
    expect(completedLink).not.toHaveClass('selected')

    const clearButton = screen.queryByRole('button', {
      name: /clear completed/i,
    })
    expect(clearButton).not.toBeInTheDocument()
  })
})
