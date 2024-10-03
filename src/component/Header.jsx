import React from 'react'
import reactimg from '../assets/React_Logo_SVG.svg'
function Header() {
  return (
    <>
    <div className='px-[4rem] py-[5rem] w-full h-full bg-[#202636] relative'>
        <img className='absolute right-[20em] top-[10rem] h-[25rem] mix-blend-color-dodge' src={reactimg} alt="" />
        <img className='absolute right-[10em] h-[10rem] ' src={reactimg} alt="" />
        <img className='absolute right-[-7em] top-[15rem] h-[20rem] ' src={reactimg} alt="" />
    <div className='flex flex-col justify-start w-[60%]'>
    <h1 className="text-[7rem] font-bold w-full text-white mb-5 leading-[0.8em] z-10">Say hello to ReactJS</h1>
      <p className="text-cyan-100 text-[2rem] mb-6 text-left word w-[25rem] h-[1rem] leading-[0.9em] tracking-tight-[0] mb-[4rem]">
        You will learn a Frontend framework from scratch, to become a Ninka Developer.
      </p>
      <button className=" text-black font-s text-4xl bg-white w-[7em] h-[5rem] rounded-[0.3rem] mt-20 hover:bg-blue-700">
        Awesome!
      </button>
      </div>
    </div>
    
    </>
    
  )
}

export default Header
