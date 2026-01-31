import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Logo from '../assets/img/Netflix_Logo_PMS.png'
import avatarNetflix from '../assets/img/Netflix-avatar.png'
import main from '../assets/img/MainPhoto.webp'
import noti1 from '../assets/img/noti1.jpg'
import noti2 from '../assets/img/noti2.jpg'
import noti3 from '../assets/img/noti3.jpg'
import noti4 from '../assets/img/noti4.jpg'
import noti5 from '../assets/img/noti5.jpg'
import noti6 from '../assets/img/noti6.jpg'
import noti7 from '../assets/img/noti7.png'
import user1 from '../assets/img/user1photo.png'
import user2 from '../assets/img/user2photo.png'
import user3 from '../assets/img/user3photo.png'
import user4 from '../assets/img/user4photo.png'
import { IoMdArrowDropdown } from "react-icons/io";


function Navbar() {

    const [notificationVisible, setNotificationVisible] = useState(false);
    const [userVisible, setUserVisible] = useState(false);

    const notificationTimeoutRef = useRef(null);
    const userTimeoutRef = useRef(null);

    const notificationHandleMouseEnter = () => {
        if(!userVisible){
            if (notificationTimeoutRef.current) {
                clearTimeout(notificationTimeoutRef.current);
            }
            setNotificationVisible(true); 
        }else{
            setUserVisible(false)
            setNotificationVisible(true)
        }
    };

    const notificationHandleMouseLeave = () => {
        notificationTimeoutRef.current = setTimeout(() => {
            setNotificationVisible(false);
        }, 300);
    };

    // timeout user functions
    const userHandleMouseEnter = () => {
        if(!notificationVisible){
            if (userTimeoutRef.current) {
                clearTimeout(userTimeoutRef.current);
            }
            setUserVisible(true); 
        }else{
            setNotificationVisible(false)
            setUserVisible(true)
        }
    };

    const userHandleMouseLeave = () => {
        userTimeoutRef.current = setTimeout(() => {
            setUserVisible(false);
        }, 300);
    };

  return (
    <div className="px-[3vw] bg-gradient-to-b from-black/70 to-transparent w-full">
        <nav className="flex items-center justify-between h-[68px] top-0 left-0 mx-auto">
            {/* Navbar left side */}

            <div className='flex items-center bg-transparent'>
                <a href="">
                    <img src={Logo} alt="" className="w-[120px] h-[40px] object-cover"/>
                </a>
                <ul className='flex'>
                    <li className="nav-left font-bold">Home</li>
                    <li className="nav-left">Shows</li>
                    <li className="nav-left">Movies</li>
                    <li className="nav-left">Games</li>
                    <li className="nav-left">New & Popular</li>
                    <li className="nav-left">My List</li>
                    <li className="nav-left">Browse by Languages</li>
                </ul>
            </div>

            {/* Navbar right side */}
            
            <div className="flex items-center">
                {/* Search Icon */}
                <svg className="cursor-pointer" viewBox="0 0 24 24" width="24" height="24" data-icon="MagnifyingGlassMedium" data-icon-id=":R2ckiau:" aria-hidden="true" class="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                    <path fill="currentColor" fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.38 7.03a9 9 0 1 1 1.41-1.41l5.68 5.67-1.42 1.42z" clip-rule="evenodd">
                    </path>
                </svg>
                <a href="" className="nav-right text-white ml-5 font-medium">
                    <span>Kids</span>
                </a>
                {/* Notifications Icon */}
                <div className="nav-right cursor-pointer relative">
                    <div
                    onMouseEnter={notificationHandleMouseEnter}
                    onMouseLeave={notificationHandleMouseLeave}>
                        <svg viewBox="0 0 24 24" width="24" height="24" data-icon="BellMedium" data-icon-id=":Raskiau:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                            <path fill="currentColor" fill-rule="evenodd" d="M13 4.07A7 7 0 0 1 19 11v4.25q1.58.12 3.1.28l-.2 2a93 93 0 0 0-19.8 0l-.2-2q1.52-.15 3.1-.28V11a7 7 0 0 1 6-6.93V2h2zm4 11.06V11a5 5 0 0 0-10 0v4.13a97 97 0 0 1 10 0m-8.37 4.24C8.66 20.52 10.15 22 12 22s3.34-1.48 3.37-2.63c.01-.22-.2-.37-.42-.37h-5.9c-.23 0-.43.15-.42.37" clip-rule="evenodd">
                            </path> 
                        </svg>
                    </div>  
                    {/* Notifications Containers */}
                    <div
                    onMouseEnter ={notificationHandleMouseEnter}
                    onMouseLeave ={notificationHandleMouseLeave}
                    className={`absolute top-12.5 right-0 w-[410px] h-[450px] bg-black overflow-y-auto transition-all duration-100 ease-in-out ${notificationVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <ul className=''>
                            <li className='flex items-center'>
                                <div>
                                    <a href="" className=''>
                                        <img src={noti5} alt="" className='noti-photo' />
                                    </a>
                                </div>
                                <div className='noti-content'>
                                    <div className='noti-text text-[15px]'>
                                        <div>New Arrival</div>
                                        <div>The Heart of Yiwha: Of Love &</div>
                                        <div>Vengeance</div>
                                    </div>
                                    <div className='text-[#808080] text-[12px] font-medium'>1 week ago</div>
                                </div>
                            </li>
                            <li className='flex items-center'>
                                <div>
                                    <a href="" className=''>
                                        <img src={noti6} alt="" className='noti-photo' />
                                    </a>
                                </div>
                                <div className='noti-content'>
                                    <div className='noti-text'>
                                        <div>Now Available</div>
                                        <div>Live Event</div>
                                    </div>
                                    <div className='text-[#808080] text-[12px] font-medium'>3 weeks ago</div>
                                </div>
                            </li>
                            <li className='flex items-center'>
                                <div>
                                    <a href="" className=''>
                                        <img src={noti1} alt="" className='noti-photo' />
                                    </a>
                                </div>
                                <div className='noti-content'>
                                    <div className='noti-text'>
                                        <div>Top 10 TV Shows: Thailand</div>
                                        <div>See what's popular.</div>
                                    </div>
                                    <div className='text-[#808080] text-[12px] font-medium'>3 weeks ago</div>
                                </div>
                            </li>
                            <li className='flex items-center'>
                                <div>
                                    <a href="" className=''>
                                        <img src={noti2} alt="" className='noti-photo' />
                                    </a>
                                </div>
                                <div className='noti-content'>
                                    <div className='noti-text'>
                                        <div>New Arrival</div>
                                        <div>100 Meters</div>
                                    </div>
                                    <div className='text-[#808080] text-[12px] font-medium'>3 weeks ago</div>
                                </div>
                            </li>
                            <li className='flex items-center'>
                                <div>
                                    <a href="" className=''>
                                        <img src={noti7} alt="" className='noti-photo' />
                                    </a>
                                </div>
                                <div className='noti-content'>
                                    <div className='noti-text'>
                                        <div>Netflix Lookahead</div>
                                        <div>Explore what's coming soon.</div>
                                    </div>
                                    <div className='text-[#808080] text-[12px] font-medium'>3 weeks ago</div>
                                </div>
                            </li>
                            <li className='flex items-center'>
                                <div>
                                    <a href="" className=''>
                                        <img src={noti4} alt="" className='noti-photo' />
                                    </a>
                                </div>
                                <div className='noti-content'>
                                    <div className='noti-text'>
                                        <div>Ranma 1/2</div>
                                        <div>Watch an all new episode now.</div>
                                    </div>
                                    <div className='text-[#808080] text-[12px] font-medium'>3 weeks ago</div>
                                </div>
                            </li>
                            <li className='flex items-center'>
                                <div>
                                    <a href="" className=''>
                                        <img src={noti3} alt="" className='noti-photo' />
                                    </a>
                                </div>
                                <div className='noti-content'>
                                    <div className='noti-text'>
                                        <div>Hypnotic</div>
                                        <div>Watch an all new episode now.</div>
                                    </div>
                                    <div className='text-[#808080] text-[12px] font-medium'>3 weeks ago</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* user-container */}
                <div onMouseEnter={userHandleMouseEnter}
                    onMouseLeave={userHandleMouseLeave}
                    className='relative group flex items-center'>
                    <div className="mr-2">
                        <a href="">
                            <img src={avatarNetflix} alt="" className="w-8 h-8 group-hover:scale-105 duration-500"/>
                        </a>
                    </div>
                    <span className="group-hover:rotate-180 duration-300 ease-in-out">
                        <IoMdArrowDropdown />
                    </span>
                    <div onMouseEnter={userHandleMouseEnter}
                    onMouseLeave={userHandleMouseLeave} className={`absolute w-[220px] top-12.5 right-0 bg-black/90 transition-all duration-100 ease-in-out ${userVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <ul className='py-[10px]'>
                            <li className='py-[5px] px-[10px]'>
                                <a href="" className='flex items-center'>
                                    <img src={user1} alt="" className='w-8 h-8 mr-2.5 rounded-md'/>
                                    <span className='user-context'>Norrapron</span>
                                </a>
                            </li>
                            <li className='py-[5px] px-[10px]'>
                                <a href="" className='flex items-center'>
                                    <img src={user2} alt="" className='w-8 h-8 mr-2.5 rounded-md'/>
                                    <span className='user-context'>Orlida</span>
                                </a>
                            </li>
                            <li className='py-[5px] px-[10px]'>
                                <a href="" className='flex items-center'>
                                    <img src={user3} alt="" className='w-8 h-8 mr-2.5 rounded-md'/>
                                    <span className='user-context'>LatteMewo</span>
                                </a>
                            </li>
                            <li className='py-[5px] px-[10px]'>
                                <a href="" className='flex items-center'>
                                    <img src={user4} alt="" className='w-8 h-8 mr-2.5 rounded-md'/>
                                    <span className='user-context'>Nopsimaya</span>
                                </a>
                            </li>
                        </ul>

                        <div className='!bg-[#ccc] w-[220px] h-[0.25px]'></div>

                        {/* Second-container */}
                        <ul className='py-[10px]'>
                            <li className='py-[5px] px-[10px]'>
                                <a href="" className='flex items-center'>
                                    <svg className='help-user' viewBox="0 0 24 24" width="24" height="24" data-icon="PencilMedium" data-icon-id=":r1c:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                        <path fill="currentColor" fill-rule="evenodd" d="M19.121 1.707a3 3 0 0 0-4.242 0l-1.586 1.586-.707.707-11 11A2 2 0 0 0 1 16.414V21a2 2 0 0 0 2 2h4.586A2 2 0 0 0 9 22.414l11-11 .707-.707 1.586-1.586a3 3 0 0 0 0-4.242zM15.586 7 14 5.414l-11 11V19a2 2 0 0 1 2 2h2.586l11-11L17 8.414 6.707 18.707l-1.414-1.414zm.707-3.879a1 1 0 0 1 1.414 0l3.172 3.172a1 1 0 0 1 0 1.414L20 8.586 15.414 4z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <span className='user-context'>Manage Proflies</span>
                                </a>
                            </li>
                            <li className='py-[5px] px-[10px]'>
                                <a href="" className='flex items-center'>
                                    <svg className='help-user' viewBox="0 0 24 24" width="24" height="24" data-icon="ProfileArrowMedium" data-icon-id=":r21:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                        <path fill="currentColor" fill-rule="evenodd" d="M6 1a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h3.59l-1.3 1.3 1.42 1.4 3-3a1 1 0 0 0 0-1.4l-3-3-1.42 1.4L9.6 19H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3v2h3a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.6 3.7a5 5 0 0 1-2.9.8 5 5 0 0 1-2.9-.8l-1.2 1.6a7 7 0 0 0 4.1 1.2c1.58 0 3.07-.43 4.1-1.2z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <span className='user-context'>Transfer Profiles</span>
                                </a>
                            </li>
                            <li className='py-[5px] px-[10px]'>
                                <a href="" className='flex items-center'>
                                    <svg className="help-user" viewBox="0 0 24 24" width="24" height="24" data-icon="UserMedium" data-icon-id=":r26:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                        <path fill="currentColor" fill-rule="evenodd" d="M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 0A5 5 0 1 1 7 5a5 5 0 0 1 10 0M4 21a8 8 0 1 1 16 0v.51q-.66.09-1.72.19a68 68 0 0 1-12.56 0q-1.06-.1-1.72-.2zm17.15 2.38-.15-1za1 1 0 0 0 .85-1V21a10 10 0 0 0-20 0v1.39c0 .5.36.91.85.99l.15-1-.15 1h.05l.14.03a41 41 0 0 0 2.5.28 70 70 0 0 0 12.93 0 62 62 0 0 0 2.49-.28l.14-.02z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <span className='user-context'>Account</span>
                                </a>
                            </li>
                            <li className='py-[5px] px-[10px]'>
                                <a href="" className='flex items-center'>
                                    <svg className='help-user' viewBox="0 0 24 24" width="24" height="24" data-icon="CircleQuestionMarkMedium" data-icon-id=":r2f:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                        <path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 8c-1.317 0-2 .743-2 1.5H8C8 7.257 10.003 6 12 6s4 1.257 4 3.5c0 1.349-1.08 2.268-2.178 2.68-.265.1-.49.25-.636.411-.14.156-.186.292-.186.409v1h-2v-1c0-1.435 1.168-2.335 2.119-2.692.729-.274.881-.66.881-.808 0-.757-.683-1.5-2-1.5m1.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <span className='user-context'>Help Center</span>
                                </a>
                            </li>
                        </ul>

                        <div className='!bg-[#ccc] w-[220px] h-[0.25px]'></div>
                        {/*Last container*/}

                        <div className='text-[13px] py-[10px] px-[10px] flex items-center justify-center text-white'>
                            <a href="">Sign out of Netflix</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
