import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/ic_logo.png'
import dark from '../../../public/images/ic_logo-dark.png'
const Header = () => {
    return (
        <div className='flex px-5 py-2 items-center dark:bg-[#171717] justify-between'>
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
            <div className=' tracking-widest text-[#557FF2] text-sm'>LOGIN</div>
        </div>
    )
}

export default Header