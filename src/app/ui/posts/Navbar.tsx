'use client';

import { Bars3Icon, ClipboardDocumentIcon, Cog6ToothIcon, NewspaperIcon, PlusCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [isOpenUser, setIsOpenUser] = useState(false);
    const mobileNavRef = useRef<HTMLDivElement>(null);
    const barsRef = useRef<SVGSVGElement>(null);
    const openUserRef = useRef<HTMLParagraphElement>(null)
    const pathname = usePathname();

    useEffect(() => {
        const handleWindowClick = (e: Event) => {
            setIsOpenUser(barsRef.current == e.target || mobileNavRef.current == e.target || openUserRef.current === e.target);
        }

        isOpenUser && window.addEventListener('click', handleWindowClick);
    }, [isOpenUser]);

    return (
        <nav className="flex justify-between px-8 py-4 items-center bg-gradient-to-r from-violet-900 to-violet-500 shadow-xl">
            <h1 className="text-xl font-bold text-white">Postinger</h1>
            {/* Desktop */}
            <div className="hidden md:flex gap-x-6 items-center">
                <Link href="/posts" className={`text-violet-200 py-2 px-6 duration-300 rounded-lg hover:bg-white/20 ${pathname === '/posts' ? 'bg-white/20' : 'bg-transparent'}`}>All Posts</Link>
                <Link href="/posts/user" className={`text-violet-200 py-2 px-6 duration-300 rounded-lg hover:bg-white/20 ${pathname === '/posts/user' ? 'bg-white/20' : 'bg-transparent'}`}>My Posts</Link>
                <Link href="/posts/create" className={`text-violet-200 py-2 px-6 duration-300 rounded-lg hover:bg-white/20 ${pathname === '/posts/create' ? 'bg-white/20' : 'bg-transparent'}`}>Add Post</Link>
            </div>
            <p 
                ref={openUserRef}
                onClick={() => setIsOpenUser(true)} 
                className="hidden md:block text-white cursor-pointer"
            >username</p>
            {isOpenUser && (
                <div className={`fixed z-10 top-0 left-0 w-screen h-screen bg-black/40`}></div>
            )}
            <div className={`hidden md:flex flex-col py-4 px-8 z-20 top-10 min-w-64 bg-white border border-violet-700 rounded-lg duration-300 fixed items-center justify-between min-h-64 ${isOpenUser ? 'right-4' : '-right-full'}`}>
                <div className="flex flex-col gap-y-3 w-full">
                    <p className="text-slate-700 w-full text-center border-b-2 border-slate-700">username</p>
                    <p className="text-slate-700 w-full text-center border-b-2 border-slate-700">email@example.com</p>
                    <Link href="/posts/dashboard" className={`w-full flex gap-x-2 px-6 py-2 rounded-xl justify-center ${pathname === '/posts/dashboard' ? 'bg-slate-600' : 'bg-slate-700'}`}>
                        <Cog6ToothIcon className="w-6 text-white" />
                        <p className="text-white">Dashboard</p>
                    </Link>
                </div>
                <button className="w-full px-6 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 text-white">Sign In / Logout</button>
            </div>

            {/* Mobile */}
            <Bars3Icon
                ref={barsRef} 
                onClick={() => setIsOpenUser(true)}
                className="w-8 md:hidden hover:rotate-180 duration-300 text-white" 
            />
            <div ref={mobileNavRef} className={`fixed z-20 top-0 bg-white/90 h-screen flex flex-col justify-between py-6 px-8 w-64 md:hidden duration-300 ${isOpenUser ? "right-0" : "-right-full "}`}>
                <div className="flex flex-col gap-y-4 w-full items-center">
                    <p className="text-slate-700 py-2 border-b border-slate-700 px-6">username</p>
                    <p className="text-slate-700 py-2 border-b border-slate-700 px-6">email@example.com</p>
                    <Link href="/posts/dashboard" className={`w-full flex gap-x-2 px-6 py-2 rounded-xl justify-center ${pathname === '/posts/dashboard' ? 'bg-slate-600' : 'bg-slate-700'}`}>
                        <Cog6ToothIcon className="w-6 text-white" />
                        <p className="text-white">Dashboard</p>
                    </Link>
                </div>
                <div className="flex flex-col gap-y-4 w-full items-center">
                    <Link href="/posts" className={`w-full flex gap-x-2 px-6 py-2 rounded-xl justify-center ${pathname === '/posts' ? 'bg-violet-500' : 'bg-violet-700'}`}>
                        <NewspaperIcon className="w-6 text-white" />
                        <p className="text-white">All Posts</p>
                    </Link>
                    <Link href="/posts/user" className={`w-full flex gap-x-2 px-6 py-2 rounded-xl justify-center ${pathname === '/posts/user' ? 'bg-violet-500' : 'bg-violet-700'}`}>
                        <ClipboardDocumentIcon className="w-6 text-white" />
                        <p className="text-white">My Posts</p>
                    </Link>
                    <Link href="/posts/create" className={`w-full flex gap-x-2 px-6 py-2 rounded-xl justify-center ${pathname === '/posts/create' ? 'bg-violet-500' : 'bg-violet-700'}`}>
                        <PlusCircleIcon className="w-6 text-white" />
                        <p className="text-white">Add Post</p>
                    </Link>
                </div>
                <button className="w-full px-6 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 text-white">Sign In / Logout</button>
            </div>
        </nav>
    )
}