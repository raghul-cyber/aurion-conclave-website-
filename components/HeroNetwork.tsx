"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface NetworkNodeData {
  id: string;
  name: string;
  category: string;
  capabilityCount: number;
  explanation: string;
  relatedServices: string[];
  color: string;
  position: THREE.Vector3;
}

const NODES_DATA: Omit<NetworkNodeData, "position">[] = [
  {
    id: "ai",
    name: "AI & COGNITION",
    category: "Autonomous Systems",
    capabilityCount: 20,
    explanation: "Autonomous reasoning agents, goal-directed planners, and multi-agent coordination swarms.",
    relatedServices: ["Multi-Agent Systems", "Autonomous AI Agents", "Agent Orchestration"],
    color: "#61C7C0",
  },
  {
    id: "cloud",
    name: "CLOUD INFRASTRUCTURE",
    category: "Distributed Compute",
    capabilityCount: 15,
    explanation: "Multi-region Kubernetes clusters, serverless event fabrics, and high-availability zero-downtime clouds.",
    relatedServices: ["Kubernetes", "AWS Development", "Cloud Architecture"],
    color: "#D9A441",
  },
  {
    id: "software",
    name: "SOFTWARE SYSTEMS",
    category: "Core Engineering",
    capabilityCount: 15,
    explanation: "Mission-critical architectures, hexagonal domain boundaries, and high-throughput transactional backends.",
    relatedServices: ["Custom Software Development", "System Architecture", "Backend Engineering"],
    color: "#F4F1E8",
  },
  {
    id: "data",
    name: "DATA & ANALYTICS",
    category: "Intelligence Fabric",
    capabilityCount: 14,
    explanation: "Real-time streaming pipelines, columnar lakehouses, and low-latency analytics engines.",
    relatedServices: ["Data Pipelines", "Data Warehousing", "ClickHouse Engineering"],
    color: "#61C7C0",
  },
  {
    id: "automation",
    name: "AUTOMATION ENGINES",
    category: "Operational Workflows",
    capabilityCount: 13,
    explanation: "Durable workflow choreography, ERP integration hubs, and robotic decision pipelines.",
    relatedServices: ["Temporal Workflows", "Business Process Automation", "API Automation"],
    color: "#D9A441",
  },
  {
    id: "security",
    name: "CYBERSECURITY",
    category: "Zero-Trust Architecture",
    capabilityCount: 10,
    explanation: "Cryptographic identity verification, eBPF intrusion detection, and continuous red-teaming.",
    relatedServices: ["Zero-Trust mTLS", "Application Security", "Penetration Testing"],
    color: "#E56B6F",
  },
  {
    id: "ml",
    name: "MACHINE LEARNING",
    category: "Predictive Models",
    capabilityCount: 15,
    explanation: "Time-series forecasting, computer vision perception, and predictive anomaly models.",
    relatedServices: ["Predictive Modeling", "Computer Vision", "Anomaly Detection"],
    color: "#D9A441",
  },
  {
    id: "agents",
    name: "AGENT LAB",
    category: "Intelligent Workforces",
    capabilityCount: 12,
    explanation: "12 live functional browser agents automating document audits, SQL synthesis, and customer operations.",
    relatedServices: ["Research Agent", "Code Assistant", "Document Analyst"],
    color: "#6FD2A5",
  },
  {
    id: "infrastructure",
    name: "DEVOPS & PLATFORM",
    category: "Reliability & GitOps",
    capabilityCount: 10,
    explanation: "Deterministic GitOps releases, automated canary deployments, and OpenTelemetry observability.",
    relatedServices: ["CI/CD Engineering", "Observability", "Platform Engineering"],
    color: "#6FD2A5",
  },
  {
    id: "web",
    name: "WEB PLATFORMS",
    category: "Interface Engineering",
    capabilityCount: 5,
    explanation: "Next.js App Router frontends, server components, and responsive maximalist web consoles.",
    relatedServices: ["Next.js Applications", "Web Applications", "React 19"],
    color: "#61C7C0",
  },
  {
    id: "mobile",
    name: "MOBILE CLIENTS",
    category: "Edge Touchpoints",
    capabilityCount: 4,
    explanation: "High-performance React Native and Flutter clients with offline database sync.",
    relatedServices: ["React Native", "Flutter Applications", "Cross-Platform"],
    color: "#D9A441",
  }
];

