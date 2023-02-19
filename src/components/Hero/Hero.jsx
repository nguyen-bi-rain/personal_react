import React from 'react'
import ava from '../../assets/avatar1.jpg'
import { SiClickup } from 'react-icons/si'
import { GrDropbox } from 'react-icons/gr'
import { SiElastic } from 'react-icons/si'
import { FaCcPaypal } from 'react-icons/fa'


const Hero = () => {
    return (
        <>
            <div className='flex  items-center max-w-[80%] mx-auto mt-20 justify-between'>
                <div className='flex flex-col align-bottom'>
                    <h1 className='text-3xl text-white mb-5 font-bold'>Vũ Thế Nguyên</h1>
                    <p className='max-w-[493px] text-[#9c9c9c] text-sm font-normal'>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a href="https://www.facebook.com/anha.hoanghon/" className='mt-8 px-16 py-5 bg-[#3F8E00] block text-center shadow-lg shadow-[#3f8e00] rounded-md  border border border-[#62BA1B] text-white font-bold text-base w-[308px]'>Let’s get started </a>
                </div>
                <div>
                    <img src={ava} alt="handsome" className='rounded-full ' />
                </div>
            </div>
            <div className='max-w-[80%] mx-auto mt-20 pb-20'>
                <p className='text-[#9c9c9c] text-sm mb-5'>Worked with</p>
                <div className='flex justify-between w-full '>
                    <div className='border  py-5 px-8 flex items-center text-[#9c9c9c] text-xl opacity-50 font-bold'><SiClickup className='mr-[3px]'/>ClickUp</div>
                    <div className='border py-5 px-8 flex items-center text-[#9c9c9c] text-xl opacity-50 font-bold'><GrDropbox />DropBox</div>
                    <div className='border py-5 px-8 flex items-center text-[#9c9c9c] text-xl opacity-50 font-bold'><FaCcPaypal className='text-xl mr-1'/>PayPal</div>
                    <div className='border py-5 px-8 flex items-center text-[#9c9c9c] text-xl opacity-50 font-bold'><SiElastic />Elastic</div>
                    <div className='border py-5 px-8 flex items-center text-[#9c9c9c] text-xl opacity-50 font-bold'>Stripe</div>
                </div>
            </div>
        </>
    )
}

export default Hero