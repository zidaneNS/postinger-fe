'use client';

import { login } from "@/app/lib/actions";
import LoadingButton from "@/app/ui/posts/LoadingButton";
import Link from "next/link";
import { useActionState } from "react";

export default function Page() {
    const [state, action, pending] = useActionState(login, undefined);
    
    return (
        <form action={action} className="flex flex-col gap-y-4 h-fit rounded-lg px-4 py-2 shadow-lg bg-white text-violet-500">
            <h1 className="text-lg md:text-xl font-bold text-violet-500 min-w-64">Login</h1>
            <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="email" className="text-sm md:text-base text-violet-400">Email :</label>
                <input type="email" name="email" id="email" autoFocus autoComplete="off" placeholder="user@email.com" className="w-full py-2 px-3 outline-violet-500 border border-violet-500 rounded-lg" />
                {state?.errors?.email && <p className="text-red-500 text-sm bg-red-500/30 py-2 px-4 rounded-lg">{state.errors.email}</p>}
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="password" className="text-sm md:text-base text-violet-400">Password :</label>
                <input type="password" name="password" id="password" className="w-full py-2 px-3 outline-violet-500 border border-violet-500 rounded-lg" />
                {state?.errors?.password && <p className="text-red-500 text-sm bg-red-500/30 py-2 px-4 rounded-lg">{state.errors.password}</p>}
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <p className="text-sm text-black">Not have any account ?</p>
                <Link href="/auth/register" className="text-sm text-blue-800 hover:underline">Sign Up Here</Link>
            </div>
            {state?.message && <p className="text-red-500 text-sm bg-red-500/30 py-2 px-4 rounded-lg">{state.message}</p>}
            { pending ? (
                <LoadingButton />
            ) : (
                <button type="submit" className="bg-blue-800 py-2 px-4 rounded-xl text-white w-fit hover:bg-blue-600 duration-300">Submit</button>
            ) }
        </form>
    )
}