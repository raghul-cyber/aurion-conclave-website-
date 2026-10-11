# React Bits 105-Component Implementation Catalog & Audit

**Repository**: Aurion Conclave Production Web Architecture  
**Registry Endpoint**: `https://reactbits.dev/r/{name}.json`  
**MCP Provider**: shadcn MCP server (`@react-bits`)  
**Standard**: Strict TS/TW variants, accessible semantic markup, prefers-reduced-motion compliance.

---

## Category G1: Text Animations (21 Components)

| # | Official Name | Registry Identifier | Target Placement | Visual & Brand Purpose | Dependencies | Status |
|---|---|---|---|---|---|---|
| 1 | **Blur Text** | `@react-bits/BlurText-TS-TW` | Hero sections & key narrative leads | Soft-focus letter/word resolving into crisp text | `motion` | Audited & Staged |
| 2 | **Scroll Reveal** | `@react-bits/ScrollReveal-TS-TW` | Company philosophy & editorial statements | Viewport scroll progress reveals words opacity/y | `motion` | Audited & Staged |
| 3 | **Split Text** | `@react-bits/SplitText-TS-TW` | H1/H2 Section title entrances across pages | Controlled character & word staggered reveals | `motion` | Audited & Staged |
| 4 | **Masked Heading** | `@react-bits/MaskedHeading-TS-TW` | Homepage primary hero headline | Linear clipping gradient reveal | CSS/Tailwind | Audited & Staged |
| 5 | **Shiny Text** | `@react-bits/ShinyText-TS-TW` | Category badges & accent status tags | Subtle metallic/champagne shimmer across letters | Tailwind | Audited & Staged |
| 6 | **Fold Text** | `@react-bits/FoldText-TS-TW` | Section index labels & chapter tabs | 3D origami crease fold-in transition | `motion` | Audited & Staged |
| 7 | **Echo Text** | `@react-bits/EchoText-TS-TW` | Service detail page headers | Ghosted typography copies settling into clean glyphs | `motion` | Audited & Staged |
| 8 | **Scroll Float** | `@react-bits/ScrollFloat-TS-TW` | Engineering philosophy statement | Fluid vertical parallax offset on scroll | `motion` | Audited & Staged |
| 9 | **Count Up** | `@react-bits/CountUp-TS-TW` | Verified metrics (routes, uptime, services count) | Animated factual counter with spring easing | `motion` | Audited & Staged |
| 10 | **Rotating Text** | `@react-bits/RotatingText-TS-TW` | Hero capability cycler (AI, Cloud, Systems) | Vertical carousel transition of short descriptor words | `motion` | Audited & Staged |
| 11 | **Text Loop** | `@react-bits/TextLoop-TS-TW` | Architecture technology marquees | Continuous linear ribbon ticker | Tailwind | Audited & Staged |
| 12 | **Gradient Text** | `@react-bits/GradientText-TS-TW` | Subdued champagne highlight phrases | Animated linear gradient clip with warm palette | Tailwind | Audited & Staged |
| 13 | **Depth Text** | `@react-bits/DepthText-TS-TW` | Section chapter watermarks (01, 02, 03) | Multi-layered faux 3D letterforms behind titles | Tailwind | Audited & Staged |
| 14 | **Stroke Text** | `@react-bits/StrokeText-TS-TW` | Editorial dividers & architectural badges | High-precision outline vector stroke typography | CSS/SVG | Audited & Staged |
| 15 | **Tech Text** | `@react-bits/TechText-TS-TW` | Aurion Conclave wordmark & console monospaces | Dashed vector paths and decode transitions | `motion` | Audited & Staged |
| 16 | **True Focus** | `@react-bits/TrueFocus-TS-TW` | Company values & manifesto keywords | Gaussian focus box smoothly snaps to hovered words | `motion` | Audited & Staged |
| 17 | **Curved Loop** | `@react-bits/CurvedLoop-TS-TW` | Technical stamps & architecture nodes | SVG circular path continuous rotating label | CSS/SVG | Audited & Staged |
| 18 | **Variable Proximity**| `@react-bits/VariableProximity-TS-TW` | Service index directory rows | Pointer distance-weighted font variation axis | Canvas/JS | Audited & Staged |
| 19 | **Text Type** | `@react-bits/TextType-TS-TW` | Agent Lab example prompts & terminal intro | Realistic keystroke cadenced typewriter | `motion` | Audited & Staged |
| 20 | **Split Flap Text**| `@react-bits/SplitFlapText-TS-TW`| Agent telemetry states (READY, RUNNING, DONE)| Mechanical departure-board flip transition | `motion` | Audited & Staged |
| 21 | **Particle Text** | `@react-bits/ParticleText-TS-TW` | Agent Lab console header intro | Micro-particle assembly into company monogram | Canvas/Three | Audited & Staged |

