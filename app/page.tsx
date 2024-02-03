'use client'

import Image from "next/image";
import Link from 'next/link'
import { useState  } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";


export default function Home() {
  const [email1,setEmail1] = useState('')
  const [invalid1,setInvalid1] = useState(false)
  const validateEmail1 = () => {
    email1.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? setInvalid1(false) : setInvalid1(true);
  };
  const [email2,setEmail2] = useState('')
  const [invalid2,setInvalid2] = useState(false)
  const validateEmail2 = () => {
    email2.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? setInvalid2(false) : setInvalid2(true);
  };
  return (
    <div className=" w-full font-opensan">
      <Header/>
      <div className=" bg-white bg-desktop bg-bottom bg-no-repeat bg-contain w-full flex flex-col-reverse md:flex-row pb-10">
        <div className=" w-full md:w-1/2 space-y-7 px-7 md:px-5 lg:px-10 xl:px-20 flex flex-col justify-center">
          <div className=" text-custom-100 font-raleway text-center md:text-start text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            All your files in one secure location, accessible anywhere.
          </div>
          <div className=" text-custom-100  text-center md:text-start md:text-xs lg:text-sm xl:text-base">
            Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
          </div>
          <div className=" w-full flex flex-col h-16  md:flex-row space-y-5 md:space-y-0 md:space-x-7">
            <div className=" w-full flex flex-col">
              <input onChange={(e)=>{setEmail1(e.currentTarget.value)}} type="text" className={!invalid1 ? "  h-10 w-full md:text-xs lg:text-sm xl:text-base px-5 py-3 md:py-0 border-2 border-black rounded" : " h-10 w-full md:text-xs lg:text-sm xl:text-base px-5 py-3 md:py-0 border-2 border-red-500 rounded"} placeholder="Enter your email..."/>
              <div className={invalid1 ? "text-xs mt-1 text-red-500 font-opensan" : "hidden"}>
                Please enter a valid email address
              </div>
            </div>
            <button onClick={validateEmail1} className="w-full h-10 md:w-5/12 md:text-xs lg:text-sm xl:text-base bg-custom-300 font-semibold text-white px-5 py-3 rounded ">
              Get Started
            </button>
          </div>
        </div>
        <div className=" w-full md:w-1/2 p-10">
          <Image
          src={"/images/illustration-1.svg"}
          width={1133}
          height={839}
          alt="ill1"/>
        </div>
      </div>
      <div className="  bg-custom-500 w-full flex flex-col-reverse md:flex-row pb-10">
        <div className=" w-full md:w-1/2 space-y-7 px-7 md:px-5 lg:px-10 xl:px-20 flex flex-col justify-center">
          <div className=" text-custom-100 font-raleway text-center md:text-start text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Stay productive, wherever you are
          </div>
          <div className=" text-custom-100  text-center md:text-start md:text-xs lg:text-sm xl:text-base">
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
          </div>
          <div className=" text-custom-100  text-center md:text-start md:text-xs lg:text-sm xl:text-base">
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!
          </div>
          <div className=" flex justify-center md:justify-normal">
            <Link href={"/"} className=" flex justify-start text-custom-400 md:text-xs lg:text-sm xl:text-base underline-offset-8 underline font-opensan">
              <div className=" flex flex-row">
                See how Fylo works 
                <span className=" flex justify-center items-end"> 
                  <Image
                  src={"/images/icon-arrow.svg"}
                  width={16}
                  height={16}
                  alt="arrow"/>
                </span>
              </div> 
            </Link>
          </div>
          <div className=" w-full flex justify-center md:justify-start">
            <div className=" w-80 bg-white flex space-y-3 flex-col px-7 py-5  rounded shadow-xl">
              <div>
                <Image
                src={"/images/icon-quotes.svg"}
                width={13}
                height={12}
                alt="quot"/>
              </div>
              <div className=" text-xs text-custom-100">
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
              </div>
              <div className=" flex flex-row">
                  <div className=" flex justify-center items-center">
                    <Image
                    src={"/images/avatar-testimonial.jpg"}
                    width={128}
                    height={128}
                    className=" w-10 h-10 rounded-full"
                    alt="profile"/>
                  </div>
                  <div className="ml-3  flex flex-col justify-center">
                    <div className=" text-sm font-semibold text-custom-100 font-opensan">
                      Kyle Burton
                    </div>
                    <div className=" text-[10px] text-custom-100 font-opensan">
                      Founder & CEO, Huddle
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2 p-10">
          <Image
          src={"/images/illustration-2.svg"}
          width={1133}
          height={839}
          alt="ill2"/>
        </div>
      </div>
      <div className=" w-full bg-custom-200 py-20 space-y-7 md:space-y-0 flex flex-col md:flex-row items-center">
        <div className=" w-full md:w-1/2 px-10 space-y-5 flex flex-col">
          <div className=" text-center md:text-start text-3xl text-white font-raleway font-semibold">
            Get early access today
          </div>
          <div className="text-center md:text-start text-custom-500 text-base md:text-xs lg:text-sm xl:text-base">
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
          </div>
        </div>
        <div className=" w-full md:w-1/2 px-10 flex flex-col items-center">
          <div className=" w-full flex flex-col h-16 space-y-0 md:space-y-5  ">
            <div className=" w-full flex flex-col">
              <input onChange={(e)=>{setEmail2(e.currentTarget.value)}} type="text" className={!invalid2 ? " appearance-none outline-none h-10 w-full md:text-xs lg:text-sm xl:text-base px-5 py-3 md:py-0 rounded" : " appearance-none outline-none h-10 w-full md:text-xs lg:text-sm xl:text-base px-5 py-3 md:py-0 rounded border border-red-500"} placeholder="exam@example.com"/>
              <div className={invalid2 ? "text-xs mt-1 text-custom-500 font-opensan" : "hidden"}>
                Please enter a valid email address
              </div>
            </div>
            <button onClick={validateEmail2} className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12 text-sm md:text-xs lg:text-sm xl:text-base bg-custom-300 font-semibold text-white px-5 py-3 rounded ">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  )
}
