import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
    return (
        <div className="w-full flex gap-x-2 items-center bg-transparent border-2 border-violet-500 rounded-lg">
            <input type="text" name="search" id="search" autoFocus autoComplete="off" className="text-violet-700 py-2 px-3 flex-grow bg-transparent outline-none rounded-lg" />
            <MagnifyingGlassIcon className="w-8 text-violet-500 mr-4" />
        </div>
    )
}