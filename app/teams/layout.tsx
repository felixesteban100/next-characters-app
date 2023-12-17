import { ScrollArea } from "@/components/ui/scroll-area"
import Navbar from "../ui/Navbar"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ScrollArea 
        // className="max-w-[80rem] overflow-hidden md:w-[80vw] md:overflow-auto mx-auto"
        className="max-w-[80rem] md:w-[80vw] mx-auto h-screen"
      >
        <Navbar />
        {children}
      </ScrollArea>       
    )
  }