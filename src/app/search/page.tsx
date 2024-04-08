import Image from 'next/image'
import React from 'react'
import logo from '../../../public/images/Empty State.png'
import building from '../../../public/images/Placeholder Image.png'
import building2 from '../../../public/images/Placeholder Image (1).png'
import building3 from '../../../public/images/Placeholder Image (2).png'
import man from '../../../public/images/Ellipse 1.png'

const Search = () => {
    return (
        <main className='w-full min-h-screen py-4 dark:bg-[#171717] px-4 gap-y-10'>
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
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default Search