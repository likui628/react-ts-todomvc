import React from 'react'
import { RecoilRoot } from 'recoil'
import { render, RenderResult } from '@testing-library/react'

export const renderWithRecoilRoot = (ui: React.ReactElement): RenderResult =>
  render(<RecoilRoot>{ui}</RecoilRoot>)
