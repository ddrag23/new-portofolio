"use client"
import Link from "next/link";

export default function Navbar() {
    return <>
        <nav className="w-full py-5 px-10 flex justify-between font-mono fixed z-10">
            <p className="font-bold">Mohammad Baidhowi Alwi</p>
            <div className="flex gap-3">
                <Link href="/about" className="cursor">About</Link>
                <Link href="#">Projects</Link>
                <Link href="#">Contact</Link>
            </div>
        </nav>
    </>
}