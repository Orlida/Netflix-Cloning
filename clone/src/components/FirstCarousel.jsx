import React from 'react'
import {useState, useRef} from 'react'
import { FaChevronRight } from "react-icons/fa";
import miniBanner1 from '../assets/img/mini-banner1.webp'
import miniBanner2 from '../assets/img/mini-banner2.webp'
import miniBanner3 from '../assets/img/mini-banner3.webp'
import miniBanner4 from '../assets/img/mini-banner4.webp'
import miniBanner5 from '../assets/img/mini-banner5.webp'
import miniBanner6 from '../assets/img/mini-banner6.jpg'

function FirstCarousel() {

    const [isTouch, setIsTouch] = useState(false)
    const [isInCarousel, setIsInCarousel] = useState(false)
    const [isInactiveZone, setIsInactiveZone] = useState(false)
    
  return (
    // #54b9c5
    <div>
        <div className="h-[10vw]"></div>
        <div className='px-[3.5vw] w-[100vw]'>
            {/* carousel header */}
            <div className='pl-[-3vw] w-full flex items-center justify-between'>
                <div
                onMouseEnter={() => {setIsTouch(true)}}
                onMouseLeave={() => {setIsTouch(false)}}
                className='relative font-bold text-[22px] text-white mb-2.5'>
                        Someone List
                        <div className={`absolute left-38 top-[51%] translate-y-[-50%] transition-all duration-500 ease-out text-[#54b9c5] font-bold text-[14px] w-full
                            ${isTouch ? 'opacity-100 pointer-events-auto translate-x-2.5' : 'opacity-0 pointer-events-none'}`}>Explore more</div>
                        <div className={`absolute left-40 top-[50%] translate-y-[-50%] flex items-center text-[#54b9c5] font-bold text-[30px]
                            ${isTouch ? 'opacity-100 pointer-events-auto translate-x-25 transition-all duration-300 ease-in' : 'opacity-0 pointer-events-none'}
                            ${isInCarousel && !isTouch ? 'opacity-100 pointer-events-auto transition-all duration-500 ease-out scale-110' : 'opacity-0 pointer-events-none'}`}>&#8250;
                        </div>
                    </div>
                
                <div className='flex mr-[0.5vw] flex-none'>
                    <div className='list-carousel-active'></div>
                    <div className='list-carousel-inactive'></div>
                    <div className='list-carousel-inactive'></div>
                    <div className='list-carousel-inactive'></div>
                    <div className='list-carousel-inactive'></div>
                    <div className='list-carousel-inactive'></div>
                    <div className='list-carousel-inactive'></div>
                </div>
            </div>
            <div
            onMouseEnter={() => {setIsInCarousel(true)}}
            onMouseLeave={() => {setIsInCarousel(false)}}
            className="relative flex flex-nowrap">
                <div className='w-[15.5vw] flex-none'>
                    <a href="">
                    <img src={miniBanner1} alt="" className='rounded-md w-[15vw] object-cover mr-[0.5vw]'/>
                    </a>
                </div>
                <div className='w-[15.5vw] flex-none'>
                    <a href="">
                    <img src={miniBanner2} alt="" className='rounded-md w-[15vw] object-cover mr-[0.5vw]'/>
                    </a>
                </div>
                <div className='w-[15.5vw] flex-none'>
                    <a href="">
                    <img src={miniBanner3} alt="" className='rounded-md w-[15vw] object-cover mr-[0.5vw]'/>
                    </a>
                </div>
                <div className='w-[15.5vw] flex-none'>
                    <a href="">
                    <img src={miniBanner4} alt="" className='rounded-md w-[15vw] object-cover mr-[0.5vw]'/>
                    </a>
                </div>
                <div className='w-[15.5vw] flex-none'>
                    <a href="">
                    <img src={miniBanner5} alt="" className='rounded-md w-[15vw] object-cover mr-[0.5vw]'/>
                    </a>
                </div>
                <div className='w-[15.5vw] flex-none'>
                    <a href="">
                    <img src={miniBanner6} alt="" className='rounded-md w-[15vw] object-cover mr-[0.5vw]'/>
                    </a>
                </div>
                <div className='w-[15.5vw] flex-none'>
                    <a href="">
                    <img src={miniBanner6} alt="" className='rounded-md w-[15vw] object-cover mr-[0.5vw]'/>
                    </a>
                </div>
                <div className='absolute h-[120px] w-[3.5vw] -right-[3.5vw] group'>
                    <FaChevronRight
                    onMouseEnter={() => {setIsInactiveZone(true)}}
                    onMouseLeave={() => {setIsInactiveZone(false)}}
                    className={`absolute z-10 scale-150 right-[1.75vw] top-1/2 translate-y-[-50%] transition-all duration-100 linear cursor-pointer group-hover:scale-180
                        ${isInCarousel ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}/>
                    <div
                    onMouseEnter={() => {setIsInactiveZone(true)}}
                    onMouseLeave={() => {setIsInactiveZone(false)}}
                    className="absolute cursor-pointer w-full h-full transition-all duration-100 linear bg-black/40 group-hover:bg-black/60"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstCarousel
