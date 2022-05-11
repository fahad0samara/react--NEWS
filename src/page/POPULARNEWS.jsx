import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";
const POPULARNEWS = () => {
    const [data, setdata] = useState();
    const Datacat = (str, num) => {
     if (str.length > num) {
         return str.substring(0, num) + "...";
   }
    return str;
 }
    useEffect(() => {
        const check = localStorage.getItem('data')
        if (check) {
            setdata(JSON.parse(check))
        } else {
            const options = {
                method: 'GET',
                url: 'https://free-news.p.rapidapi.com/v1/search',
                params: { q: 'Policy  ', lang: 'en' },
                headers: {
                    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
                    'X-RapidAPI-Key': 'cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504'
                }
            };

            axios.request(options).then(function (response) {
                localStorage.setItem('data', JSON.stringify(response.data. articles))
                
                setdata(response.data['articles'])
               
              ;

               
                ; // save data to local storage
            }).catch(function (error) {
                console.error(error);

            });

        }
    }, [])
  return (
      <div className='ml-8 '>
          <div className='  flex items-center text-center mb-8 '>
       
          <h1 className=' font-black text-4xl'>POPULAR NEWS</h1>
          <div className=' w-52 border ml-4 border-[#ABA294] '></div>
          </div>
          <di className=' mt-24'>
              <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                  }}

                 
                  modules={[Autoplay]}
                  className={'mySwiper'}
              >
                  {data && data.map((item, index) => {
                      return (
                          <SwiperSlide>
                              <div key={index.id}></div>
                              <a href="#" class="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl  ">


                                  <img class="object-cover w-full h-96 rounded-t-lg md:h-48 md:w-48 md:rounded-none md:rounded-l-lg" src={item.media} alt="" />
                                  <div class="flex flex-col justify-between p-4 leading-normal">
                                      <h5 class="mb-2 text-2xl font-bold tracking-tight  ">{Datacat(item.title, 50)}</h5>
                                      <p class="mb-3 font-normal  ">{Datacat(item.summary, 50)}</p>
                                  </div>
                              </a>

                          </SwiperSlide>

                      )


                  })}



              </Swiper>
          
          </di>
      </div>
  );
}

export default POPULARNEWS