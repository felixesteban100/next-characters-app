"use client"
import { motion, AnimatePresence } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence /* mode="wait" */>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit={{ opacity: 0 }}
        transition={{ type: "linear" }}

        // animate={{ x: 100 }}
        // transition={{ type: "spring", stiffness: 100 }}

        // initial={{ x: 300, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // exit={{ x: -300, opacity: 0 }}

        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}

      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}