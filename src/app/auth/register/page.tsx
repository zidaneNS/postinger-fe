'use client';

import { register } from "@/app/lib/actions";
import LoadingButton from "@/app/ui/posts/LoadingButton";
import Link from "next/link";
import { useActionState } from "react";

export default function Page() {
    const [state, action, pending] = useActionState(register, undefined);
    
    return (
        <form action={action} className="flex flex-col gap-y-4 h-fit rounded-lg px-4 py-2 shadow-lg bg-white text-violet-500">
            <h1 className="text-lg md:text-xl font-bold text-violet-500 min-w-64">Register</h1>
            <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="name" className="text-sm md:text-base text-violet-400">Name :</label>
                <input type="name" name="name" id="name" autoFocus autoComplete="off" placeholder="John Doe" className="w-full py-2 px-3 outline-violet-500 border border-violet-500 rounded-lg" />
                {state?.errors?.name && <p className="text-red-500 text-sm bg-red-500/30 py-2 px-4 rounded-lg">{state.errors.name}</p>}
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="email" className="text-sm md:text-base text-violet-400">Email :</label>
                <input type="email" name="email" id="email" autoComplete="off" placeholder="user@email.com" className="w-full py-2 px-3 outline-violet-500 border border-violet-500 rounded-lg" />
                {state?.errors?.email && <p className="text-red-500 text-sm bg-red-500/30 py-2 px-4 rounded-lg">{state.errors.email}</p>}
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="password" className="text-sm md:text-base text-violet-400">Password :</label>
                <input type="password" name="password" id="password" className="w-full py-2 px-3 outline-violet-500 border border-violet-500 rounded-lg" />
                {state?.errors?.password && <p className="text-red-500 text-sm bg-red-500/30 py-2 px-4 rounded-lg">{state.errors.password}</p>}
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="password_confirmation" className="text-sm md:text-base text-violet-400">Confirm Password :</label>
                <input type="password" name="password_confirmation" id="password_confirmation" className="w-full py-2 px-3 outline-violet-500 border border-violet-500 rounded-lg" />
                {state?.errors?.password_confirmation && <p className="text-red-500 text-sm bg-red-500/30 py-2 px-4 rounded-lg">{state.errors.password_confirmation}</p>}
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <p className="text-sm text-black">Already have an account ?</p>
                <Link href="/auth/login" className="text-sm text-blue-800 hover:underline">Sign In Here</Link>
            </div>
            { pending ? (
                <LoadingButton />
            ) : (
                <button type="submit" className="bg-blue-800 py-2 px-4 rounded-xl text-white w-fit hover:bg-blue-600 duration-300">Submit</button>
            ) }
        </form>
    )
}