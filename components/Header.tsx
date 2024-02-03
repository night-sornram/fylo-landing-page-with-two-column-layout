import Image from "next/image";
import Link from 'next/link'

export default function Header(){
    return (
        <div className=" flex flex-row px-5 md:px-20 py-10 justify-between font-opensan items-center">
          <div>
            <Image
            src={"/images/logo.svg"}
            width={176}
            height={52}
            className=" w-20 min-[360px]:w-32 md:w-auto md:h-auto"
            alt="logo"/>
          </div>
          <div className=" flex flex-row space-x-5 md:space-x-10">
            <Link href={'/'} className=" text-custom-100 hover:underline text-sm md:text-base" >
              Features
            </Link>
            <Link href={'/'} className=" text-custom-100 hover:underline text-sm md:text-base" >
              Team
            </Link>
            <Link href={'/'} className=" text-custom-100 hover:underline text-sm md:text-base" >
              Sign In
            </Link>
          </div>
        </div>
    )
}