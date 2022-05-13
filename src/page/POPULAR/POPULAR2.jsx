import React, {useEffect, useState} from "react";
import axios from "axios";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FatchData from "./FatchData";
import { UilArrowCircleRight } from "@iconscout/react-unicons";

const HotNews = () => {
  const Datacat = (str, num) => {
    if (str.length > num) {
      return str.substring(0, num) + "...";
    }
    return str;
  }
  const [data, setdata] = useState();

  useEffect(() => {
    const check = localStorage.getItem("data2");
    if (check) {
      setdata(JSON.parse(check));
    } else {
      const options = {
        method: "GET",
      
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: { q: 'BUSINESS', lang: 'en' },
        headers: {
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
          'X-RapidAPI-Key': 'cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504'
        }
      };

      axios.request(options).then(function (response) {
        localStorage.setItem('data2', JSON.stringify(response.data.articles))

        setdata(response.data['articles'])

          ;


        ; // save data to local storage
      }).catch(function (error) {
        console.error(error);

      });

    }
  }, []);
 

  return (
    <div className=" mr-5">
     
      <div className="mt-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
       
          
          modules={[Autoplay, Pagination, Navigation]}
          classNameName="mySwiper"
        >
          <UilArrowCircleRight />
            {data && data.map((item, index) => {
              return (

                <SwiperSlide> 
                 
                  <FatchData className=' ' key={index} item={item}/>
              </SwiperSlide>
              
              )
            
            
            })}
          
          
      
        </Swiper>
      </div>
    
    </div>
  );
};

export default HotNews;
