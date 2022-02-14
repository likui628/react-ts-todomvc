import { fireEvent, render, screen } from '@testing-library/react'
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
    {
      id: 'pD9kD8btxBlo',
      bodyText: 'something done',
      completed: true,
    },
  ],
}

describe('TodoList', () => {
  it('should render all items', async () => {
    render(
      wrapWithRouter(wrapWithRecoilRoot(<Filters />, initialRecoilState), '/')
    )

    expect(await screen.findAllByRole('listitem')).toHaveLength(2)
  })

  it('should render active items', async () => {
    render(
      wrapWithRouter(
        wrapWithRecoilRoot(<Filters />, initialRecoilState),
        '/active'
      )
    )

    expect(screen.getByText(/something to do/i)).toBeInTheDocument()
    expect(await screen.findAllByRole('listitem')).toHaveLength(1)
  })

  it('should render completed item', async () => {
    render(
      wrapWithRouter(
        wrapWithRecoilRoot(<Filters />, initialRecoilState),
        '/completed'
      )
    )

    expect(screen.getByText(/something done/i)).toBeInTheDocument()
    expect(await screen.findAllByRole('listitem')).toHaveLength(1)
  })

  test('toggle all', async () => {
    render(
      wrapWithRouter(wrapWithRecoilRoot(<Filters />, initialRecoilState), '/')
    )

    fireEvent.click(screen.getByText(/mark all as complete/i))

    const items = await screen.findAllByRole('listitem')
    items.forEach((item) => {
      expect(item).toHaveClass('completed')
    })
  })
})
