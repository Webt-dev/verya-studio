import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#111111] text-white px-5 py-3 rounded-full text-sm shadow-lg z-[60] whitespace-nowrap"
          role="status"
          aria-live="polite"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}