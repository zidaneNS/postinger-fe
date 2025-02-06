export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex justify-center items-center bg-violet-300">
            {children}
        </div>
    )
}