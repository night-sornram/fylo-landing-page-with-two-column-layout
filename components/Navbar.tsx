import Image from "next/image";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(){
    return (
      <div className=" w-full space-y-10 relative bg-custom-100  flex flex-col md:px-10 lg:px-20 py-20 ">
        <div className=" px-[8.3%] md:px-0">
          <Image
          src={"/images/logo2.svg"}
          width={176}
          height={52}
          alt="logo2"/>
        </div>
        <div className=" flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0  items-center md:items-start ">
          <div className="  w-10/12  md:w-1/4 flex flex-col space-y-3">
            <div className=" flex flex-row">
              <div className="w-1/12 md:w-1/5">
                <Image
                src={"/images/icon-phone.svg"}
                width={18}
                height={18}
                className=" "
                alt="phone"/>
              </div>
              <div className=" w-11/12 md:w-4/5 text-sm text-custom-500 md:text-xs lg:text-sm xl:text-base">
                phone : +1-543-123-4567
              </div>
            </div>
            <div className=" flex flex-row">
              <div className="w-1/12 md:w-1/5">
                <Image
                src={"/images/icon-email.svg"}
                width={18}
                height={18}
                className=" "
                alt="email"/>
              </div>
              <div className=" w-11/12 md:w-4/5 text-sm text-white md:text-xs lg:text-sm xl:text-base">
                example@fylo.com
              </div>
            </div>
          </div>
          <div className="  w-10/12  md:w-1/4 flex flex-col md:flex-row">
            <div className=" w-1/2 flex flex-col space-y-5 text-white">
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                About Us
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Jobs
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Press
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Blog
              </Link>
            </div>
          </div>
          <div className="  w-10/12  md:w-1/4 flex flex-col md:flex-row">
            <div className=" w-1/2 flex flex-col space-y-5 text-white">
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Contact Us
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Term
              </Link>
              <Link href={"/"} className=" font-opensan hover:font-semibold md:text-xs lg:text-sm xl:text-base">
                Policy
              </Link>
            </div>
          </div>
          <div className="  w-10/12  md:w-1/4 flex flex-row space-x-5 justify-center md:justify-normal">
            <Link className=" text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              <div className=" border border-white rounded-full p-2"> 
                <Image
                src={"/images/facebook.svg"}
                width={10}
                height={10}
                className=" w-4 h-4"
                alt="facebook"/>
              </div>
            </Link>
            <Link className=" text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              <div className=" border border-white rounded-full p-2"> 
                <Image
                src={"/images/x.svg"}
                width={10}
                height={10}
                className=" w-4 h-4"
                alt="x"/>
                
              </div>
            </Link>
            <Link className=" text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              <div className=" border border-white rounded-full p-2"> 
                <Image
                src={"/images/instagram.svg"}
                width={10}
                height={10}
                className=" w-4 h-4"
                alt="instagram"/>
              </div>
            </Link>

          </div>
        </div>
      </div>
    )
}