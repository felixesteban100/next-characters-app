"use client"
import { motion, AnimatePresence } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}