import React, {useEffect, useState} from "react";
import axios from "axios";
import { UilClockTwo } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const HotNews = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    const check = localStorage.getItem("data");
    if (check) {
      setdata(JSON.parse(check));
    } else {
      const options = {
        method: "GET",
        url: "https://culture-news-web-scrapper.p.rapidapi.com/news",
        headers: {
          "X-RapidAPI-Host": "culture-news-web-scrapper.p.rapidapi.com",
          "X-RapidAPI-Key":
            "cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504",
        },
      };

      axios
        .request(options)
        .then(function (response) {
        
          setdata(response.data);
         
        })
        .catch(function (error) {
         
        });
     
    }
  }, []);
  // const trycat = (str, num) => {
  //   if (str.length > num) {
  //     return str.substring(0, num) + "...";
  //   }
  //   return str;
  // };

  return (
    <div>
      <div className='  flex items-center text-center '>

        <h1 className=' font-black text-4xl'>HOT NEWS</h1>
        <div className=' w-52 border ml-4 border-[#ABA294] '></div>
      </div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
       
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
         
            {data && data.map((item, index) => {
              return (
                <SwiperSlide> 
                  <div key={index.id}>
                    
                    <a class="block" href="{item.url}">
                      <img
                        class=" object-center w-full h-56 shadow-xl rounded-xl"
                        src={item.url}
                        alt=""
                      />
                      {item.url}
                      <div class="p-4">
                        <h5 class="text-xl font-bold text-gray-900">
                          {(item.description, 200)}
                        </h5>
                        <p class="mt-2 font-black text-center m-2 ">
                          {
                            (item.body, 250)}
                        </p>
                      </div>
                    </a>
                </div>
              </SwiperSlide>
              
              )
            
            
            })}
          
          
      
        </Swiper>
      </>
    </div>
  );
};

export default HotNews;
