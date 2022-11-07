import Search from "./Search";

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex p-5 space-x-4 divide-x-2">
            <div>
                <h1>Search</h1>
            </div>
            <div className="flex-1 pl-5">
                <Search/>
                <div>
                    {children}
                </div>
            </div>
        </main>
    )
}