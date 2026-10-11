"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroNetworkBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. THREE.JS SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050607, 0);
    container.appendChild(renderer.domElement);

    // Root group for subtle mouse parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 2. PALETTE TOKENS
    const COLOR_GOLD = 0xc9943e;
    const COLOR_GOLD_MUTED = 0x8c6d32;
    const COLOR_TEAL_MUTED = 0x5a9a95;
    const COLOR_LINE = 0x1b2021;

    // 3. NODE GENERATION STRATEGY
    // CRITICAL: Nodes must sit around the edges and lower half.
    // The central zone (where the headline, paragraph, and CTA sit) is kept clear.
    const nodeCount = 68;
    const nodes: {
      pos: THREE.Vector3;
      origin: THREE.Vector3;
      phase: number;
      speed: number;
      radius: number;
      color: number;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      let x = (Math.random() - 0.5) * 44;
      let y = (Math.random() - 0.5) * 26;
      let z = (Math.random() - 0.5) * 12;

      // Push nodes out of the central reading rectangle: |x| < 12 and |y| < 7
      if (Math.abs(x) < 13 && Math.abs(y) < 7) {
        if (Math.random() > 0.5) {
          x = (x < 0 ? -1 : 1) * (14 + Math.random() * 8);
        } else {
          // Bias toward lower half as requested
          y = -7.5 - Math.random() * 7;
        }
      }

      const color = i % 5 === 0 ? COLOR_GOLD : i % 7 === 0 ? COLOR_TEAL_MUTED : COLOR_GOLD_MUTED;
      const origin = new THREE.Vector3(x, y, z);

      nodes.push({
        pos: origin.clone(),
        origin,
        phase: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.005,
        radius: 0.3 + Math.random() * 0.8,
        color,
      });
    }

    // 4. POINT GEOMETRY & MATERIAL
    const pointPositions = new Float32Array(nodeCount * 3);
    const pointColors = new Float32Array(nodeCount * 3);

    nodes.forEach((n, idx) => {
      pointPositions[idx * 3] = n.pos.x;
      pointPositions[idx * 3 + 1] = n.pos.y;
      pointPositions[idx * 3 + 2] = n.pos.z;

      const c = new THREE.Color(n.color);
      pointColors[idx * 3] = c.r;
      pointColors[idx * 3 + 1] = c.g;
      pointColors[idx * 3 + 2] = c.b;
    });

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute("position", new THREE.BufferAttribute(pointPositions, 3));
    pointGeo.setAttribute("color", new THREE.BufferAttribute(pointColors, 3));

    // Circular point texture canvas
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(243, 240, 232, 1)");
      grad.addColorStop(0.3, "rgba(201, 148, 62, 0.7)");
      grad.addColorStop(1, "rgba(201, 148, 62, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const pointTexture = new THREE.CanvasTexture(canvas);

    const pointMat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      map: pointTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pointMesh = new THREE.Points(pointGeo, pointMat);
    rootGroup.add(pointMesh);

    // 5. CONNECTED THIN LINES
    const maxLineConnections = 240;
    const linePositions = new Float32Array(maxLineConnections * 2 * 3);
    const lineColors = new Float32Array(maxLineConnections * 2 * 3);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    rootGroup.add(lineSegments);

    // 6. GENTLE DISPLACEMENT GRID FLOOR (SUBTLE HORIZONTAL TECH BASE)
    const gridHelper = new THREE.GridHelper(48, 24, 0x242d2f, 0x0f1415);
    gridHelper.position.y = -10;
    gridHelper.rotation.x = Math.PI / 18;
    rootGroup.add(gridHelper);

    // 7. MOUSE PARALLAX CONTROLS (VERY RESTRAINED)
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.15;
      targetY = y * 0.12;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 8. CONTINUOUS LUXURY ANIMATION LOOP
    let time = 0;

    const animate = () => {
      time += 0.006;

      // Gentle node orbital drift
      const pAttr = pointGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        n.pos.x = n.origin.x + Math.sin(time * n.speed * 8 + n.phase) * n.radius;
        n.pos.y = n.origin.y + Math.cos(time * n.speed * 7 + n.phase) * (n.radius * 0.7);
        n.pos.z = n.origin.z + Math.sin(time * n.speed * 5 + n.phase) * (n.radius * 0.5);

        pAttr.setXYZ(i, n.pos.x, n.pos.y, n.pos.z);
      }
      pAttr.needsUpdate = true;

      // Dynamic line connections between nearby points
      let lineIndex = 0;
      const lPosAttr = lineGeo.attributes.position as THREE.BufferAttribute;
      const lColAttr = lineGeo.attributes.color as THREE.BufferAttribute;
      const maxDist = 7.5;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          if (lineIndex >= maxLineConnections) break;

          const dist = nodes[i].pos.distanceTo(nodes[j].pos);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;

            lPosAttr.setXYZ(lineIndex * 2, nodes[i].pos.x, nodes[i].pos.y, nodes[i].pos.z);
            lPosAttr.setXYZ(lineIndex * 2 + 1, nodes[j].pos.x, nodes[j].pos.y, nodes[j].pos.z);

            const c = new THREE.Color(COLOR_GOLD);
            lColAttr.setXYZ(lineIndex * 2, c.r * alpha * 0.4, c.g * alpha * 0.4, c.b * alpha * 0.4);
            lColAttr.setXYZ(lineIndex * 2 + 1, c.r * alpha * 0.4, c.g * alpha * 0.4, c.b * alpha * 0.4);

            lineIndex++;
          }
        }
      }

      // Zero out unused line segments
      for (let k = lineIndex; k < maxLineConnections; k++) {
        lPosAttr.setXYZ(k * 2, 0, 0, 0);
        lPosAttr.setXYZ(k * 2 + 1, 0, 0, 0);
      }
      lPosAttr.needsUpdate = true;
      lColAttr.needsUpdate = true;

      // Mouse damping
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      rootGroup.rotation.y = currentX + Math.sin(time * 0.2) * 0.02;
      rootGroup.rotation.x = currentY + Math.cos(time * 0.2) * 0.015;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pointGeo.dispose();
      pointMat.dispose();
      pointTexture.dispose();
      lineGeo.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Central Radial Dimming: Guarantees 100% Readability for Centered Text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(5, 6, 7, 0.88) 0%, rgba(5, 6, 7, 0.55) 45%, rgba(5, 6, 7, 0.15) 85%)",
        }}
      />
    </div>
  );
};
