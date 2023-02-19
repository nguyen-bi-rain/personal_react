import React from "react"
import Hero from "../Hero/Hero"
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
export default function Header(){
    return (
        <div className="bg-[#000]">
            <nav className="container  bg-[rgba(107,105,105,0.5)] py-3 max-w-[90%] mx-auto rounded-b-md text-center">
                <ul className="flex align-middle text-center w-[100%] justify-evenly gap-8  ">
                    <li className="text-white">
                        <a href="/" className="text-[#9C9C9C] tracking-wide font-normal hover:text-[#268e00]">Home</a>
                    </li>
                    <li>
                        <a href="/" className="text-[#9C9C9C] tracking-wide font-normal hover:text-[#268e00]">Case Studies</a>
                    </li>
                    <li>
                        <a href="/" className="text-[#9C9C9C] tracking-wide font-normal hover:text-[#268e00]">Testimonial</a>
                    </li>
                    <li>
                        <a href="/" className="text-[#9C9C9C] tracking-wide font-normal hover:text-[#268e00]">Recent Work</a>
                    </li>
                    <li>
                        <a href="/" className="text-[#9C9C9C] tracking-wide font-normal hover:text-[#268e00]">Get In Touch</a>
                    </li>
                    <li className="flex gap-3 mt-[5px] ">
                        <FaLinkedinIn className="text-[#FFFFFF] opacity-[0.3] font-xs hover:text-blue-600 cursor-pointer hover:opacity-100" />
                        <AiOutlineTwitter className="text-[#FFFFFF] opacity-[0.3] font-xs hover:text-blue-300 cursor-pointer hover:opacity-100" />
                        <FaFacebookF className="text-[#FFFFFF] opacity-[0.3] font-xs hover:text-blue-600 cursor-pointer hover:opacity-100" />
                    </li>
                </ul>
            </nav>
            <Hero/>
        </div>
    )
}