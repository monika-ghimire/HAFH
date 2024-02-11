import { Link, routes } from '@redwoodjs/router'
import './main.css'

import { Metadata } from '@redwoodjs/web'

const ImgGaviablePage = () => {
  return (
    <>
      <Metadata title="ImgGaviable" description="ImgGaviable page" />

      <section className="image-container">
        <h1>hello</h1>

        <div className="image-wrapper">
          <img src='/img1.jpeg' alt='Description of the image' className='imgset' />
          <img src='/img1.jpeg' alt='Description of the image' className='imgset' />
          <img src='/img1.jpeg' alt='Description of the image' className='imgset' />
          <img src='/img1.jpeg' alt='Description of the image' className='imgset' />
          <img src='/img1.jpeg' alt='Description of the image' className='imgset' />
        </div>
      </section>
    </>
  )
}

export default ImgGaviablePage
