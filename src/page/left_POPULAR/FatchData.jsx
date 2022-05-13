import React from "react";
import { UilArrowCircleRight } from '@iconscout/react-unicons'
const Datacat = (str, num) => {
  if (str.length > num) {
    return str.substring(0, num) + "...";
  }
  return str;
};
const FatchData = ({item}) => {
  return (
     
    <div>
   
      <a
        href="#"
        className="grid md:grid-cols-2  h-80 items-center  shadow-md mr-10  "
      >
        <img
          className="object-cover h-28 md:h-full  w-screen    rounded-t-lg  "
          src={item.media}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 md:text-2xl font-bold text-center tracking-tight  ">
            {Datacat(item.title, 50)}
          </h5>
          <p className="mb-3  font-semibold ">{Datacat(item.summary, 150)}</p>
        </div>
      </a>
    </div>
  );
};

export default FatchData;