---

## Category G2: Animation Effects (21 Components)

| # | Official Name | Registry Identifier | Target Placement | Visual & Brand Purpose | Dependencies | Status |
|---|---|---|---|---|---|---|
| 22 | **Animated Content** | `@react-bits/AnimatedContent-TS-TW` | Global section entrance wrapper | Viewport intersection staggered fade and slide | `motion` | Audited & Staged |
| 23 | **Fade Content** | `@react-bits/FadeContent-TS-TW` | Tab and card filter panel transitions | Smooth opacity cross-fade between active states | `motion` | Audited & Staged |
| 24 | **Scroll Expand** | `@react-bits/ScrollExpand-TS-TW` | Product hero preview containers | Container scales outward as user scrolls through | `motion` | Audited & Staged |
| 25 | **Ripple Distortion**| `@react-bits/RippleDistortion-TS-TW`| Selected technical diagram surfaces | Fluid pointer ripple shader effect | Three.js | Audited & Staged |
| 26 | **Cursor Grid** | `@react-bits/CursorGrid-TS-TW` | Hero technical grid overlay | Subtle pointer-reactive grid coordinates | Canvas | Audited & Staged |
| 27 | **Glare Hover** | `@react-bits/GlareHover-TS-TW` | High-value interactive cards & CTA surfaces | Specular reflection sweep tracking mouse angle | CSS/Tailwind | Audited & Staged |
| 28 | **Antigravity** | `@react-bits/Antigravity-TS-TW` | Hero ambient atmospheric particles | Weightless floating data points with soft damping | Canvas | Audited & Staged |
| 29 | **Logo Loop** | `@react-bits/LogoLoop-TS-TW` | Enterprise tech stack & tool integration bar| Seamless dual-track infinite logo ticker | Tailwind | Audited & Staged |
| 30 | **Target Cursor** | `@react-bits/TargetCursor-TS-TW` | Agent Lab & interactive sandbox views | Precision crosshair tracking on desktop canvas | `motion` | Audited & Staged |
| 31 | **Magic Rings** | `@react-bits/MagicRings-TS-TW` | Two-Engine company business model hub | Concentric rotating orbit rings linking engines | SVG/Motion | Audited & Staged |
| 32 | **Magnet Lines** | `@react-bits/MagnetLines-TS-TW` | Service architecture connection visualizer | Field lines deflecting toward the pointer | Canvas | Audited & Staged |
| 33 | **Gradual Blur** | `@react-bits/GradualBlur-TS-TW` | Hero-to-content section boundary mask | Stepped progressive backdrop blur falloff | CSS/Tailwind | Audited & Staged |
| 34 | **Magnet** | `@react-bits/Magnet-TS-TW` | Primary CTA buttons & header links | Magnetic attraction pulling element toward cursor | `motion` | Audited & Staged |
| 35 | **Strands** | `@react-bits/Strands-TS-TW` | Editorial divider across major page sections | Flowing ambient mathematical wave strands | Canvas/SVG | Audited & Staged |
| 36 | **Noise** | `@react-bits/Noise-TS-TW` | Global background texture overlay | Subdued film grain eliminating color banding | CSS/SVG | Audited & Staged |
| 37 | **Shape Blur** | `@react-bits/ShapeBlur-TS-TW` | Product interface media previews | Dynamic frosted-glass shape revealing content | CSS/Canvas | Audited & Staged |
| 38 | **Crosshair** | `@react-bits/Crosshair-TS-TW` | Engineering pipeline & architecture nodes | Technical CAD coordinate alignment indicator | SVG | Audited & Staged |
| 39 | **Image Trail** | `@react-bits/ImageTrail-TS-TW` | Product gallery interactive preview | Subtle fading trail of architecture snapshots | `motion` | Audited & Staged |
| 40 | **Ribbons** | `@react-bits/Ribbons-TS-TW` | Data pipeline & AI telemetry dividers | Flowing 3D vector ribbons representing data flow | Three.js | Audited & Staged |
| 41 | **Orbit Images** | `@react-bits/OrbitImages-TS-TW` | Technology constellation section | Planetary orbit rings with tool logos | CSS/Motion | Audited & Staged |
| 42 | **Pixel Transition**| `@react-bits/PixelTransition-TS-TW`| Agent tab switcher | Subdued mathematical grid dissolve | Canvas | Audited & Staged |

---

