import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import {UilAngleLeftB} from "@iconscout/react-unicons";
import { UilArrowCircleDown } from '@iconscout/react-unicons'



// Import Swiper styles



const Home = () => {
  const [data, setdata] = useState([]);
    const [expanded, setExpanded] = useState(false)
    const dataForDisplay = expanded ? data : data.slice(0, 2)
    const Datacat = (str, num) => {
        if (str.length > num) {
            return str.substring(0, num) + "...";
        }
        return str;
    }
  useEffect(() => {
    const check = localStorage.getItem("datap");
    if (check) {
      setdata(JSON.parse(check));
    } else {
      const options = {
        method: "GET",
        url: "https://free-news.p.rapidapi.com/v1/search",
        params: {q: "Elon Musk", lang: "en"},
        headers: {
          "X-RapidAPI-Host": "free-news.p.rapidapi.com",
          "X-RapidAPI-Key":
            "a36645c39cmsh442eca47f280340p14c14cjsnda822bd0f627",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          localStorage.setItem("datap", JSON.stringify(response.data.articles));
          console.log(response.data["articles"], "ddd");
          setdata(response.data["articles"]); // save data to local storage
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, []);

  return (
    <div>
      
      <div className='  flex items-center text-center  '>

        <h1 className=' font-black text-4xl'>HOT NEWS</h1>
        <div className=' w-52 border ml-4 border-[#ABA294] '></div>
      </div>
          <section>
             
              <div className=" grid mr-5   lg:grid-cols-2 gap-10 mt-14 drop-shadow-2xl ">
          
                  {dataForDisplay &&
                      dataForDisplay.map((item, index) => {
                return (
            
                    
                    <div key={index} className=' hover:shadow-none  shadow-2xl drop-shadow-2xl'>
                        <div className="">
                        {item.media ? (
                          <img
                            className="w-full mb-8 rounded-md "
                            src={item.media}
                            alt="text"
                          />
                        ) : (
                          <img src=" https://via.placeholder.com/150" alt="" />
                        )}
                      </div>
                      <div>
                        <span className=" text-2xl mt-16">
                                {item.published_date}
                        </span>
                        <p className="mt-3 text-lg font-medium leading-6">
                          <a
                            href="./blog-post.html"
                            className=" font-black"
                          >
                                    { item.title }{" "}
                          </a>
                        </p>
                        <p className="mt-2 text-lg ">
                                {Datacat(item.summary, 100)}
                        </p>
                    </div>
                   
                    </div>
             
                      
                        );
                       
              })}
                  
                 
              </div>
        <button className="bn47 ml-60   drop-shadow-2xl text-center font-black text-2xl w-40 h-20  m-10 " type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'show More'}
        </button>
      </section>
    </div>
  );
};

export default Home;
