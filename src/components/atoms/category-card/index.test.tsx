import React from 'react'
import { render, screen } from '../../../setup-tests/vitest-setup'
import CategoryCard from "."

describe('CategoryCard atom', () => {
  it('renders without crashing', () => {
    render(<CategoryCard slug="business">Business</CategoryCard>)
    const text = screen.getByText('Business')
    expect(text).toBeInTheDocument()
  })

  it('renders with correct link', () => {
    render(<CategoryCard slug="business">Business</CategoryCard>)
    const link = screen.getByText('Business')
    expect(link).toHaveAttribute('href', '/category/business')
  })
})