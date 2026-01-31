import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import heroBanner from './assets/img/mainPhoto.webp'
import heroTitle from './assets/img/heroLogo.webp'
import FirstCarousel from './components/FirstCarousel'
import Top10 from './components/Topten'




function App() {  


  return (
    <>
      <Navbar className="fixed top-0 left-0 right-0 z-10"/>
      <img src={heroBanner} 
      className='w-full absolute inset-0 -z-10 hero-mask'/>
      {/* hero-section */}
      <div className='pl-[3.5vw] mt-[5vw]'>
        <img src={heroTitle} alt="" className='object-cover w-[450px]'/>
        <div className='w-[620px] my-5 text-white text-left font-medium text-[20px]'>This anime about a genius child detective is based on Gosho Aoyama's
          award-winning manga series, which has sold over 250 million copies worldwide.
        </div>
        <div className="flex">
          <div className='flex items-center w-fit px-8 py-3 mr-3 bg-white hover:bg-white/70 rounded-md'>
            <svg className='text-black mr-4 scale-130' viewBox="0 0 24 24" width="24" height="24" data-icon="PlayMedium" data-icon-id=":r0:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
              <path fill="currentColor" d="M5 2.7a1 1 0 0 1 1.48-.88l16.93 9.3a1 1 0 0 1 0 1.76l-16.93 9.3A1 1 0 0 1 5 21.31z">
              </path>
            </svg>
            <div className='font-medium text-black text-[18px]'>Play</div>
          </div>


          {/* Info block */}
          <div className='flex items-center w-fit px-8 py-3 bg-[#697668] hover:bg-[#697668]/70  rounded-md'>
            <svg className='mr-3' viewBox="0 0 24 24" width="24" height="24" data-icon="CircleIMedium" data-icon-id=":r1:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
              <path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12m13-2v8h-2v-8zm-1-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd">
              </path>
            </svg>
              <div className='font-medium text-white text-[18px]'>More Info</div>
          </div>
        </div>
      </div>

      {/* info-section */}
      <div className="absolute right-0 top-120 flex items-center">
        <div className='flex items-center justify-center rounded-full bg-[#4d4d4d]/70 size-9 mr-4 border-[0.5px] border-white hover:bg-[#535353]'>
          <svg viewBox="0 0 24 24" width="22" height="22" data-icon="RefreshMedium" data-icon-id=":r3:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
            <path fill="currentColor" fill-rule="evenodd" d="M20.663 7A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h2c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0a11.99 11.99 0 0 1 10 5.365V2h2v6a1 1 0 0 1-1 1h-6V7z" clip-rule="evenodd">
            </path>
          </svg>  
        </div>  


        {/* rateCautions */}
        <div className='flex w-[100px]'>
          <div className='h-[32px] w-[1px] bg-white z-10'></div>
          <div className='flex items-center text-white bg-[#697668]/70 h-8 w-[99px]'>
            <div className='!opacity-100 ml-3 flex items-center text-[18px]'>16+</div>
          </div>
        </div>
      </div>

      {/* first carousel-slide */}
      <FirstCarousel/>

      <Top10/>
    </>
  )
}

export default App
