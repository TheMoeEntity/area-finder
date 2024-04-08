import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex flex-col gap-y-5 ">
        <h1 className="text-3xl font-semibold">Find a place you will love to live!</h1>
        <p className="w-full text-sm">See through the lenses of people who have
          lived or visited the neighbourhood you might
          have in mind.</p>
        <div className='w-full'>
          <div className='w-full'>
            <input placeholder="Enter address" type="search" className="py-4 dark:bg-[#242428] dark:placeholder:text-[white] dark:border-none rounded-md  bg-[#D4DCF1] placeholder:text-black px-3 w-full border-gray-300 border-[1px] text-sm" />
          </div>
        </div>
        <div>
          <button type="submit" className='w-[120px] h-12 text-white rounded-md bg-[#3366FF]'>SEARCH</button>
        </div>
      </div>

    </main>
  );
}
