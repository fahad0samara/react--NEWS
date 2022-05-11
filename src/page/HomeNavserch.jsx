import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
const HomeNavserch = () => {
  return (
      <div className='bg-[#E7D1AA] text-[#191618] '>
     
       
          <hr className=' w-1/3 border border-black ' />
          <blockquote class="text-6xl pt-9  font-black italic text-center text-slate-900">
          
               TODAY
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block">
                  <span class="relative text-white">NEWS</span>
              </span>
          
             
          </blockquote>
         
          <div class="p-5  overflow-auto   overscroll-none whitespace-nowrap  ">
              <ul class="inline-flex items-center list-none">
                  <section class=" mx-auto rounded-md"/>
                  <div class="  flex items-center text-center">
                     
                      <span>
                          <UilSearch size='40'/>
                      </span>

                      <input type="text" class="w-full py-3 pl-10 pr-4   rounded-md  bg-transparent  focus:border-b-2 border-red-500   focus:outline-none placeholder:uppercase text-xl font-bold " placeholder="Search..."  />
                      
                      </div>
                      <section/>
                  <li>
                      <a href="#" class="px-4 py-1 mr-1 text-xl  transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">ACADEMIC</a>
                  </li>
                  <li>
                      <a href="#" class="px-4 py-1 mr-1 text-xl font-black   transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600 active:text-black">HUMAN & ENVIRONMENT</a>
                  </li>
                  <li>
                      <a href="#" class="px-4 py-1 mr-1 text-xl  transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">SPORT</a>
                  </li>
                  <li>
                      <a href="#" class="px-4 py-1 mr-1 text-xl  transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">POLITICAL</a>
                  </li>
                  <li>
                      <a href="#" class="px-4 py-1 mr-1 text-xl 
                      transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">MUSIC</a>
                  </li>
                  <li>
                      <a href="#" class="px-4 py-1 mr-1 text-xl 
                       transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">PINANGAL MARKET</a>
                  </li>
                  <li>
                      <a href="#" class="px-4 py-1 mr-1 text-xl  transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">OTHER</a>
                  </li>
                  
                  
                  
              </ul>
          </div>
      </div>
  )
}

export default HomeNavserch




