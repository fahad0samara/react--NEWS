import React from 'react'

const Footor = () => {
  return (
    <div>
      <footer className="flex justify-center px-4 bg-[#E7D1AA]    ">
        <div className="container py-6">
          <h1 className="text-lg font-bold text-center lg:text-2xl">
            Join 31,000+ other and never miss <br /> out on new tips, tutorials,
            and more.
          </h1>

          <div className="flex justify-center mt-6">
            <div className=" border border-black rounded-md focus-within:ring   focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:focus-within:border-blue-300">
              <div className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  className="p-2 m-1  text-2xl bg-transparent appearance-none focus:outline-none focus:placeholder-transparent"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-200 transform -skew-x-2  bg-orange-500 rounded-md dark:hover:bg-gray-600  lg:w-auto hover:bg-gray-700">
                  subscribe
                </button>
              </div>
            </div>
          </div>

          <hr
            className="h-px mt-6 border-gray-300 border-none 
            "
          />

          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <a
                href="#"
                className="text-xl font-bold text-gray-800 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Lo.News
              </a>
            </div>

            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                <a
                  href="#"
                  className="px-4 text-sm font-medium  hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  About
                </a>
                <a
                  href="#"
                  className="px-4 text-sm font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="px-4 text-sm font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  News
                </a>
                <a
                  href="#"
                  className="px-4 text-sm font-medium hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footor