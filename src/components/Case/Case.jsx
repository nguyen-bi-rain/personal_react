import React from 'react'
import MS1 from '../../assets/MS1.jpg'
import MS2 from '../../assets/MS2.jpg'
import MS3 from '../../assets/MS3.jpg'
const Case = () => {
    return (
        <div className='mt-20 bg-white'>
            <h2 className='text-center text-3xl text-[#080808] font-bold'>Case Studies</h2>
            <p className='text-[#9C9C9C] text-center text-sm max-w-xl mx-auto mt-4.5 mb-16'>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className='max-w-[80%] mx-auto flex items-center flex-col gap-20 justify-between'>
                <div className='flex justify-between gap-6 items-center'>
                    <div>
                        <span className='px-2.5 bg-orange-100 rounded-full text-xs text-[#FFA217] mb-5 inline-block'>Fintech</span>
                        <h3 className='font-bold text-2xl text-black mb-2.5 '>Dong Thanh High School</h3>
                        <p className='max-w-[422px] text-[#9c9c9c] text-sm tracking-[0.01rem] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button className='bg-[#FFA217] py-3 px-6 rounded-lg text-white font-bold'>View case study</button>
                    </div>
                    <div className=' overflow-hidden'>
                        <img className='hover:scale-110 ease-in-out duration-[0.3s]' src={MS1} alt="high school" />
                    </div>
                </div>
                <div className='flex justify-between gap-6 items-center'>
                    <div className=' overflow-hidden'>
                        <img src={MS2} alt="high school"  className='hover:scale-110 ease-in-out duration-[0.3s]'/>
                    </div>
                    <div>
                        <span className='px-2.5 bg-orange-100 rounded-full text-xs text-[#000AFF] mb-5 inline-block'>EdTech</span>
                        <h3 className='font-bold text-2xl text-black mb-2.5 '>Dong Thanh High School</h3>
                        <p className='max-w-[422px] text-[#9c9c9c] text-sm tracking-[0.01rem] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button className='bg-[#000AFF] py-3 px-6 rounded-lg text-white font-bold'>View case study</button>
                    </div>

                </div>
                <div className='flex justify-between gap-6 items-center'>
                    <div>
                        <span className='px-2.5 bg-orange-100 rounded-full text-xs text-[#2AB090] mb-5 inline-block'>Phamar</span>
                        <h3 className='font-bold text-2xl text-black mb-2.5 '>Dong Thanh High School</h3>
                        <p className='max-w-[422px] text-[#9c9c9c] text-sm tracking-[0.01rem] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button className='bg-[#2AB090] py-3 px-6 rounded-lg text-white font-bold'>View case study</button>
                    </div>
                    <div  className=' overflow-hidden'>
                        <img src={MS3} alt="high school" className='hover:scale-110 ease-in-out duration-[0.3s]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Case