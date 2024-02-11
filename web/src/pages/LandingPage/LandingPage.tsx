import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import TopNavBar from 'src/components/TopNavBar/TopNavBar'
import ImgGaviablePage from '../ImgGaviablePage/ImgGaviablePage'
import './style.css'
// import '../../style.css'


const LandingPage = () => {
  return (
    <>
      <Metadata title="landing " description="landing page" />

     <section>
   <div>  <TopNavBar /></div>


   <section className='flex justify-center flex-col gap-3 text-center items-center heightmange'  data-aos="fade-up"  >


    <h1 className='text-5xl font-medium'  data-aos="fade-up"  data-aos-duration="2000"> The destination </h1>
    <h1  className='text-5xl font-medium'  data-aos="fade-up"  data-aos-duration="2000"> for your next one </h1>

    <h3 className='mt-3'  data-aos="fade-up"  data-aos-duration="2000">HAFH IS A DISCOVERY PLATFORM FOR THE MODERAN TRAVELLER</h3>


  <div className='mt-8 flex items-center justify-center bg-black rounded-2xl px-4 py-2'  data-aos="fade-up"  data-aos-duration="2000">
          <h5 className='text-white'>What we're about</h5>
  </div>

   </section>


   <section>
    <ImgGaviablePage/>
   </section>



    </section>






    </>
  )
}

export default LandingPage
