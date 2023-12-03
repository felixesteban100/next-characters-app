import Navbar from "../ui/Navbar"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <Navbar />
        {children}
      </div>       
    )
  }