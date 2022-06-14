import Link from "next/link"

export default function PageTeaser({ component }) {
    return (
        <Link href={component.pageLink ? component.pageLink._url.replace('/home', '') : '#'}>
            <a>
                <h2>{component.title}</h2>
                <p>{component.description}</p>
            </a>
        </Link>
    )
}