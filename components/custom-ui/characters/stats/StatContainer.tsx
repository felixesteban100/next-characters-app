
export default function StatContainer({ children }: { children: JSX.Element[] | JSX.Element }) {
    return (
        <div className="h-full w-full flex flex-col justify-between">
            {children}
        </div>
    )
}
