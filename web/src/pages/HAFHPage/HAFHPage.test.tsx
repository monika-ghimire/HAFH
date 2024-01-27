import { render } from '@redwoodjs/testing/web'

import HafhPage from './HafhPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HafhPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HafhPage />)
    }).not.toThrow()
  })
})
