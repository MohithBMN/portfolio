import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  href,
  onClick,
  children,
  className,
  strength = 8,
  ...rest
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength
    setOffset({ x, y })
  }

  const handleLeave = () => {
    setOffset({ x: 0, y: 0 })
  }

  const sharedProps = {
    className,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    ...rest,
  }

  return (
    <motion.div
      animate={offset}
      transition={{ type: 'spring', stiffness: 240, damping: 18, mass: 0.2 }}
      className="inline-flex"
    >
      {href ? (
        <a href={href} onClick={onClick} {...sharedProps}>
          {children}
        </a>
      ) : (
        <button type="button" onClick={onClick} {...sharedProps}>
          {children}
        </button>
      )}
    </motion.div>
  )
}
