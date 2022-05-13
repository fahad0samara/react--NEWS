import React from 'react'
import Por_Home from '../HOTNEWS/Por_Home'
import POPULARNEWS from '../POPULAR/POPULARNEWS'


const HomForNews = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2  gap-10 bg-[#E7D1AA]   '>
      <span className='border-x-4  h-screen border-[#0d0d0d] bg-[#E7D1AA]'> <POPULARNEWS /></span>
      <div className=' border-r-4  mr-8  border-[#0d0d0d]   '>

        <Por_Home/>
      </div>


    </div>
  )
}

export default HomForNews
