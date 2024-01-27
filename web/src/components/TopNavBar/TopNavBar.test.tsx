import { render } from '@redwoodjs/testing/web'

import TopNavBar from './TopNavBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopNavBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopNavBar />)
    }).not.toThrow()
  })
})
