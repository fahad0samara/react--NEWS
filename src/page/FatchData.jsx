import React from 'react'
const Datacat = (str, num) => {
    if (str.length > num) {
        return str.substring(0, num) + "...";
    }
    return str;
}
const FatchData = ({item}) => {
  return (
      <div>
          <a href="#" className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl  ">


              <img className="object-cover w-full h-96 rounded-t-lg md:h-48 md:w-48 md:rounded-none md:rounded-l-lg" src={item.media} alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  ">{Datacat(item.title, 50)}</h5>
                  <p className="mb-3 font-normal  ">{Datacat(item.summary, 150)}</p>
              </div>
          </a>
      
      </div>
  )
}

export default FatchData