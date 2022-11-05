import TodoList from "./TodoList";

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex">
            <div>
                {/* @ts-ignore */}
                <TodoList/>
            </div>
            <div className="flex-1 mt-3">
                {children}
            </div>
        </main>
    )
}