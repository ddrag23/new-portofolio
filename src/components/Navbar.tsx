"use client"
import { NAVBAR_ITEMS } from "@/constant/navbar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname()
    return <>
        <nav className="w-full py-5 px-5 md:px-10 md:flex justify-between font-mono fixed z-10 bg-white hidden">
            <Link href="/" className="font-bold">Mohammad Baidhowi Alwi</Link>
            <div className="md:flex md:gap-3 hidden">
                {NAVBAR_ITEMS.map((item, key) => {
                    const isActivePage = pathname == item.pathname
                    return <Link href={item.pathname} key={key} className={clsx(isActivePage && "font-bold")}>{item.title}</Link>
                })}
            </div>
        </nav>

    </>
}