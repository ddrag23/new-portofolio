import clsx from "clsx"
import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    icon: ReactNode
    title: string
    url: string
    color: string
}
export function SosmedCard(props: Props) {
    return <Link href={props.url} target="_blank" rel="noopener noreferrer" className={clsx("cursor-pointer rounded px-4 py-2 flex gap-3 text-white items-center")} style={{
        backgroundColor: props.color,
        backgroundImage: props.color,
    }}>
        {props.icon}<span>{props.title}</span>
    </Link>
}