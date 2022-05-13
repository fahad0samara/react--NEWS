import React from 'react'
import Por_Home from '../right_HOTNEWS/Por_Home'
import POPULARNEWS from '../left_POPULAR/POPULARNEWS'


const HomForNews = () => {
  return (
    <div className=' grid grid-cols-1  md:grid-cols-2  gap-10 bg-[#E7D1AA]   '>
      <div className='border-x-4 m-3  border-[#0d0d0d] bg-[#E7D1AA]'> <POPULARNEWS /></div>
      <div className='ml-5 md:ml-0 border-r-4   md:mr-8   border-[#0d0d0d]   '>

        <Por_Home/>
      </div>


    </div>
  )
}

export default HomForNews
