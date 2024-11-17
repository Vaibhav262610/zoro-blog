"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = () => {

    const path = usePathname();


  return (
    <>
        <div className=''>
            <div className='flex justify-around items-center py-3 border-b border-gray-200'>
                <Link href="/">
                    <div className='text-2xl flex items-center'>
                        <h1 className='font-light px-2 rounded-sm bg-gray-800 text-white p-1'>ZORO</h1>
                        <h1 className='font-black'>BLOG</h1>
                    </div>
                </Link>
                <div className='flex items-center border border-gray-400 rounded-lg'>
                    <input type="text" className='py-2 bg-gray-100 w-60 rounded-tl-lg rounded-bl-lg px-3 outline-none' placeholder='Search...' />
                    <div className='py-2 px-2 bg-gray-100 rounded-tr-lg rounded-br-lg'>
                    <IoIosSearch className='text-2xl' />
                    </div>
                </div>
                <div className='flex text-md gap-9'>
                    <Link href="/" className={`${path === '/' ? "text-green-600 font-bold" : "text-black" }`}>
                        <button>Home</button>
                    </Link>
                    <Link href="/about" className={`${path === '/about' ? "text-green-600 font-bold" : "text-black" }`}>
                        <button>About</button>
                    </Link>
                    <Link href="/projects" className={`${path === '/projects' ? "text-green-600 font-bold" : "text-black" }`}>
                        <button>Projects</button>
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <div className=' p-2 hover:bg-yellow-200 duration-150 cursor-pointer rounded-full border border-gray-500'>
                        <FaMoon className='' />
                    </div>
                   <SignedIn>
                    <div className=''>
                    <UserButton />
                    </div>
                   </SignedIn>
                   <SignedOut>
                    <Link href="/sign-in">
                        <button className='hover:bg-black hover:text-white py-2 px-6 rounded-md text-black bg-white duration-150 border border-black'>Sign In</button>
                    </Link>
                   </SignedOut>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
