// import Navbar from "../ui/Navbar";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
        >
            {/* <Navbar /> */}
            {children}
        </div>
    );
}
