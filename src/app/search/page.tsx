'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/images/Empty State.png'
import building from '../../../public/images/Placeholder Image.png'
import building2 from '../../../public/images/Placeholder Image (1).png'
import building3 from '../../../public/images/Placeholder Image (2).png'
import man from '../../../public/images/Ellipse 1.png'

const Search = () => {
    const [showSelect,setShowSelect] = useState<boolean>(true)
    return (
        <main className='w-full min-h-screen py-6 dark:bg-[#171717] px-4 gap-y-10'>
            <div className="fixed w-full h-full flex justify-center items-center left-0 top-0 bg-[#1d3045f4]">
                <div className='w-[90%] h-auto gap-y-6 flex flex-col rounded-md bg-white py-5 px-4'>
                    <h2 className='text-center text-xl'>Review Location</h2>
                    <h2 className='font-semibold text-center text-xl'>Bonny and Clyde Street, Lagos.</h2>
                    <div>
                        <div
                            onClick={() => alert('')}
                            className="custom-select flex items-center justify-between outline-none bg-[#F3F7FE]"
                            style={{ width: "100%", padding: '10px 10px', color: 'gray', border: '1px solid #eef5ff' }}
                        >
                        <span>Select Amenities</span>
                        <span className='fa-solid fa-angle-down'></span>
                        </div>
                        {
                            showSelect && (
                                <div>

                                </div>
                            )
                        }
                    
                    </div>
                    <div className='font-bold'>
                        Rate location
                    </div>
                    <div className='flex gap-x-2'>
                        {
                            [...Array(5)].map((x, i) => (
                                <i className='fa-solid fa-star text-yellow-400 text-xl' key={i}></i>
                            ))
                        }

                    </div>
                    <div>
                        Write Review
                    </div>
                    <div>
                        <textarea defaultValue={'Major roads here are motorable and the power supply is good. For those who work in Lekki, living in Ikota is a plus because they will  experience little or no traffic to and from work. The neighbourhood is serene and highly accessible.'} name="" id="" cols={30} rows={8} className='w-full px-3 py-3 outline-none border-[1px] rounded-md'></textarea>
                    </div>
                    <div>
                        <input type="checkbox" className='mr-2' /> Post as Anonymous
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-5 ">
                <div className=''>
                    <div className='w-full mb-4'>
                        <input placeholder="email" type="search" defaultValue='Oba-ajao, Lekki' className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                    </div>
                    <p>Oba-Ajao, Lekki</p> <br />
                    <p className='mb-4 text-sm'>"450" Reviews(People are raving about this location)</p>
                    <div className="flex flex-col m-auto no-scrollbar p-auto mt-7 md:w-[90%]">
                        <div

                            className="flex overflow-scroll no-scrollbar pb-10 no-scrollbar"
                        >
                            <div
                                className="flex gap-3 flex-nowrap lg:ml-[120px] md:ml-0 ml-5 mr-10 whitespace-nowrap"
                            >
                                {
                                    [...Array(7)].map((_x, i) => (
                                        <div key={i} className='border-[1px] text-sm px-3 py-1 rounded-md'>
                                            Schools
                                        </div>

                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-row justify-around gap-x-2'>
                    <button type="submit" className='w-fit px-5 h-12 text-white rounded-md bg-[#3366FF] text-sm'>LEAVE A REVIEW</button>
                    <button type="submit" className='w-fit px-5 h-12 text-white rounded-md border-[#3366FF] text-sm border-[1px]'><i className='fa-solid fa-bookmark text-[#3366ff]'></i></button>
                    <button type="submit" className='w-fit px-5 h-12 text-white rounded-md border-[#3366FF] text-sm border-[1px]'><i className='fa-solid fa-share text-[#3366ff]'></i></button>
                </div>
            </div>

            <div className='flex flex-col gap-y-4 px-4 mt-10 items-center py-4'>
                <div className='w-[90%] h-auto'>
                    <Image
                        src={logo}
                        alt="winterman"
                        quality={100}
                        sizes={'100vw'}
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div>Ooops! No review yet.</div>
                <div className='w-[60%] mx-auto'>
                    <button type="submit" className='w-full px-5 h-12 text-white rounded-md bg-[#3366FF] text-sm'>LEAVE A REVIEW</button>
                </div>
            </div>
            <div>
                <div className="flex flex-col m-auto no-scrollbar p-auto mt-7 md:w-[90%]">
                    <div

                        className="flex overflow-scroll no-scrollbar pb-10 no-scrollbar"
                    >
                        <div
                            className="flex gap-x-3 flex-nowrap lg:ml-[120px] md:ml-0 ml-5 mr-10 whitespace-nowrap"
                        >
                            {
                                [...Array(3)].map((_x, i) => {
                                    return i == 1 ? (
                                        <div key={i} className='min-w-[160px] flex flex-col justify-between gap-y-1 text-sm py-1 rounded-md'>
                                            <div className='h-[49%]'>
                                                <Image
                                                    src={building2}
                                                    alt="winterman"
                                                    quality={100}
                                                    sizes={'100vw'}
                                                    className="object-cover rounded-lg w-[100%] h-auto"
                                                />
                                            </div>
                                            <div className='h-[49%]'>
                                                <Image
                                                    src={building3}
                                                    alt="winterman"
                                                    quality={100}
                                                    sizes={'100vw'}
                                                    className="object-cover rounded-lg w-[100%] h-auto"
                                                />
                                            </div>
                                        </div>) : (
                                        <div key={i} className='min-w-[175px] text-sm py-1 rounded-md'>
                                            <Image
                                                src={building}
                                                alt="winterman"
                                                quality={100}
                                                sizes={'100vw'}
                                                className="object-cover rounded-lg w-full h-auto"
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                {
                    [...Array(3)].map((x, i) => (
                        <div className='mb-8' key={i}>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-x-3'>
                                    <div className='w-[24px]'>
                                        <Image
                                            src={man}
                                            alt="winterman"
                                            quality={100}
                                            sizes={'100vw'}
                                            className="object-cover rounded-lg w-full h-auto"
                                        />
                                    </div>
                                    <span className='font-semibold'>James T.</span>
                                    <span className='text-gray-500'>5 months ago</span>
                                </div>
                                <div className='flex gap-x-2'>
                                    <i className='fa-solid fa-star text-yellow-600'></i>
                                    <span>4.0</span>
                                </div>
                            </div>
                            <p className='py-4 text-justify leading-loose'>
                                There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.
                            </p>
                            <div className='flex justify-start'>
                                <div className='flex items-center gap-x-6'>
                                    <span >
                                        <i className='fa-solid fa-thumbs-up mr-1'></i>
                                        23
                                    </span>
                                    <span >
                                        <i className='fa-solid fa-thumbs-down mr-1'></i>
                                        23
                                    </span>
                                    <span >
                                        <i className='fa-solid fa-envelope mr-1'></i>
                                        23
                                    </span>
                                </div>

                            </div>
                            <div className='flex mt-5 items-center border-[1px] py-2 px-2'>
                                <textarea className='w-[75%] outline-none' name="" id="" cols={10} rows={3}></textarea>
                                <button type="submit" className='w-[25%] h-12 text-white rounded-md bg-[#3366FF] text-sm'>POST</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default Search