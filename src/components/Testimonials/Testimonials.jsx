import React from 'react'
import IMG from '../../assets/Client.jpg'
import IMG2 from '../../assets/Client2.jpg'
import IMG3 from '../../assets/Client3.jpg'
import IMG4 from '../../assets/Client4.png'
import ICO from '../../assets/dau_phay.svg'

const Testimonials = () => {
    return (
        <div className='bg-black py-20'>
            <div className='max-w-[80%] mx-auto'>
                <div>
                    <h3 className='text-white text-3xl font-bold text-center mb-3'>Testimonials</h3>
                    <p className='text-gray-400 max-w-xl text-sm mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-16'>
                    <div className='w-full bg-gradient-to-r from-[#9C9C9C] to-[#080808] p-[1px] rounded-md'>
                        <div className='relative p-8 bg-[#080808] flex flex-col gap-8 rounded-md'>
                            <p className='text-gray-400 text-base tracking-[0.01rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className='flex items-center gap-5'>
                                <img src={IMG} alt="client img" />
                                <h5 className='text-white font-bold text-lg'>Nguyen Vu</h5>
                            </div>
                            <img src={ICO} alt="" className=' absolute top-[-11px] left-7' />
                        </div>
                    </div>
                    <div className='w-full bg-gradient-to-r from-[#9C9C9C] to-[#080808] p-[1px] rounded-md'>
                        <div className='relative p-8 bg-[#080808] flex flex-col gap-8 rounded-md'>
                            <p className='text-gray-400 text-base tracking-[0.01rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className='flex items-center gap-5'>
                                <img src={IMG2} alt="client img" />
                                <h5 className='text-white font-bold text-lg'>Nguyen Vu</h5>
                            </div>
                            <img src={ICO} alt="" className=' absolute top-[-11px] left-7' />
                        </div>
                    </div>
                    <div className='w-full bg-gradient-to-r from-[#9C9C9C] to-[#080808] p-[1px] rounded-md mt-8'>
                        <div className='relative p-8 bg-[#080808] flex flex-col gap-8 rounded-md'>
                            <p className='text-gray-400 text-base tracking-[0.01rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className='flex items-center gap-5'>
                                <img src={IMG3} alt="client img" />
                                <h5 className='text-white font-bold text-lg'>Nguyen Vu</h5>
                            </div>
                            <img src={ICO} alt="" className=' absolute top-[-11px] left-7' />
                        </div>
                    </div>
                    <div className='w-full bg-gradient-to-r from-[#9C9C9C] to-[#080808] p-[1px] rounded-md mt-8'>
                        <div className='relative p-8 bg-[#080808] flex flex-col gap-8 rounded-md'>
                            <p className='text-gray-400 text-base tracking-[0.01rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className='flex items-center gap-5'>
                                <img src={IMG4} alt="client img" />
                                <h5 className='text-white font-bold text-lg'>Nguyen Vu</h5>
                            </div>
                            <img src={ICO} alt="" className=' absolute top-[-11px] left-7' />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Testimonials