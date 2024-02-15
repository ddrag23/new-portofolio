import Link from "next/link";

export default function Personal() {
    return <>
        <div className="flex items-center content-center md:bottom-0 bottom-32 justify-center flex-col h-full fixed w-full">
            <h1 className="text-4xl font-bold mx-5">Hello, I'm Mohammad Baidhowi Alwi</h1>
            <p className="mx-5">I'm a software engineer. I'm used to using Laravel and Vuejs for web development</p>
            <p className="mx-5">I have experience become a fullstack developer ,I will help you <span className="font-bold">Build your brand</span> and <span className="font-bold">Grow your business</span></p>
            <div className="mt-3 flex gap-3 flex-col md:flex-row w-full justify-center">
                <Link className="bg-slate-800 px-5 py-2 rounded-md text-white mx-5 md:mx-0" href="/project">Explore My Project</Link>
                <Link className="bg-slate-500 px-5 py-2 rounded-md text-white mx-5 md:mx-0" href="/contact">Contact Me</Link>
            </div>
        </div>
    </>
}