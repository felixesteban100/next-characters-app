import { ScrollArea } from "@/components/ui/scroll-area"
import Navbar from "../utilities/ui/Navbar"
import PageAnimatePresence from "../utilities/ui/page-transition/PageAnimatePresence"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="max-w-[80rem] md:w-[70vw] mx-auto px-5 md:px-0">
      <Navbar />
      <PageAnimatePresence>
        <ScrollArea
          // className="max-w-[80rem] overflow-hidden md:w-[80vw] md:overflow-auto mx-auto"
          className=" max-w-[80rem] md:w-[70vw] h-[90vh] mx-auto"
        >
          {children}
        </ScrollArea>
      </PageAnimatePresence>
    </main>
  )
}
/* 
'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import Navbar from "../utilities/ui/Navbar"
import { PropsWithChildren, useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function Layout(props: PropsWithChildren<{}>) {
  const pathname = usePathname();

  return <AnimatePresence>
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, type: "tween" }}
    >
      <FrozenRouter><main className="max-w-[80rem] md:w-[70vw] mx-auto px-5 md:px-0">
        <Navbar />
        <ScrollArea
          // className="max-w-[80rem] overflow-hidden md:w-[80vw] md:overflow-auto mx-auto"
          className=" max-w-[80rem] md:w-[70vw] h-[90vh] mx-auto"
        >
          {props.children}
        </ScrollArea>
      </main></FrozenRouter>
    </motion.div>
  </AnimatePresence>;
} */