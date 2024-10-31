"use client"
import Image from "next/image"
import { Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

 export default function header (){
    return (
<header className="bg-gradient-to-r from-[#2c2e32] to-[#1f2937] flex justify-around items-center h-24 px-20">

    <div className="flex "> 
        <Image 
        src="/logo.png"
         alt="Logo" 
         className="h-24 w-32 shadow-lg bg-transparent " />

    </div>
  
    <div className="gap-10 mb-6 pt-3 flex">

      <Link href="/" className=" text-[#efe7eb] font-bold hover:text-[#fbbf24] text-xl hidden md:block ">Home</Link>
        <Link  href="/projects" className=" text-[#efe7eb] font-bold hover:text-[#fbbf24] text-xl  hidden md:block">Projects</Link>
        <Link href="/about" className=" text-[#efe7eb] font-bold hover:text-[#fbbf24] text-xl hidden md:block">About</Link>
        <Link href="/contact" className=" text-[#efe7eb] font-bold hover:text-[#fbbf24] text-xl hidden md:block ">Contact</Link>
    </div>
    <Sheet>
<SheetTrigger className="md:hidden">
        <Menu color="#ffffff"/>
        </SheetTrigger>
  <SheetContent className="flex flex-col space-y-4 bg-white">
    <Link href="/" className=" text-[#141415] font-bold hover:text-[#fbbf24] text-xl ">Home</Link>
        <Link  href="/project" className=" text-[#141415] font-bold hover:text-[#fbbf24] text-xl  ">Projects</Link>
        <Link href="/about" className=" text-[#141415] font-bold hover:text-[#fbbf24] text-xl ">About</Link>
        <Link href="/contact" className=" text-[#141415] font-bold hover:text-[#fbbf24] text-xl ">Contact</Link>
  </SheetContent>
</Sheet>

    </header>


    )
 } 
    