import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilAngleLeftB } from '@iconscout/react-unicons'
import { UilAngleRightB } from '@iconscout/react-unicons'
const sidebarleft = () => {
    var slider = document.getElementById('sidebar');
    slider.scrollLeft = slider.scrollLeft - 500

}
const sidebarRI = () => {
    var slider = document.getElementById('sidebar');
    slider.scrollLeft = slider.scrollLeft + 500

}
const HomeNavserch = () => {
    return (
        <div className='bg-[#E7D1AA] text-[#191618] '>


            <hr className=' w-1/3 border border-black ' />
            <blockquote className="text-6xl pt-9  font-black italic text-center text-slate-900">

                TODAY
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block">
                    <span className="relative text-white">NEWS</span>
                </span>
            </blockquote>
            <div className=' group'>

                <UilAngleRightB className=' bg-white rounded-full hidden absolute z-10 cursor-pointer group-hover:block' onClick={sidebarleft} />
                <div id={'sidebar'} className="w-full   h-full overflow-x-scroll   whitespace-nowrap  scroll-smooth scrollbar-hide relative   ">
                    <ul className="inline-flex items-center list-none">
                        <section className=" mx-auto rounded-md" />
                        <div className="  flex items-center text-center">

                            <span>
                                <UilSearch size='40' />
                            </span>

                            <input type="text" className="w-full py-3 pl-10 pr-4   rounded-md  bg-transparent  focus:border-b-2 border-red-500   focus:outline-none placeholder:uppercase text-xl font-bold " placeholder="Search..." />

                        </div>
                        <section />
                        <li>
                            <a href="#" className="px-4 py-1 mr-1 text-xl  transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">ACADEMIC</a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-1 mr-1 text-xl font-black   transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600 active:text-black">HUMAN & ENVIRONMENT</a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-1 mr-1 text-xl  transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">SPORT</a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-1 mr-1 text-xl  transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">POLITICAL</a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-1 mr-1 text-xl 
                      transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">MUSIC</a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-1 mr-1 text-xl 
                       transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">PINANGAL MARKET</a>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-1 mr-1 text-xl  transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">OTHER</a>
                        </li>



                    </ul>

                </div>
                <UilAngleLeftB className='right-0 hidden  cursor-pointer    absolute z-10 group-hover:block bg-white rounded-full ' onClick={sidebarRI} />
            </div>

        </div>
    )
}

export default HomeNavserch




