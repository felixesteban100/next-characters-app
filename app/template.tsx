/* "use client"
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
} */

"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: -2000},
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -2000 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 0.5, delay: 0.1 }}
      key="CHARACTERS_NEXT"
    >
      {children}
    </motion.main>
  )
}


// variants={variants}
// initial="hidden"
// animate="enter"
// transition={{
//   ease: "linear",
//   duration: 1.2,
//   x: { duration: 1 }
// }}

// animate={{ x: 100 }}
// transition={{ type: "spring", stiffness: 100 }}

// initial={{ x: 300, opacity: 0 }}
// animate={{ x: 0, opacity: 1 }}
// exit={{ x: -300, opacity: 0 }}

// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}