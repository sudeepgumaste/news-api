import React from 'react'
import { render, screen } from '../../../setup-tests/vitest-setup'
import { mockArticles } from '../../../utils/mock-articles'

import DisplayCards from '.'

const mockProps = {
  title: "Your Articles",
  isLoading: false,
  totalPages: mockArticles.length,
  isError: false,
  cards: mockArticles,
}

describe('DisplayCards template', () => {
  it('renders without crashing', () => {
    render(<DisplayCards {...mockProps} />)
    const text = screen.getByText('Your Articles')
    expect(text).toBeInTheDocument()
  })
})