import React, { useEffect, useRef } from 'react' // Import React hooks
import * as THREE from 'three' // Import Three.js
import { GUI } from 'dat.gui' // Import dat.GUI

const InteractiveSphere = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 15

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Sphere Setup
    let geometry = new THREE.SphereGeometry(5, 32, 32)
    const material = new THREE.MeshBasicMaterial({
      color: 0x0077ff,
      wireframe: true,
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // GUI Controls
    const gui = new GUI()
    const sphereParams = {
      radius: 5,
      widthSegments: 32,
      heightSegments: 32,
      phiStart: 0,
      phiLength: Math.PI * 2,
      thetaStart: 0,
      thetaLength: Math.PI,
    }

    const updateSphere = () => {
      geometry.dispose() // Dispose of old geometry
      geometry = new THREE.SphereGeometry(
        sphereParams.radius,
        sphereParams.widthSegments,
        sphereParams.heightSegments,
        sphereParams.phiStart,
        sphereParams.phiLength,
        sphereParams.thetaStart,
        sphereParams.thetaLength
      )
      sphere.geometry = geometry // Update geometry
    }

    // Add GUI Controls
    gui.add(sphereParams, 'radius', 1, 15).onChange(updateSphere)
    gui.add(sphereParams, 'widthSegments', 3, 64, 1).onChange(updateSphere)
    gui.add(sphereParams, 'heightSegments', 2, 64, 1).onChange(updateSphere)
    gui.add(sphereParams, 'phiStart', 0, Math.PI * 2).onChange(updateSphere)
    gui.add(sphereParams, 'phiLength', 0, Math.PI * 2).onChange(updateSphere)
    gui.add(sphereParams, 'thetaStart', 0, Math.PI).onChange(updateSphere)
    gui.add(sphereParams, 'thetaLength', 0, Math.PI).onChange(updateSphere)

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate)
      sphere.rotation.y += 0.01 // Rotate Sphere
      renderer.render(scene, camera)
    }

    animate()

    // Handle Resizing
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    })

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement) // Safely remove renderer
      }
      gui.destroy() // Clean up GUI
    }
  }, [])

  return <div ref={mountRef}></div>
}

export default InteractiveSphere
