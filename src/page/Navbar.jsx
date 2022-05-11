import React from 'react'
import Toggle from "../Toggle/Toggle";
import { UilBullseye } from '@iconscout/react-unicons'
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
            <blockquote class="   italic text-center font-bold text-slate-900">
              DAILY
          
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-orange-400/80 relative inline-block">
                <span class="relative ml-3  ">
                  <a className={' hover:text-gray-900'}> NEWS</a>
                </span>
              </span>
            

            </blockquote>
    
            <a className={'mr-5 hover:text-gray-900'}>FEATURES</a>
    </nav>
          <Toggle />
          <button className={'inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'}>
            CONTACT US
          </button>
         
  </div>
      </header>
      </div>
  )
}

export default Navbar

  