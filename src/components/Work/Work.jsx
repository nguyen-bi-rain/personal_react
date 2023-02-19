import React from 'react'
import PJ1 from '../../assets/project1.jpg'
import PJ2 from '../../assets/project2.jpg'

const Work = () => {
    return (
        <div className='my-20 bg-white'>
            <h3 className='text-center text-3xl font-bold mb-2.5'>Recent Works</h3>
            <p className=' max-w-xl text-center text-gray-400 mx-auto text-sm tracking-widest'>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className="mt-16 max-w-[80%] mx-auto flex  items-center gap-7">
                <div className='mb-5 ml-20'>
                    <img src={PJ1} alt=""/>
                    <h4 className='font-bold text-2xl text-[#080808] mt-10'>My Home Town</h4>
                    <p className='text-gray-400 text-base mt-5'>Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <a className='inline-block mt-5 px-2.5 py-6 bg-[#3F8E00] shadow-lg shadow-[#3f8e00] rounded-md  border border-[#62BA1B] text-white font-bold hover:transform translate-y-1' href="https://github.com/nguyen-bi-rain/react-portffolio.git" >Know more </a>
                </div>
                <div className='mb-5 mr-5'>
                    <img src={PJ2} alt="" className="rounded-md"/>
                    <h4 className='font-bold text-2xl text-[#080808] mt-10'>My Home Town</h4>
                    <p className='text-gray-400 text-base mt-5'>Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <a className='inline-block mt-5 px-2.5 py-6 bg-[#3F8E00] shadow-lg shadow-[#3f8e00] rounded-md  border border-[#62BA1B] text-white font-bold hover:transform translate-y-1' href="https://github.com/nguyen-bi-rain/react-portffolio.git" >Know more </a>
                </div>
            </div>
        </div>
    )
}

export default Work