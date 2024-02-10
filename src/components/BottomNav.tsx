"use client"
import { BOTTOM_BAR_ITEMS } from "@/constant/bottom-bar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
    const pathname = usePathname()
    return <nav className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 flex border border-current items-center justify-evenly w-[85vw] max-w-md rounded-full p-2 md:hidden backdrop-blur-3xl">
        {BOTTOM_BAR_ITEMS.map((item, key) => {
            const isActivePage = pathname === item.pathname
            return <Link href={item.pathname} key={key} className={clsx(
                isActivePage && "bg-slate-500",
                "h-10 w-10 rounded-full",
                "grid place-items-center",
            )}><span>{item.icon}</span></Link>
        })}
    </nav>
}