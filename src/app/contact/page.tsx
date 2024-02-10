import { SOSMED_ITEMS } from "@/constant/contact";
import { FaGithub } from "react-icons/fa";
import { SosmedCard } from "./components/SosmedCard";

export default function Page() {
    return <>
        <div className="mt-10 mb-28 md:mt-20 md:mb-10 mx-10">
            <p className="text-2xl font-bold text-black">Contact</p>
            <p>Reach me out</p>
            <div className="border border-current mb-5"></div>
            <p className="text-xl font-bold">Find Me On</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-5">
                {SOSMED_ITEMS.map((item, key) => <SosmedCard icon={item.icon} key={key} title={item.title} url={item.url} color={item.color} />)}
            </div>
        </div>

    </>
}