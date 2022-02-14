import React from 'react'
import { MutableSnapshot, RecoilRoot } from 'recoil'
import { recoilState, AppState } from './todo'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

export const wrapWithRecoilRoot = (
  ui: React.ReactElement,
  initialRecoilStateValue: AppState = { todoList: [] }
): React.ReactElement => {
  return (
    <RecoilRoot
      initializeState={({ set }: MutableSnapshot): void =>
        set(recoilState, initialRecoilStateValue)
      }
    >
      {ui}
    </RecoilRoot>
  )
}

export const wrapWithRouter = (
  ui: React.ReactElement,
  path: string = ''
): React.ReactElement => {
  return (
    <MemoryRouter initialEntries={[`${path}`]}>
      <Routes>
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>
  )
}
