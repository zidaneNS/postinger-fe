import Link from "next/link";

export default function ButtonGroup() {
    return (
        <div className="w-full px-6 md:px-12 flex justify-between">
            <Link href="/posts" className="py-2 px-4 bg-violet-500 text-sm text-white font-bold rounded-xl hover:bg-violet-400 duration-300">Back</Link>
            <Link href="/posts" className="py-2 px-4 bg-red-500 text-sm text-white font-bold rounded-xl hover:bg-red-400 duration-300">Delete</Link>
            <Link href="/posts" className="py-2 px-4 bg-blue-500 text-sm text-white font-bold rounded-xl hover:bg-blue-400 duration-300">Update</Link>
        </div>
    )
}