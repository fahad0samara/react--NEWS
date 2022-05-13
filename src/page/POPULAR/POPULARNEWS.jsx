import React, {useEffect, useState} from "react";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import POPULAR2 from "./POPULAR2";
// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";
import FatchData from "./FatchData";

const POPULARNEWS = () => {
  const [data, setdata] = useState();
  const [error, seterror] = useState( false );

  useEffect(() => {
    const check = localStorage.getItem("data");
    if (check) {
      setdata(JSON.parse(check));
    } else {
      const options = {
        method: "GET",
        url: "https://free-news.p.rapidapi.com/v1/search",
        params: {q: "Policy  ", lang: "en"},
        headers: {
          "X-RapidAPI-Host": "free-news.p.rapidapi.com",
          "X-RapidAPI-Key":
            "cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504",
        },
      };

        axios
            .request(options)
            .then(function (response) {
                localStorage.setItem(
                    "data",
                    JSON.stringify(response.data.articles)
                );
               
                setdata(response.data["articles"]); // save data to local storage
            })
            .catch(function (error) {
                console.error(error);
            });
        
      }
      
     
  }, []);
  return (
    <div className="ml-8  ">
      <div className="  flex items-center text-center mb-8 ">
        <h1 className=" font-black text-4xl">POPULAR NEWS</h1>
        <div className=" w-52 border ml-4 border-[#ABA294] "></div>
      </div>

      <div className=" mt-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={"mySwiper"}
              >
                  {error && <div className="text-center text-2xl">{error}</div>}
          {data &&
            data.map((item, index) => {
              return (
                <SwiperSlide>
                  <FatchData key={index} item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <span className="">
        {" "}
        <POPULAR2 />
      </span>
    </div>
  );
};

export default POPULARNEWS;
