import React from 'react'
import { render, screen } from '../../../setup-tests/vitest-setup'
import { mockArticles } from '../../../constants/mock-articles'

import DisplayCards from '.'

const mockProps = {
  title: "Your Articles",
  isLoading: false,
  totalPages: 1,
  isError: false,
  cards: mockArticles,
}

describe('DisplayCards template', () => {
  it('renders without crashing with provided section title', () => {
    render(<DisplayCards {...mockProps} />)
    const text = screen.getByText('Your Articles')
    expect(text).toBeInTheDocument()
  })

  it('renders skeleton loader when loading', () => {
    render(<DisplayCards {...mockProps} isLoading />)
    const skeletonLoader = screen.getAllByTestId('skeleton-loader-article-card')
    expect(skeletonLoader).toHaveLength(9)
  })

  it('renders error message when error', () => {
    render(<DisplayCards {...mockProps} isError />)
    const errorMessage = screen.getByText('Something went wrong. Please try again later.')
    expect(errorMessage).toBeInTheDocument()
  })

  it('renders all articles', () => {
    render(<DisplayCards {...mockProps} />)
    const articleCards = screen.getAllByTestId('article-card')
    expect(articleCards).toHaveLength(mockArticles.length)
  })
})