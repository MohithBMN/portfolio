import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'

function RotatingShape() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#2563eb"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  )
}

export default function Scene3D() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 shadow-2xl"
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 25 }}
        style={{ width: '100%', height: '100%' }}
      >
        <RotatingShape />
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enableZoom={false}
          enablePan={false}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      </Canvas>

      {/* Overlay gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 via-transparent to-transparent" />
    </motion.div>
  )
}
