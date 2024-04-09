'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/images/ic_logo.png'
import dark from '../../../public/images/ic_logo-dark.png'
import dash from '../../../public/images/Rectangle 32.png'
import { usePathname } from 'next/navigation'
import man from '../../../public/images/Avatar.png'
import icon from '../../../public/images/Featured icon.png'
import { UserMetadata } from '@supabase/supabase-js'
import { Session } from 'inspector'
import { Helpers } from '@/helpers'
import { useSnackbar } from 'notistack'

const Header = ({ getSession }: { getSession: UserMetadata | null }) => {
    const pathname = usePathname()
    const { enqueueSnackbar } = useSnackbar()
    const [profile, setProfile] = React.useState(false)
    const [dashboard, setDashboard] = useState(false)
    const [reviews, setReviews] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [status, setStatus] = useState("save changes")
    const [showSelect, setShowSelect] = useState<boolean>(false)
    return (
        <div className='flex px-5 py-2 items-center dark:bg-[#171717] justify-between'>
            <div className={'fixed duration-[0.5s] transition-all ease-in overflow-y-scroll top-10 px-3 py-5  w-full h-full flex flex-col gap-y-5 z-10 bg-[#FAFCFD] ' + (dashboard ? 'right-0' : 'right-[-100%]')}>
                <strong className='text-2xl font-semibold'>User profile</strong>
                <p>Update your personal details here.</p>
                <div className='flex justify-between gap-x-5'>
                    <div className='min-w-[64px]'>
                        <Image
                            src={man}
                            alt="winterman"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover rounded-lg w-full h-auto"
                        />
                    </div>
                    <div className='bg-white justify-center text-sm items-center flex flex-col gap-y-5 px-4 py-4 rounded-xl border-[1px] w-full'>
                        <div className='w-[47px]'>
                            <Image
                                src={icon}
                                alt="winterman"
                                quality={100}
                                sizes={'100vw'}
                                className="object-cover rounded-lg w-full h-auto"
                            />
                        </div>
                        <div className='text-center'>
                            <button className='text-[#3366FF]'>Click to upload</button> or drag and drop
                        </div>
                        <div className='text-gray-400 text-center'>
                            SVG, PNG, JPG or GIF (max. 800x400px)
                        </div>
                    </div>
                </div>
                <form onSubmit={e => Helpers.validateDashboardForm(e, setStatus, enqueueSnackbar)} className='py-5 pb-10 flex flex-col gap-y-5'>
                    <div className='flex flex-row gap-x-4 justify-between gap-y-5'>
                        <div className='md:w-[48%] flex flex-col'>
                            <input required placeholder="first name" defaultValue={getSession?.firstName} type="text" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                        </div>
                        <div className='md:w-[48%] flex flex-col'>
                            <input required defaultValue={getSession?.lastName} placeholder="last name" type="text" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full'>
                            <input placeholder="Username" defaultValue={getSession?.userName} type="text" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full'>
                            <input placeholder="email" type="email" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full'>
                            <input placeholder="phone" type="phone" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full'>
                            <input placeholder="location" type="text" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                        </div>
                    </div>

                    <div className='flex gap-x-6'>
                        <button type='button' onClick={() => setDashboard(false)} className='w-full py-3 rounded-md border-[#3366FF] border-[1px] text-[#3366FF]'>CANCEL</button>
                        <button className='w-full py-3 rounded-md bg-[#3366FF] text-white uppercase'>
                            {
                                status === "save changes" ? status :
                                    (
                                        <span className='flex items-center justify-center'>
                                            <svg aria-hidden className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="ml-4 sr-ony">{status}</span>
                                        </span>
                                    )
                            }
                        </button>
                    </div>
                </form>

            </div>
            <div className={'fixed duration-[0.5s] transition-all ease-in overflow-y-scroll px-3 py-5 top-10 w-full h-full flex flex-col gap-y-5 z-10 bg-[#FAFCFD] ' + (reviews ? 'left-0' : 'left-[-100%]')}>
                {
                    !isEditing && (
                        <>
                            <strong className='text-2xl font-semibold'>All Reviews Created</strong>
                            <div className='flex gap-x-2 justify-between'>
                                <input type="search" name="" id="" className='w-[85%] rounded-md border-[1px]' />
                                <button className='w-[50px] h-[50px] rounded-md bg-[#3366FF] text-white'>
                                    <i className='fa-solid fa-magnifying-glass text-sm'></i>
                                </button>

                            </div>
                        </>
                    )
                }

                {
                    !isEditing && [...Array(3)].map((x, i) => (
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
                                    <div className='flex gap-x-2'>
                                        <i className='fa-solid fa-star text-yellow-600'></i>
                                        <span>4.0</span>
                                    </div>
                                </div>
                                <div className='flex gap-x-2'>
                                    <button onClick={() => setIsEditing(true)}><i className='fa-solid fa-pen text-[#3366FF]'></i></button>
                                    <i className='fa-solid fa-trash text-[#3366FF]'></i>
                                </div>

                            </div>
                            <p className='pt-3'>Februry 19th, 2024</p>
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
                {
                    isEditing && (
                        <div className='w-full h-auto gap-y-6 flex flex-col rounded-md bg-white py-5 px-4'>
                            <h2 className='text-center text-xl'>Edit Review</h2>
                            <h2 className='font-semibold text-center text-xl'>Bonny and Clyde Street, Lagos.</h2>
                            <div className='flex flex-col gap-y-5'>
                                <div
                                    onClick={() => setShowSelect(!showSelect)}
                                    className="custom-select flex items-center justify-between outline-none bg-[#F3F7FE]"
                                    style={{ width: "100%", padding: '10px 10px', color: 'gray', border: '1px solid #eef5ff' }}
                                >
                                    <span>Select Amenities</span>
                                    <span className={'fa-solid transition-all trans ease-in duration-500ms ' + (!showSelect ? 'fa-angle-down' : 'fa-angle-up')}></span>
                                </div>
                                {
                                    showSelect && (
                                        <div className='flex flex-col gap-y-5 py-4 h-[410px] overflow-y-scroll border-[1px] rounded-md px-2'>
                                            {

                                                [...Array(12)].map((x, i) => (
                                                    <div key={i} className='flex gap-x-1 items-center'>
                                                        <input type="checkbox" className='mr-2 w-4 h-4' name="" id="" />Parking Lot
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }

                            </div>
                            {
                                !showSelect && (
                                    <>
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
                                    </>
                                )
                            }

                            <div className='flex gap-x-6'>
                                <button className='w-full py-3 rounded-md bg-[#3366FF] text-white'>SUBMIT</button>
                                <button onClick={() => setReviews(false)} className='w-full py-3 rounded-md border-[#3366FF] border-[1px] text-[#3366FF]'>CANCEL</button>
                            </div>
                        </div>
                    )
                }
                <div>
                </div>
            </div>
            <div className='w-[92px] h-[30px] relative'>
                <Image
                    src={logo}
                    alt="winterman"
                    quality={100}
                    sizes={'100vw'}
                    className="object-cover imgLight w-full h-auto"
                />
                <Image
                    src={dark}
                    alt="winterman"
                    quality={100}
                    sizes={'100vw'}
                    className="object-cover imgDark w-full h-auto"
                />
            </div>
            {
                pathname === '/login?' ? (
                    <div className=' tracking-widest text-[#557FF2] text-sm'>LOGIN</div>

                ) : (
                    <div className='w-[32px] relative'>
                        <Image
                            onClick={() => setProfile(!profile)}
                            src={dash}
                            alt="winterman"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover rounded-full w-full h-full"
                        />
                        {
                            profile && (
                                <ul className="bg-white shadow-xl border-gray-300 absolute z-10 bottom-[-100] -left-12 rounded-md border-[1px]">
                                    <li onClick={() => { setProfile(false); setDashboard(true) }} className='border-b-[1px] hover:bg-[#F3F7FE] py-2 px-3 w-full'>Profile</li>
                                    <li onClick={() => { setProfile(false); setReviews(true) }} className='border-b-[1px] hover:bg-[#F3F7FE] py-2 px-3 w-full'>Reviews</li>
                                    <li className='px-3 hover:bg-[#F3F7FE] py-2'>Logout</li>
                                </ul>
                            )
                        }

                    </div>
                )
            }

        </div>
    )
}

export default Header