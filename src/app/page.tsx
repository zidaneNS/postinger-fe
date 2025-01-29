import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col flex-grow gap-y-4 items-center justify-center bg-violet-200 p-12 md:p-24">
        <div className="w-fit bg-gradient-to-r from-violet-700 to-violet-300 py-10 px-6 md:py-24 md:px-16 rounded-xl flex flex-col md:flex-row gap-x-4 md:gap-x-20 gap-y-20 md:items-center">
            <div className="flex flex-col justify-center h-full gap-y-8">
                <h1 className="text-2xl md:text-4xl font-bold text-white">Postinger</h1>
                <p className="text-violet-700 p-2 rounded-lg bg-violet-200/60 text-base md:text-lg font-bold">Post yout adorable story !</p>
            </div>
            <div className="flex flex-col h-full flex-grow gap-y-4">
                <Link href="/auth/login" className="py-2 w-fit px-6 text-center text-base md:text-lg rounded-full text-white bg-violet-900 hover:bg-blue-700 hover:py-4 duration-300">Sign In</Link>
                <Link href="/posts" className="py-2 w-fit px-6 text-center text-base md:text-lg rounded-full text-white bg-slate-700 hover:bg-slate-600 hover:py-4 duration-300 md:mt-auto">Continue as Guest</Link>
            </div>
        </div>
    </main>
  )
}