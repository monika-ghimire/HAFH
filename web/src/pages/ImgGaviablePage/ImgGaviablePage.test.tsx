import { render } from '@redwoodjs/testing/web'

import ImgGaviablePage from './ImgGaviablePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ImgGaviablePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImgGaviablePage />)
    }).not.toThrow()
  })
})