export const HeroNetwork: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<NetworkNodeData | null>(null);
  const [hoveredNode, setHoveredNode] = useState<NetworkNodeData | null>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Root Group
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Create 3D sphere points for nodes
    const sphereRadius = 78;
    const nodes: NetworkNodeData[] = [];
    const nodeMeshes: THREE.Mesh[] = [];

    NODES_DATA.forEach((data, index) => {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * index) / NODES_DATA.length);
      const theta = Math.sqrt(NODES_DATA.length * Math.PI) * phi;

      const position = new THREE.Vector3(
        sphereRadius * Math.cos(theta) * Math.sin(phi),
        sphereRadius * Math.sin(theta) * Math.sin(phi),
        sphereRadius * Math.cos(phi)
      );

      const nodeData: NetworkNodeData = { ...data, position };
      nodes.push(nodeData);

      // Node geometry
      const nodeGeo = new THREE.SphereGeometry(2.8, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(data.color),
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(position);
      (nodeMesh as any).userData = nodeData;
      networkGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);

      // Outer subtle ring for each node
      const ringGeo = new THREE.RingGeometry(3.6, 4.2, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(data.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(position);
      ringMesh.lookAt(0, 0, 0);
      networkGroup.add(ringMesh);
    });

    // Create connecting lines between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2A3535,
      transparent: true,
      opacity: 0.35,
    });

    const linesGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < 110) {
          linePositions.push(
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          );
        }
      }
    }
    linesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    networkGroup.add(linesMesh);

    // Ambient particle cloud around sphere
    const particleCount = 420;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = sphereRadius * (0.8 + Math.random() * 0.45);
      const sinPhi = Math.sin(phi);
      particlePositions[i] = r * sinPhi * Math.cos(theta);
      particlePositions[i + 1] = r * sinPhi * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xD9A441,
      size: 1.4,
      transparent: true,
      opacity: 0.35,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    networkGroup.add(particleSystem);

    // Mouse movement interaction
    const mouse = new THREE.Vector2();
    let targetRotationX = 0;
    let targetRotationY = 0;
    const raycaster = new THREE.Raycaster();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.x = x;
      mouse.y = y;

      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.45;

      // Raycasting
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const found = (intersects[0].object as any).userData as NetworkNodeData;
        setHoveredNode(found);
        document.body.style.cursor = "pointer";
      } else {
        setHoveredNode(null);
        document.body.style.cursor = "default";
      }
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const found = (intersects[0].object as any).userData as NetworkNodeData;
        setActiveNode(found);
      }
    };

    currentMount.addEventListener("mousemove", handleMouseMove);
    currentMount.addEventListener("click", handleClick);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous slow majestic rotation
      networkGroup.rotation.y += 0.0022;
      networkGroup.rotation.x += 0.0008;

      // Mouse damping
      networkGroup.rotation.y += (targetRotationY - networkGroup.rotation.y) * 0.03;
      networkGroup.rotation.x += (targetRotationX - networkGroup.rotation.x) * 0.03;

      // Subtle breathing pulse for particle system
      const scale = 1 + Math.sin(elapsedTime * 0.8) * 0.02;
      particleSystem.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      currentMount.removeEventListener("mousemove", handleMouseMove);
      currentMount.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      document.body.style.cursor = "default";
    };
  }, []);

  const displayNode = hoveredNode || activeNode;

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[640px] flex items-center justify-center select-none">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Decorative technical coordinate rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-surface-border/40 border-dashed animate-spin-slow opacity-30" />
        <div className="w-[440px] h-[440px] sm:w-[520px] sm:h-[520px] rounded-full border border-accent/10 pointer-events-none" />
      </div>

      {/* Corner Technical Telemetry */}
      <div className="absolute top-4 left-4 pointer-events-none font-mono text-[10px] text-primary-muted/80 space-y-0.5">
        <div className="flex items-center gap-1.5 text-tech-cyan">
          <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan animate-ping" />
          <span>AURION / INTELLIGENCE NETWORK</span>
        </div>
        <div>NODES: 11 PILLARS • 140+ CAPABILITIES</div>
        <div>COORDINATES: SPHERICAL GOLDEN SPIRAL</div>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none font-mono text-[10px] text-right text-primary-muted/80">
        <div className="text-accent">STATE: DYNAMIC ORBIT</div>
        <div>TOPOLOGY: BYZANTINE FAULT TOLERANT</div>
      </div>

      {/* Interactive Node Tooltip / Detail Overlay */}
      {displayNode && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md p-4 bg-[#0A0D0E]/95 border border-accent/40 shadow-[0_8px_32px_rgba(0,0,0,0.9)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-150 z-20">
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: displayNode.color }}
              />
              <span className="font-mono text-xs font-bold text-primary tracking-wider uppercase">
                {displayNode.name}
              </span>
            </div>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface border border-surface-border text-accent">
              {displayNode.capabilityCount} SERVICES
            </span>
          </div>

          <p className="font-sans text-xs text-primary-muted mt-2 leading-relaxed">
            {displayNode.explanation}
          </p>

          <div className="mt-3 pt-2 border-t border-surface-border/40 flex flex-wrap gap-1.5">
            {displayNode.relatedServices.map((svc) => (
              <span
                key={svc}
                className="font-mono text-[9px] px-2 py-0.5 rounded bg-surface border border-surface-border text-primary-muted"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Fallback info when no WebGL or during reduced motion */}
      {!webGLSupported && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-[#070A0B]/90 border border-surface-border">
          <div className="max-w-md space-y-3 font-mono text-xs text-primary-muted">
            <div className="text-accent font-bold">SYSTEM MAP STATIC PREVIEW</div>
            <p>11 Connected Engineering Pillars Across AI, Cloud, Software, and Security.</p>
          </div>
        </div>
      )}
    </div>
  );
};
