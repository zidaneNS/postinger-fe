'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
    const [search, setSearch] = useState<string>('');
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.delete('search');
        if (search.length > 0) params.set('search', search);

        replace(`${pathname}?${params.toString()}`);
    }, [search]);

    return (
        <div className="w-full flex gap-x-2 items-center border-2 bg-white/60 border-violet-500 rounded-lg">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Post..." autoFocus autoComplete="off" className="text-violet-700 py-2 px-3 flex-grow bg-transparent outline-none rounded-lg" />
            <MagnifyingGlassIcon className="w-8 text-violet-500 mr-4" />
        </div>
    )
}