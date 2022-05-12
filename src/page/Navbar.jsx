import React from 'react'
import Toggle from "../Toggle/Toggle";
import { UilBullseye } from '@iconscout/react-unicons'
import '../App.css'
const Navbar = () => {
  return (
      <div className='bg-[#E7D1AA] text-[#191618]' >
      <header className="body-font">
  <div className={'container mx-auto font-semibold flex flex-wrap p-5 flex-col md:flex-row items-center'}>
    <a className={'flex title-font font-medium items-center  mb-4 md:mb-0'}>
          
            <span className="ml-3 text-xl">Lo.News</span>
            
    </a>
    <nav className={'md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-10'}>
            <a className={'mr-5 hover:text-gray-900'}>HOME</a>
            <a className={'mr-5 hover:text-gray-900'}>REVIEWS</a>
            <blockquote className="   italic text-center font-bold text-slate-900">
              DAILY
          
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-orange-400/80 relative inline-block">
                <span className="relative ml-3  ">
                  <a className={' hover:text-gray-900'}> NEWS</a>
                </span>
              </span>
            

            </blockquote>
    
            <a className={'mr-5 hover:text-gray-900'}>FEATURES</a>
    </nav>
          <Toggle />
          <button className={'bn47  drop-shadow-2xl font-bold '}>
            CONTACT US
          </button>
         
  </div>
      </header>
      </div>
  )
}

export default Navbar

  