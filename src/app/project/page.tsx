import data from './data/index'
import ProjectCard from "./components/ProjectCard";
export default function Page() {
    return <>
        <div className="mt-10 mb-28 md:mt-20 md:mb-10 mx-10">
            <p className="text-2xl font-bold text-black">Project</p>
            <p>Showcase of my works on Fullstack Development</p>
            <div className="border border-current mb-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.map((item, key) => {
                    return <ProjectCard key={key} title={item.title} desc={item.desc} img={item.img} icons={item.icons} />
                })}
            </div>
        </div>
    </>
}