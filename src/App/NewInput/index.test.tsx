import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { wrapWithRecoilRoot } from '../../testUtils'

import NewInput from './'

describe('NewInput', () => {
  test('should render <NewInput/> correctly', () => {
    render(wrapWithRecoilRoot(<NewInput />))
    const input = screen.getByTestId('new-todo-input-text') as HTMLInputElement

    screen.getByText('todos')
    screen.getByPlaceholderText('What needs to be done?')

    userEvent.type(input, 'something to do')
    expect(input.value).toBe('something to do')

    userEvent.keyboard('[enter]')
    expect(input.value).toBe('')
  })
})
