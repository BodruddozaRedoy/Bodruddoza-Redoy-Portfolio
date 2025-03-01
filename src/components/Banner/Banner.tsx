import React from 'react'
import { BannerIconCloud } from './IconCloud'
import { Meteors } from '../magicui/meteors'
import { cn } from "@/lib/utils";
import { DotPattern } from '../magicui/dot-pattern';


const overview = [
  {
    num: "2+",
    text: "Years of Learning"
  },
  {
    num: "10+",
    text: "Projects Completed"
  },
  {
    num: "20+",
    text: "Skills Learned"
  },
]

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-12 justify-between items-center w-full relative flex-col md:flex-row'>
        {/* <Meteors number={30} /> */}
        {/* 1st grid  */}
        <div className='col-span-4 space-y-5'>
          <p className='text-muted font-semibold text-2xl'>Hello, I'm</p>
          <h1 className='font-bold text-6xl text-primary'>Bodruddoza <br /> Redoy</h1>
          <p className='font-bold text-white text-3xl'>React Js Developer</p>
          <div>
            <button className='bg-primary py-3 px-5 rounded-xl font-bold'>Hire Me</button>
          </div>
        </div>

        {/* 2nd grid  */}
        <div className='col-span-5'>
          <BannerIconCloud />
        </div>

        {/* 3rd grid */}
        <div className='col-span-3 flex items-start justify-center md:ml-[15rem] md:flex-col gap-10'>
          {overview.map((i, index) => (
            <div className='space-y-3' key={index}>
              <p className='text-primary font-bold text-4xl'>{i.num}</p>
              <p className='text-muted font-bold text-xl'>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  )
}

export default Banner