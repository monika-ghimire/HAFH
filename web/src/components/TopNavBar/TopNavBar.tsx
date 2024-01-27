
// import '../../style/style.css'
import './style.css'



const TopNavBar = () => {
  return (
    <section className='p-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl tracking-wide'>HAFH</h1>

        <div className='flex items-center justify-center bg-black rounded-2xl px-4 py-2'>
          <h5 className='text-white'>The other HAFH</h5>
        </div>

      </div>
    </section>
  )
}

export default TopNavBar
