// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import { UilClockTwo } from '@iconscout/react-unicons'
// import { UilEdit } from '@iconscout/react-unicons'
// export const Home = () => {
//     const [data, setdata] = useState();
//     // const trycat = (str, num) => {
//     //     if (str.length > num) {
//     //         return str.substring(0, num) + "...";
//     //     }
//     //     return str;
//     //  }
//     useEffect(() => {
//         const check = localStorage.getItem('ddata')
//         if (check) {
//             setdata(JSON.parse(check))
//         } else {
//             const options = {
//                 method: 'GET',
//                 url: 'https://free-news.p.rapidapi.com/v1/search',
//                 params: { q: 'Policy  ', lang: 'en' },
//                 headers: {
//                     'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
//                     'X-RapidAPI-Key': 'cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504'
//                 }
//             };

//             axios.request(options).then(function (response) {
               
              
//                 localStorage.setItem('ddata', JSON.stringify(response.data)
//                 ['articles'] )
//                 setdata(response.data['articles']);

//                 console.log(response.data['articles'])   ;
//                 ; // save data to local storage
//             }).catch(function (error) {
//                 console.error(error);

//             });
         
//         }
//     }, [])

//     return (
//         <div className='bg-[#E7D1AA]'>

//             <h1 className=' text-5xl text-center font-extrabold'>See the latest news</h1>

//             <section className="  ">
//                 <div className="container p-5 py-12 mx-auto md:p-20 max-w-7xl">
//                     <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
//                         {data && data.map((item, index) => {
//                             return (<div key={index}>

//                                 <div className="flex w-full">
//                                     <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform  shadow-2xl rounded-xl md:w-80 md:hover:-translate-x-16 md:hover:-translate-y-8">

//                                         <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={item.media} />
//                                         <div className="px-6 py-8 bg-orange-200  ">
//                                             <div className='  flex space-x-1' >

//                                                 <UilEdit size="20" color="red" />

//                                                 <h2 className='  '>
//                                                     {item.title}</h2></div>
//                                             <div className=' flex  space-x-2'>
//                                                 <UilClockTwo size="20" color="red" />
//                                                 <h1></h1>

//                                             </div>

//                                             <h4 className="mt-4 text-2xl font-semibold text-neutral-600">

//                                                 <span className="">{item.summary
//                                                 }</span>
//                                             </h4>
//                                             <p className="mt-4 text-base font-normal text-gray-500 leading-relax">{item.description}</p>

//                                         </div>
//                                     </div>



//                                 </div>
//                             </div>)
//                         })
//                         }













//                     </div>
//                 </div>
//             </section>

//         </div>

//     )
// }
