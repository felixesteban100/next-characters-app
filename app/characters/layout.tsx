import Navbar from "../ui/Navbar"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div 
        // className="max-w-[80rem] overflow-hidden md:w-[80vw] md:overflow-auto mx-auto"
        className="max-w-[80rem] md:w-[80vw] mx-auto"
      >
        <Navbar />
        {children}
      </div>       
    )
  }