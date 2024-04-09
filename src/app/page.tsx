'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [show, setShow] = useState(false)
  return (
    <main className={styles.main}>
      <div className="flex flex-col gap-y-5 ">
        <h1 className="text-3xl font-semibold">Find a place you will love to live!</h1>
        <p className="w-full text-sm">See through the lenses of people who have
          lived or visited the neighbourhood you might
          have in mind.</p>
        <div className='w-full'>
          <div className='w-full relative z-10'>
            <input onInput={() => setShow(true)}  placeholder="Enter address" type="search" className="py-4 outline-none dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
            {
              show && (<div className="absolute bg-[#E5F0FD] w-full px-2 py-5 rounded-lg">

                <ul className="flex flex-col gap-y-3">
                  <Link href={'/search?id=3079b244-89f6-4d7c-a2c9-69f537ac74cf'}>Oba-Ajao, Lekki</Link>
                  <Link href={'/search?id=863accc8-cdfb-4a23-884c-0a08c6d00666'}>Bonny and Clyde Street, Lagos</Link>
                </ul>

              </div>)
            }

          </div>
        </div>
        <div>
          <button type="submit" className='w-[120px] h-12 text-white rounded-md bg-[#3366FF]'>SEARCH</button>
        </div>
      </div>

    </main>
  );
}
