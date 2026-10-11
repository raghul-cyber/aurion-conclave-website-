"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface AurionCoreProps {
  interactive?: boolean;
  className?: string;
}

export const AurionCore: React.FC<AurionCoreProps> = ({
  interactive = true,
  className = "",
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<string>("SYSTEM CORE: SYNCHRONIZED");

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 15);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ROOT HIERARCHY FOR SMOOTH PARALLAX
    const coreRoot = new THREE.Group();
    scene.add(coreRoot);

    // ----------------------------------------------------
    // PALETTE: Luxury Deep Amber, Matte Gold, Pale Titanium, Tech Teal
    // ----------------------------------------------------
    const AMBER = 0xc9943e;
    const GOLD_MUTED = 0x8c6d32;
    const TITANIUM = 0x242d2f;
    const TEAL = 0x76bfb9;
    const WIRE_DIM = 0x151b1c;

    // 1. INNER ICOSAHEDRON (PRECISION CORE LATTICE)
    const innerGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: AMBER,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreRoot.add(innerCore);

    // 2. INNER SOLID FACETS (MATTE TRANSPARENT)
    const facetMat = new THREE.MeshStandardMaterial({
      color: 0x090c0d,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const innerSolid = new THREE.Mesh(new THREE.IcosahedronGeometry(2.35, 1), facetMat);
    coreRoot.add(innerSolid);

    // 3. CONCENTRIC THIN GIMBAL RINGS
    const ringGroup = new THREE.Group();
    coreRoot.add(ringGroup);

    const createPrecisionRing = (
      radius: number,
      tube: number,
      rotX: number,
      rotY: number,
      color: number,
      opacity: number
    ) => {
      const geo = new THREE.TorusGeometry(radius, tube, 16, 128);
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      ringGroup.add(ring);
      return ring;
    };

    const ring1 = createPrecisionRing(3.5, 0.012, Math.PI / 4, 0, AMBER, 0.7);
    const ring2 = createPrecisionRing(4.3, 0.009, -Math.PI / 6, Math.PI / 3, GOLD_MUTED, 0.5);
    const ring3 = createPrecisionRing(5.1, 0.008, Math.PI / 3, -Math.PI / 4, TITANIUM, 0.8);
    const ring4 = createPrecisionRing(5.8, 0.006, 0, Math.PI / 2, TEAL, 0.4);

    // 4. PRECISION TICK MARKS (LATITUDE/LONGITUDE CAD SYSTEM)
    const ticksGroup = new THREE.Group();
    const tickCount = 48;
    const tickGeo = new THREE.BufferGeometry();
    const tickPositions: number[] = [];

    for (let i = 0; i < tickCount; i++) {
      const theta = (i / tickCount) * Math.PI * 2;
      const r1 = 5.05;
      const r2 = i % 4 === 0 ? 5.25 : 5.15;
      tickPositions.push(Math.cos(theta) * r1, Math.sin(theta) * r1, 0);
      tickPositions.push(Math.cos(theta) * r2, Math.sin(theta) * r2, 0);
    }
    tickGeo.setAttribute("position", new THREE.Float32BufferAttribute(tickPositions, 3));
    const tickMat = new THREE.LineBasicMaterial({
      color: GOLD_MUTED,
      transparent: true,
      opacity: 0.35,
    });
    const tickLines = new THREE.LineSegments(tickGeo, tickMat);
    tickLines.rotation.x = Math.PI / 3;
    tickLines.rotation.y = -Math.PI / 4;
    ticksGroup.add(tickLines);
    coreRoot.add(ticksGroup);

    // 5. ORBITING DATA POINTS & LIGHT PATHS
    const particleCount = 72;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];
    const particleRadii: number[] = [];
    const particleAngles: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      const r = 3.5 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      particleRadii.push(r);
      particleAngles.push(theta);
      particleSpeeds.push((0.002 + Math.random() * 0.004) * (Math.random() > 0.5 ? 1 : -1));

      particlePositions[i * 3] = Math.cos(theta) * r;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      particlePositions[i * 3 + 2] = Math.sin(theta) * r;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    // Custom circular particle texture via canvas
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(229, 194, 122, 1)");
      grad.addColorStop(0.4, "rgba(201, 148, 62, 0.6)");
      grad.addColorStop(1, "rgba(201, 148, 62, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreRoot.add(particles);

    // 6. SUBTLE DIRECTIONAL & AMBIENT LIGHTING
    const ambLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambLight);

    const goldLight = new THREE.DirectionalLight(AMBER, 1.6);
    goldLight.position.set(10, 12, 10);
    scene.add(goldLight);

    const tealLight = new THREE.DirectionalLight(TEAL, 0.8);
    tealLight.position.set(-10, -8, -6);
    scene.add(tealLight);

    // ----------------------------------------------------
    // MOUSE INTERACTION & GENTLE PARALLAX
    // ----------------------------------------------------
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.25;
      targetRotX = -y * 0.25;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // ANIMATION LOOP (SLOW, LUXURY, RESTRAINED)
    let time = 0;
    const animate = () => {
      time += 0.005;

      // 1. Slow, continuous mechanical precession
      innerCore.rotation.y += 0.0012;
      innerCore.rotation.x += 0.0008;
      innerSolid.rotation.y += 0.0012;
      innerSolid.rotation.x += 0.0008;

      ring1.rotation.z += 0.0015;
      ring2.rotation.z -= 0.0018;
      ring3.rotation.z += 0.0009;
      ring4.rotation.z -= 0.0012;

      ticksGroup.rotation.z += 0.0009;

      // 2. Orbital particles movement
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        particleAngles[i] += particleSpeeds[i];
        const r = particleRadii[i];
        const a = particleAngles[i];
        posAttr.setX(i, Math.cos(a) * r);
        posAttr.setZ(i, Math.sin(a) * r);
      }
      posAttr.needsUpdate = true;

      // 3. Mouse damping
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      coreRoot.rotation.x = currentRotX + Math.sin(time * 0.5) * 0.04;
      coreRoot.rotation.y = currentRotY + time * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      facetMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
    };
  }, [interactive]);

  return (
    <div className={`relative w-full h-[480px] sm:h-[580px] lg:h-[660px] flex items-center justify-center ${className}`}>
      {/* 3D Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* CAD Overlay Telemetry (Luxury Metadata) */}
      <div className="absolute top-4 left-4 pointer-events-none font-mono text-[9px] text-primary-muted/70 tracking-widest uppercase space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-semibold">THE AURION CORE / V4.2</span>
        </div>
        <div>COORDINATES: 45.109° N, 9.182° E</div>
        <div>GEOMETRY: 4-TIER RESTRAINED GIMBAL</div>
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none font-mono text-[9px] text-primary-muted/70 tracking-widest uppercase text-right space-y-1">
        <div className="text-accent font-semibold">STATUS: EQUILIBRIUM</div>
        <div>PRECESSION RATE: 0.0012 RAD/S</div>
        <div>NOISE REJECTION: 99.98%</div>
      </div>

      {/* Subtle CAD Reticle Lines */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[82%] h-[82%] border border-surface-border/20 rounded-full" />
        <div className="w-[96%] h-[96%] border border-surface-border/10 rounded-full" />
      </div>
    </div>
  );
};
