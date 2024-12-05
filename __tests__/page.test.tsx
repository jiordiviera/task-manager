import Home from '@/app/page'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TaskProvider } from '@/context/task-context'

describe('Home Page', () => {
  it('renders the main content', () => {
    render(
      <TaskProvider>
        <Home />
      </TaskProvider>
    )

    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
  })
})
