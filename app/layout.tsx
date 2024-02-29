import '@/app/globals.css'
import { inter } from '@/components/custom-ui/fonts';
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from 'next';
import { Toaster } from "@/components/ui/sonner"
import Particles from '@/components/custom-ui/Particles';
import { TwicInstall } from "@twicpics/components/react";
import "@twicpics/components/style.css";
import Navbar from '@/components/custom-ui/Navbar';
import PageAnimatePresence from '@/components/custom-ui/page-transition/PageAnimatePresence';
import { ScrollArea } from '@/components/ui/scroll-area';
// import { baseUrl } from './utilities/lib/charactersUtils';

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
// learn how to use the getstaticprops function in nextjs
// learn how to use the getserversideprops function in nextjs
// repplicate the image optimization of next js Image component so that I don´t have to pay for it to show the images webp when deploy to vercel
// make a rankings moduels that also has a filtering system. i.e: the strongest mutants in marvel or the smartest heroes in dc...
// figue a way out to make this random be saved so that when you refresh or go back have the same results
// add all the filters in the sheet (filterCharacters.tsx) | it's done...?
// add page transition
// add google provider for auth use this docs for guidance: https://authjs.dev/reference/core/providers_google (nextjs 14 doesn't have support for that :-|)
// in the [id] page save the tab selected using params
// modify the database and remove the teams with parentesis in the names [DONE, FOR THE MOST PART I GUESS]

export default function RootLayout({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <html lang="en">
      <TwicInstall
        // domain is mandatory
        // domain={baseUrl}
        // domain={"https://pngimg.com/d/"}
        domain='https://next-characters-app.twic.pics/'
      />
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
              quantity={500}
              color="255, 255, 255"
            />
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={500}
              color="0, 0, 0"
            />
          </div>
          <main
            className="max-w-[80rem] md:w-[70vw] mx-auto  px-5 md:px-0"
            // className="max-w-[200        rem] md:w-[90vw] mx-auto px-5 md:px-0"
          >
            <Navbar />
            <PageAnimatePresence>
              <ScrollArea
              //max-w-[80rem] md:w-[70vw]
              className="  h-[90vh] mx-auto"
              >
                {children}
              </ScrollArea>
            </PageAnimatePresence>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
