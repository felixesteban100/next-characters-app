"use client"
import { motion } from "framer-motion"

// const variants = {
//   hidden: { opacity: 0, x: 0, y: 200 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, y: 200 }
// }

// const variants = {
//   hidden: { opacity: 0, x: -30, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: -30, y: 0 },
// };

const variants = {
  hidden: { opacity: 0, x: 0, y: 0},
  enter: { opacity: 1, x: 0, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      // key={key}
      // initial="hidden"
      // animate="enter"
      // exit="exit"
      // variants={variants}
      // transition={{ type: "linear", duration: 0.2, delay: 0.1 }}
      variants={variants}
      initial="hidden"
      exit="hidden"
      animate="enter"
      transition={{ type: 'linear', duration: 0.25, delay: 0.1 }}
      key="LandingPage"
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