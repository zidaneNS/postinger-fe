export default async function AuthButton({ isLoggedIn }: { isLoggedIn: boolean }) {

    if (isLoggedIn) return (
        <button className="w-full px-6 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 text-white">Logout</button>
    )

    return <button className="w-full px-6 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 text-white">SignIn</button>
}