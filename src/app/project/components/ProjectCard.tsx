import Image from "next/image";
import { ProjectCardProps } from "../types/project-card";
export default function ProjectCard(props: ProjectCardProps) {
    return <>
        <div className="border-2 rounded border-current w-full">
            <Image src={props.img} alt={props.title} width={500} height={500} />
            <div className="p-5">
                <p className="text font-bold">{props.title}</p>
                <p className="mt-3 text-sm">{props.desc}</p>
                <div className="flex flex-wrap mt-5 gap-4">
                    {props.icons.map((item, key) => {
                        return <Image key={key} src={item.srcImg} alt={item.alt} width={item.width} height={item.height} />
                    })}
                </div>
            </div>
        </div></>
}