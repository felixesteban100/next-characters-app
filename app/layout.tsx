import '@/app/globals.css'
import { inter } from '@/app/utilities/ui/fonts';
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from 'next';
import { Toaster } from "@/components/ui/sonner"
import Particles from './utilities/ui/Particles';

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
// figue a way out to make this random be saved so that when you refresh or go back have the same results
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
          <div className='absolute inset-0 -z-10 min-h-screen'>
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={1000}
              color="255, 255, 255"
            />
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={1000}
              color="0, 0, 0"
            />
          </div>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
