"use client"
import { NAVBAR_ITEMS } from "@/constant/navbar";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname()
    return <>
        <nav className="w-full py-5 px-5 md:px-10 md:flex justify-between items-center font-mono fixed z-10 bg-white hidden">
            <Link href="/" className="font-bold flex items-center gap-2"><Image
                width={30} height={30} alt="profile" src="/icon/js.png" className="rounded-full" /><span>Mohammad Baidhowi Alwi</span></Link>
            <div className="md:flex md:gap-3 hidden items-center">
                {NAVBAR_ITEMS.map((item, key) => {
                    const isActivePage = pathname == item.pathname
                    return <Link href={item.pathname} key={key} className={clsx(isActivePage && "font-bold")}>{item.title}</Link>
                })}
            </div>
        </nav>

    </>
}