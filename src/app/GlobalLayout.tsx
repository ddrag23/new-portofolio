import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

export default function GlobalLayout({ children }: PropsWithChildren) {
    return <>
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main>{children}</main>
        </div>
    </>
}