## Category G3: Interactive UI Components (21 Components)

| # | Official Name | Registry Identifier | Target Placement | Visual & Brand Purpose | Dependencies | Status |
|---|---|---|---|---|---|---|
| 43 | **Specular Button**| `@react-bits/SpecularButton-TS-TW`| Primary action buttons (Start Project, Run Agent)| Metallic specular light reflection on hover | CSS/Motion | Audited & Staged |
| 44 | **Flex Carousel** | `@react-bits/FlexCarousel-TS-TW` | Technology ecosystems & frameworks | Expanding flex cards with smooth spring easing | `motion` | Audited & Staged |
| 45 | **Depth Carousel**| `@react-bits/DepthCarousel-TS-TW`| Product catalog & platform showcases | 3D z-axis carousel with perspective cards | `motion` | Audited & Staged |
| 46 | **Morph Slider** | `@react-bits/MorphSlider-TS-TW` | Architecture Before/After & Process stages | Seamless SVG polygon interpolation slider | `motion` | Audited & Staged |
| 47 | **Accordion Gallery**| `@react-bits/AccordionGallery-TS-TW`| Service families & methodology breakdown | Horizontal accordion expanding hovered discipline | `motion` | Audited & Staged |
| 48 | **Option Wheel** | `@react-bits/OptionWheel-TS-TW` | Agent parameters & project configurator | Circular dial selector with haptic feedback | `motion` | Audited & Staged |
| 49 | **Line Sidebar** | `@react-bits/LineSidebar-TS-TW` | Service detail page sticky table of contents| Minimalist glowing line following scroll section | `motion` | Audited & Staged |
| 50 | **Animated List** | `@react-bits/AnimatedList-TS-TW` | Agent execution trace & activity feed | Staggered list item insertion & status update | `motion` | Audited & Staged |
| 51 | **Scroll Stack** | `@react-bits/ScrollStack-TS-TW` | Engineering SDLC phases (01 to 06) | Stacking sticky cards with scale falloff | `motion` | Audited & Staged |
| 52 | **Magic Bento** | `@react-bits/MagicBento-TS-TW` | Capabilities overview grid | Interactive bento grid with spotlight borders | CSS/Tailwind | Audited & Staged |
| 53 | **Card Nav** | `@react-bits/CardNav-TS-TW` | Desktop navigation mega-menu | Grouped discipline navigation cards | `motion` | Audited & Staged |
| 54 | **Pill Nav** | `@react-bits/PillNav-TS-TW` | Service category switcher & agent tabs | Sliding pill indicator matching active item | `motion` | Audited & Staged |
| 55 | **Tilted Card** | `@react-bits/TiltedCard-TS-TW` | Product feature cards & executive profiles | 3D perspective tilt reacting to cursor coordinates | `motion` | Audited & Staged |
| 56 | **Masonry** | `@react-bits/Masonry-TS-TW` | Industry solutions visual showcase | Dynamic masonry layout with responsive columns | CSS/Motion | Audited & Staged |
| 57 | **Glass Surface** | `@react-bits/GlassSurface-TS-TW` | Agent Lab console & terminal container | Frosted glassmorphism with subtle specular border| CSS | Audited & Staged |
| 58 | **Staggered Menu**| `@react-bits/StaggeredMenu-TS-TW`| Mobile navigation drawer | Sequential staggered reveal of navigation links | `motion` | Audited & Staged |
| 59 | **Model Viewer** | `@react-bits/ModelViewer-TS-TW` | Aurion Core interactive engine model | 3D interactive object viewer with orbit controls | Three.js | Audited & Staged |
| 60 | **Spotlight Card**| `@react-bits/SpotlightCard-TS-TW`| Service tier cards & capability matrices | Radial cursor spotlight highlighting surface | CSS/Motion | Audited & Staged |
| 61 | **Border Glow** | `@react-bits/BorderGlow-TS-TW` | Feature containers & intake form panels | Gradient border animation tracing container | CSS | Audited & Staged |
| 62 | **Carousel** | `@react-bits/Carousel-TS-TW` | Mobile-friendly product & case study slider | Touch-swipable elastic carousel | `motion` | Audited & Staged |
| 63 | **Stepper** | `@react-bits/Stepper-TS-TW` | Project Intake terminal workflow steps | Accessible multi-stage progress pipeline | `motion` | Audited & Staged |

---

## Category G4: Animated Backgrounds (21 Components)

