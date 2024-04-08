import React from 'react'

const Signup = () => {
    return (
        <div className='flex flex-col py-8 px-4 dark:bg-[#171717]'>
            <div className='mx-auto w-fit text-center text-xl font-semibold'>
                Sign up
            </div>
            <form action="" className='py-5 flex flex-col gap-y-5'>
                <div className='flex flex-row gap-x-4 justify-between gap-y-5'>
                    <div className='md:w-[48%] flex flex-col'>
                        <input placeholder="first name" type="text" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                    </div>
                    <div className='md:w-[48%] flex flex-col'>
                        <input placeholder="last name" type="text" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                    </div>
                </div>
                <div className=''>
                    <div className='w-full'>
                        <input placeholder="Username" type="text" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                    </div>
                </div>
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
                <div className=''>
                    <div className='w-full'>
                        <input placeholder="confirm password" type="password" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
                    </div>
                </div>
                <div>
                    <button type="submit" className='w-full h-12 text-white rounded-md bg-[#3366FF]'>SIGN UP</button>
                </div>
                <div className='flex justify-around items-center px-3'>
                    <div className='w-[40%] h-[1px] bg-[#3366FF59]'></div>
                    <div>or</div>
                    <div className='w-[40%] h-[1px] bg-[#3366FF59]'></div>
                </div>

                <div className='justify-center gap-x-3 flex py-4 border-[1px] rounded-md items-center'>
                    <span><i className='fa-brands text-xl text-[#DB4437] fa-google'></i></span><span>Sign up with Google</span>
                </div>
                <div className='justify-center gap-x-3 flex py-4 border-[1px] rounded-md items-center'>
                    <span><i className='fa-brands text-xl fa-facebook text-blue-600'></i></span><span>Sign up with Facebook</span>
                </div>
                <div className='justify-center gap-x-3 flex py-4 border-[1px] rounded-md items-center'>
                    <span><i className='fa-brands text-xl fa-apple'></i></span><span>Sign up with Apple</span>
                </div>
                <div className='text-center'>Already have an account? <button className='text-[#3366FF]'>Log in</button></div>
            </form>
        </div>
    )
}

export default Signup