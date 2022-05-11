import React, { useEffect, useState } from 'react'
import axios from "axios";
import { UilClockTwo } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
export const Home = () => {
    const [data, setdata] = useState();
    const trycat = (str, num) => {
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
                url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI',
                params: { pageNumber: '1', pageSize: '14', withThumbnails: 'true', location: 'us' },
                headers: {
                    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
                    'X-RapidAPI-Key': 'a36645c39cmsh442eca47f280340p14c14cjsnda822bd0f627'
                }
            };

            axios.request(options).then(function (response) {
                setdata(response.data['value']);
                localStorage.setItem('data', JSON.stringify(response.data['value']))
                console.log(response.data['value']);
                ; // save data to local storage
            }).catch(function (error) {
                console.error(error);

            });
            console.log(data);
        }
    }, [])

    return (
        <div>



            <section class="  ">
                <div class="container p-5 py-12 mx-auto md:p-20 max-w-7xl">
                    <div class=" grid grid-cols-3 ">
                        {data && data.map((item, index) => {
                            return (<div key={index}>

                                <div class="flex w-full">
                                    <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform  shadow-2xl rounded-xl md:w-80 md:hover:-translate-x-16 md:hover:-translate-y-8">

                                        <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={item.image.url} />
                                        <div class="px-6 py-8 bg-orange-200  ">
                                            <div className='  flex space-x-1' >

                                                <UilEdit size="20" color="red" />

                                                <h2 className='  '>
                                                    {item.provider.name}</h2></div>
                                            <div className=' flex  space-x-2'>
                                                <UilClockTwo size="20" color="red" />
                                                <h1>{item.datePublished}</h1>

                                            </div>

                                            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">

                                                <span class="">{trycat(item.title, 40
                                                )}</span>
                                            </h4>
                                            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">{trycat(item.description,120)}</p>

                                        </div>
                                    </div>



                                </div>
                            </div>)
                        })
                        }













                    </div>
                </div>
            </section>

        </div>

    )
}
