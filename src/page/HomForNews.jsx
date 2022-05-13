import React from 'react'
import HotNews from './HotNews.jsx'
import POPULARNEWS from './POPULARNEWS'
import Por_Home from './Por_Home'

const HomForNews = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2  gap-10 bg-[#E7D1AA]   '>
      <span className='border-x-4 ml-4 h-screen border-[#0d0d0d]'> <POPULARNEWS /></span>


      <div className=' border-r-4 grid grid-cols-1  mr-8  border-[#0d0d0d]  '>

        <Por_Home />
      </div>
      
      
      </div>
  )
}

export default HomForNews