| # | Official Name | Registry Identifier | Target Page Placement | Visual & Brand Atmosphere | Engine | Status |
|---|---|---|---|---|---|---|
| 64 | **Pattern Waves**| `@react-bits/PatternWaves-TS-TW`| `/services` — Services Catalog | Restrained undulating data-wave geometry | SVG/Canvas | Audited & Staged |
| 65 | **Micro Slats** | `@react-bits/MicroSlats-TS-TW` | `/services/software` — Software Eng | Modular vertical architectural slats with depth | Canvas | Audited & Staged |
| 66 | **Ghost Fibers** | `@react-bits/GhostFibers-TS-TW` | `/company` — Company & Research | Ethereal micro-fibers weaving warm ambient paths | Canvas | Audited & Staged |
| 67 | **Web Threads** | `@react-bits/WebThreads-TS-TW` | `/` — Homepage Hero | Interconnected node network of intelligent systems | Three/Canvas | Audited & Staged |
| 68 | **Topography** | `@react-bits/Topography-TS-TW` | `/industries` — Enterprise Sectors | Contour lines representing operational landscapes| SVG/Canvas | Audited & Staged |
| 69 | **Scanner** | `@react-bits/Scanner-TS-TW` | `/services/cybersecurity` | Precision horizontal telemetry scan lines | CSS/Canvas | Audited & Staged |
| 70 | **Dark Veil** | `@react-bits/DarkVeil-TS-TW` | `/services/ai` — Intelligent Systems | Deep graphite atmospheric lighting with amber edge| CSS/WebGL | Audited & Staged |
| 71 | **Silk** | `@react-bits/Silk-TS-TW` | `/company` — Philosophy section | Luxurious undulating organic surface motion | Three.js | Audited & Staged |
| 72 | **Floating Lines**| `@react-bits/FloatingLines-TS-TW`| `/services/cloud` — Cloud & Infra | Infinite parallel perspective lines | Three/Canvas | Audited & Staged |
| 73 | **Light Rays** | `@react-bits/LightRays-TS-TW` | `/products` — Product Showcase | Volumetric god rays illuminating technology items | Canvas/WebGL | Audited & Staged |
| 74 | **Line Waves** | `@react-bits/LineWaves-TS-TW` | `/services/data` — Data & Analytics | Mathematical Fourier harmonic line sequences | Canvas | Audited & Staged |
| 75 | **Radar** | `@react-bits/Radar-TS-TW` | `/agents/security-analyst` | Circular radar sweep detecting system vectors | SVG/Canvas | Audited & Staged |
| 76 | **Soft Aurora** | `@react-bits/SoftAurora-TS-TW` | `/capabilities` — Core Capabilities | Muted amber and champagne atmospheric curtains | WebGL/Shader | Audited & Staged |
| 77 | **Particles** | `@react-bits/Particles-TS-TW` | `/agents` — AI Agent Lab | Subdued mathematical ambient particles | Canvas | Audited & Staged |
| 78 | **Grainient** | `@react-bits/Grainient-TS-TW` | `/contact` — Project Intake | Warm ivory and champagne textured gradient mesh | CSS/SVG | Audited & Staged |
| 79 | **Grid Scan** | `@react-bits/GridScan-TS-TW` | `/engineering` — Systems Architecture | Orthographic grid with sweeping telemetry beam | Canvas | Audited & Staged |
| 80 | **Beams** | `@react-bits/Beams-TS-TW` | `/services/automation` — Automation | Concentrated parallel energy beams along rails | Three.js | Audited & Staged |
| 81 | **Ripple Grid** | `@react-bits/RippleGrid-TS-TW` | `/agents/code-assistant` | Coordinate matrix rippling upon code compilation | Canvas | Audited & Staged |
| 82 | **Dot Field** | `@react-bits/DotField-TS-TW` | `/agents/document-analyst` | Orthogonal dot grid highlighting active zones | Canvas | Audited & Staged |
| 83 | **Threads** | `@react-bits/Threads-TS-TW` | `/services/ml` — Machine Learning | High-dimensional data manifold fiber bundles | Three/Canvas | Audited & Staged |
| 84 | **Grid Motion** | `@react-bits/GridMotion-TS-TW` | `/agents/data-analyst` | Dynamic 3D perspective grid in subtle amber tone| Canvas | Audited & Staged |

---

## Category G5: Micro-Interactions (21 Components)

