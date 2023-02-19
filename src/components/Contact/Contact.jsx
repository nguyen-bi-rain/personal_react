import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#080808] text-center'>
      <h3 className='mt-20 text-white text-3xl font-bold inline-block mb-2.5'>Get In Touch</h3>
      <p className='text-gray-400 text-sm max-w-xl mx-auto mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <form className='max-w-[27.5%] mx-auto '>
        <div className='flex flex-col text-left '>
          <label className='text-white mb-1'>Email</label>
          <input className='px-3 rounded-sm text-base py-2' type="email" placeholder="Please Enter Your Email"/>
        </div>
        <div className='flex flex-col text-left mt-5 '>
          <label className='text-white mb-1'>Mobile</label>
          <input className='px-3 rounded-sm text-base py-2' type="email" placeholder="Please Enter Your Phone Number"/>
        </div>
        <div className='text-left flex flex-col mt-5 '>
          <label className='text-white text-sm mb-1 '>Message</label>
          <textarea className='px-3 pt-3' cols="40" rows='5' placeholder='Enter your message'></textarea>
        </div>  
        <button className='mt-5 mb-20 outline-none w-full px-6 py-4 text-white text-base font-bold bg-[#3F8E00] shadow-lg shadow-[#3f8e00] rounded-md  border border-[#62BA1B]'>Submit</button>
      </form>
      
    </div>
    
  )
}

export default Contact