'use client'
import { Helpers } from '@/helpers'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'

const Login = () => {
    const [error, setError] = useState(false)
    const { push } = useRouter()
    const { enqueueSnackbar } = useSnackbar()
    const [status, setStatus] = useState('Log in')
    return (
        <div className='flex flex-col py-8 px-4 dark:bg-[#171717]'>
            <div className='mx-auto w-fit text-center text-xl font-semibold'>
                Log in
            </div>
            <form onSubmit={(e)=> Helpers.validateLoginForm(e,setStatus,enqueueSnackbar,push)} className='py-5 flex flex-col gap-y-5'>
                <div className=''>
                    <div className='w-full'>
                        <input placeholder="email" type="email" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                    </div>
                </div>
                <div className=''>
                    <div className='w-full'>
                        <input placeholder="password" type="password" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                    </div>
                </div>
                <div>
                    <button type="submit" className='w-full h-12 text-white rounded-md bg-[#3366FF] uppercase'>
                        {
                            status === "Log in" ? status :
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
                <div className='flex justify-around items-center px-3'>
                    <div className='w-[40%] h-[1px] bg-[#3366FF59]'></div>
                    <div>or</div>
                    <div className='w-[40%] h-[1px] bg-[#3366FF59]'></div>
                </div>

                <div className='justify-center gap-x-3 flex py-4 border-[1px] rounded-md items-center'>
                    <span><i className='fa-brands text-xl text-[#DB4437] fa-google'></i></span><span>Log in with Google</span>
                </div>
                <div className='justify-center gap-x-3 flex py-4 border-[1px] rounded-md items-center'>
                    <span><i className='fa-brands text-xl fa-facebook text-blue-600'></i></span><span>Log in with Facebook</span>
                </div>
                <div className='justify-center gap-x-3 flex py-4 border-[1px] rounded-md items-center'>
                    <span><i className='fa-brands text-xl fa-apple'></i></span><span>Log in with Apple</span>
                </div>
                <div className='text-center'>Don&#39;t have an account? <button className='text-[#3366FF] underline'>Sign up</button></div>
            </form>
        </div>
    )
}

export default Login