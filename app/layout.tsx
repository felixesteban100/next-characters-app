import '@/app/globals.css'
import { inter } from '@/app/ui/fonts';
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from 'next';
import Particles from './ui/Particles';
import { Toaster } from '@/components/ui/toaster';
// import Navbar from './ui/Navbar';    

export const metadata: Metadata = {
  title: {
    template: '%s | Characters Next',
    default: 'Characters Next',
  },
  description: 'Characters wiki.',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  icons: {
    icon: '/superhero-alt-svgrepo-com.svg',
  },
};

//TODO:
// make the particles cover the entire page but behind everything else
// make the random really random in the home page
// add all the filters in the sheet (filterCharacters.tsx) | it's done...?
// add page transition
// add google provider for auth use this docs for guidance: https://authjs.dev/reference/core/providers_google (nextjs 14 doesn't have support for that :-|)
// in the [id] page save the tab selected using params
// modify the database and remove the teams with parentesis in the names [DONE, FOR THE MOST PART I GUESS]


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Particles
            className="absolute -z-10 inset-0 animate-fade-in min-h-[100vh]"
            quantity={1000}
            color="255, 255, 255"
          />
          <Particles
            className="absolute -z-10 inset-0 animate-fade-in min-h-[100vh]"
            quantity={1000}
            color="0, 0, 0"
          />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
