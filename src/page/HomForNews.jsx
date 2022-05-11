import React from 'react'
import HotNews from './HotNews.jsx'
import POPULARNEWS from './POPULARNEWS'

const HomForNews = () => {
  return (
    <div className=' grid grid-cols-2   bg-[#E7D1AA]   '>
      <span className=''> <POPULARNEWS /></span>

     
      <span className=''> <HotNews/></span>
      </div>
  )
}

export default HomForNews
