"use client"
import React from 'react'
import { motion, useScroll } from 'motion/react';
import CodePreview from '@/components/CodePreview';
import Banner from '@/components/Banner/Banner';

const HomePage = () => {
  const { scrollYProgress } = useScroll()
  return (
    <div className='relative'>
      <header className='mx-[70px]'>
        <Banner />
      </header>


    </div>
  )
}

export default HomePage