| # | Official Name | Registry Identifier | Target Placement | Visual & Operational Purpose | Accessibility | Status |
|---|---|---|---|---|---|---|
| 85 | **Thought Line** | `@react-bits/ThoughtLine-TS-TW` | Agent trace execution stream | Pulsing connecting line showing cognitive steps | `role="log"` | Audited & Staged |
| 86 | **Voice Pill** | `@react-bits/VoicePill-TS-TW` | Voice Agent audio input control | Audio waveform pill reacting to mic decibels | `aria-live` | Audited & Staged |
| 87 | **Slosh Gauge** | `@react-bits/SloshGauge-TS-TW` | System resource & quota meter | Liquid surface gauge indicating token/time usage | Semantic meter | Audited & Staged |
| 88 | **Prompt Bar** | `@react-bits/PromptBar-TS-TW` | Agent execution input console | Expanding input bar with command chips & run CTA | Full keyboard | Audited & Staged |
| 89 | **Swipe Toast** | `@react-bits/SwipeToast-TS-TW` | Form submission & system notifications | Swipable dismissible toast notification | `aria-live="polite"`| Audited & Staged |
| 90 | **Call Chip** | `@react-bits/CallChip-TS-TW` | Agent tool invocation status indicator | Chip showing tool name, duration, and exit status | Tooltip support | Audited & Staged |
| 91 | **Status Mark** | `@react-bits/StatusMark-TS-TW` | Agent availability state badge | Animated dot for IDLE, RUNNING, SUCCESS, ERROR | High contrast | Audited & Staged |
| 92 | **Glide Select** | `@react-bits/GlideSelect-TS-TW` | Agent model & parameter selector | Smooth sliding background pill behind active item| Tab index aware | Audited & Staged |
| 93 | **Comet Dial** | `@react-bits/CometDial-TS-TW` | Agent temperature & inference latency dial | Circular scrub dial with trailing light comet | Keyboard arrows | Audited & Staged |
| 94 | **Code Slots** | `@react-bits/CodeSlots-TS-TW` | Two-factor verification & session unlock | Segmented character input slots with auto-advance | Accessible inputs | Audited & Staged |
| 95 | **Lattice Loader**| `@react-bits/LatticeLoader-TS-TW`| Agent waiting & inference states | Geometric lattice folding animation | Non-distracting | Audited & Staged |
| 96 | **Fuse Button** | `@react-bits/FuseButton-TS-TW` | Cancel & abort agent execution CTA | Burning fuse animation providing graceful abort | Clear label | Audited & Staged |
| 97 | **Warm Tooltip** | `@react-bits/WarmTooltip-TS-TW` | Technical terms & architecture definitions | Floating champagne tooltip with spring physics | `aria-describedby`| Audited & Staged |
| 98 | **Slide Commit** | `@react-bits/SlideCommit-TS-TW` | Submit project intake lead | Slider confirmation to avoid accidental sends | Touch & drag | Audited & Staged |
| 99 | **Rubber Segment**| `@react-bits/RubberSegment-TS-TW`| Agent Mode selector (Live API vs Sandbox) | Elastic rubber segmented control | Semantic radiogroup| Audited & Staged |
| 100| **Spring Check** | `@react-bits/SpringCheck-TS-TW` | Contact intake scope checklist | Bouncy spring checkbox animation | Accessible checkbox| Audited & Staged |
| 101| **Hold Button** | `@react-bits/HoldButton-TS-TW` | Agent memory wipe & reset session | Hold-to-confirm circular progress border | Full focus ring | Audited & Staged |
| 102| **Squish Switch** | `@react-bits/SquishSwitch-TS-TW`| Reduced motion & audio voice output toggle| Tactile squish toggle switch | `role="switch"` | Audited & Staged |
| 103| **Refine Frame** | `@react-bits/RefineFrame-TS-TW` | Document Analyst parsing stage preview | Expanding bounding box highlighting extracted text| Semantic status | Audited & Staged |
| 104| **Branched Menu** | `@react-bits/BranchedMenu-TS-TW` | Deep service taxonomy navigator | Tree-structure menu with branch line animation | Treeview a11y | Audited & Staged |
| 105| **Bell Toggle** | `@react-bits/BellToggle-TS-TW` | Live execution audio chime toggle | Ringing bell micro-animation | Button a11y | Audited & Staged |

---

## Implementation Policy & Design Rules
1. **Low Contrast Behind Text**: Background animations are calibrated with low opacity (`0.12` - `0.35`) and placed behind content with `pointer-events-none`.
2. **Typography Scale Strictness**:
   - `H1`: clamped `text-4xl` (36px) on mobile to `text-5xl` (48px) on desktop.
   - `H2`: clamped `text-2xl` to `text-3xl` (30px).
   - Body: `15px` - `17px` with comfortable leading.
3. **Hardware Acceleration & Mobile Protection**: Heavy Three.js/WebGL background scenes pause when offscreen or when `prefers-reduced-motion` is active.
