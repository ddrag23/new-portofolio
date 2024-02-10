"use client"
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiOutlineXCircle } from "react-icons/hi";
export default function Navbar() {
    return <>
        <nav className="w-full py-5 px-5 md:px-10 md:flex justify-between font-mono fixed z-10 bg-white hidden">
            <Link href="/" className="font-bold">Mohammad Baidhowi Alwi</Link>
            <div className="md:flex md:gap-3 hidden">
                <Link href="/about">About</Link>
                <Link href="/project">Projects</Link>
                <Link href="#">Contact</Link>
            </div>
        </nav>

    </>
}