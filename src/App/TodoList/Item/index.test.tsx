import { fireEvent, render, screen } from '@testing-library/react'
import { useRecoilState } from 'recoil'
import { wrapWithRecoilRoot } from '../../../testUtils'
import { recoilState, AppState } from '../../../todo'

import Item from './'

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
  const [state] = useRecoilState<AppState>(recoilState)
  return <Item todo={state.todoList[0]} />
}

describe('TodoItem', () => {
  it('should render todo item correctly', () => {
    render(wrapWithRecoilRoot(<App />, initialRecoilState))

    expect(screen.getByText('something to do')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toBeChecked()

    expect(screen.getByRole('listitem')).not.toHaveClass('completed')
    expect(screen.getByRole('listitem')).not.toHaveClass('editing')
  })

  test('complete todo', () => {
    render(wrapWithRecoilRoot(<App />, initialRecoilState))

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(screen.getByRole('listitem')).toHaveClass('completed')
  })

  test('edit todo item', () => {
    render(wrapWithRecoilRoot(<App />, initialRecoilState))

    fireEvent.dblClick(screen.getByTestId('todo-body-text'))
    expect(screen.getByRole('listitem')).toHaveClass('editing')

    fireEvent.input(screen.getByTestId('todo-edit-input'), {
      target: { value: 'new' },
    })
    fireEvent.keyDown(screen.getByTestId('todo-edit-input'), { key: 'Enter' })
    expect(screen.getByRole('listitem')).not.toHaveClass('editing')
  })

  test('delete todo item', () => {
    render(wrapWithRecoilRoot(<App />, initialRecoilState))

    expect(screen.getByText('something to do')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button'))
    expect(screen.queryByText('something to do')).not.toBeInTheDocument()
  })
})
