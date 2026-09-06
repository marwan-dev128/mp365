"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Matter from "matter-js";
import { ArrowUpRight, MicrosoftLogo, Phone, Shield, Layers, Users } from "@/components/ui/Icons";

interface HeroV3Props {
  settings: {
    city: string;
    region: string;
    phone: string;
    phoneDisplay: string;
  };
}

interface ItemConfig {
  id: string;
  name: string;
  image: string;
  size: number;
}

const ECOSYSTEM_ITEMS: ItemConfig[] = [
  { id: "pa", name: "Power Automate", image: "/images/ecosystem/power-automate.svg", size: 70 },
  { id: "pbi", name: "Power BI", image: "/images/ecosystem/power-bi.svg", size: 74 },
  { id: "apps", name: "Power Apps", image: "/images/ecosystem/power-apps.svg", size: 68 },
  { id: "copilot", name: "Copilot", image: "/images/ecosystem/copilot.png", size: 76 },
  { id: "d365", name: "Dynamics 365", image: "/images/ecosystem/dynamics-365.svg", size: 76 },
  { id: "az", name: "Azure", image: "/images/ecosystem/azure.svg", size: 70 },
  { id: "sp", name: "SharePoint", image: "/images/ecosystem/sharepoint.png", size: 72 },
  { id: "teams", name: "Teams", image: "/images/ecosystem/teams.png", size: 72 },
  { id: "cloud", name: "OneDrive", image: "/images/ecosystem/onedrive.png", size: 68 },
  { id: "dv", name: "Dataverse", image: "/images/ecosystem/dataverse.svg", size: 70 },
  { id: "purview", name: "Purview", image: "/images/ecosystem/purview.svg", size: 72 },
  { id: "fabric", name: "Fabric", image: "/images/ecosystem/fabric.svg", size: 72 },
  { id: "entra", name: "Entra ID", image: "/images/ecosystem/entra.svg", size: 72 },
  { id: "defender", name: "Defender", image: "/images/ecosystem/defender.svg", size: 72 },
  { id: "intune", name: "Intune", image: "/images/ecosystem/intune.svg", size: 70 },
  { id: "bc", name: "Business Central", image: "/images/ecosystem/business-central.svg", size: 72 },
  { id: "copilot-studio", name: "Copilot Studio", image: "/images/ecosystem/copilot-studio.svg", size: 72 },
  { id: "devops", name: "Azure DevOps", image: "/images/ecosystem/devops.svg", size: 70 },
  { id: "excel", name: "Excel", image: "/images/ecosystem/excel.png", size: 66 },
  { id: "outlook", name: "Outlook", image: "/images/ecosystem/outlook.png", size: 66 },
  { id: "word", name: "Word", image: "/images/ecosystem/word.svg", size: 66 },
  { id: "ppt", name: "PowerPoint", image: "/images/ecosystem/powerpoint.svg", size: 66 },
  { id: "loop", name: "Loop", image: "/images/ecosystem/loop.svg", size: 68 },
];

export function HeroV3({ settings }: HeroV3Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const [resetKey] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const { Engine, World, Bodies, Mouse, MouseConstraint, Runner, Events } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 1.15, scale: 0.001 },
      positionIterations: 8,
      velocityIterations: 8,
    });
    const world = engine.world;

    let animFrameId: number;
    const loadedImages: Record<string, HTMLImageElement> = {};

    // Preload image assets
    ECOSYSTEM_ITEMS.forEach((item) => {
      const img = new window.Image();
      img.src = item.image;
      img.onload = () => {
        loadedImages[item.id] = img;
      };
    });

    let width = container.clientWidth;
    let height = container.clientHeight;

    const updateCanvasSize = () => {
      if (!canvas || !container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    updateCanvasSize();

    // Clearance above the bottom bar
    const getBottomOffset = () => {
      const barHeight = bottomBarRef.current ? bottomBarRef.current.offsetHeight : 45;
      return barHeight + 32; // Moves floor down closer to the capability bar
    };

    let bottomOffset = getBottomOffset();
    const wallThickness = 300; // Extra thick walls to prevent fast-speed tunneling
    let floorSurfaceY = height - bottomOffset;

    const wallOptions = { isStatic: true, render: { visible: false } };
    const floor = Bodies.rectangle(width / 2, floorSurfaceY + wallThickness / 2, width * 4, wallThickness, wallOptions);
    const leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 4, wallOptions);
    const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 4, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -wallThickness / 2, width * 4, wallThickness, wallOptions);

    World.add(world, [floor, leftWall, rightWall, ceiling]);

    // Create Ecosystem Physics Bodies (18px squircle radius matching mp inner geometry)
    const bodies: Matter.Body[] = [];
    const radius = 18;

    ECOSYSTEM_ITEMS.forEach((item, index) => {
      const x = (width * 0.05) + ((width * 0.9) / ECOSYSTEM_ITEMS.length) * (index + 0.5) + (Math.random() - 0.5) * 40;
      const y = -60 - (index * 45) - Math.random() * 50;
      const size = item.size;

      const body = Bodies.rectangle(x, y, size, size, {
        chamfer: { radius },
        restitution: 0.52,
        friction: 0.32,
        frictionAir: 0.016,
        density: 0.002,
        angle: (Math.random() - 0.5) * 0.5,
      });

      (body as unknown as { config: ItemConfig }).config = item;
      bodies.push(body);
    });

    World.add(world, bodies);

    // Mouse & Touch Controls with velocity damping
    const mouse = Mouse.create(canvas);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    mouse.pixelRatio = dpr;

    // Unbind Matter.js scroll hijacking so normal page mousewheel scrolling works seamlessly
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const m = mouse as any;
    if (m.element && m.mousewheel) {
      m.element.removeEventListener("mousewheel", m.mousewheel);
      m.element.removeEventListener("DOMMouseScroll", m.mousewheel);
      m.element.removeEventListener("wheel", m.mousewheel);
    }

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        damping: 0.1,
        render: { visible: false },
      },
    });

    World.add(world, mouseConstraint);

    // Anti-Tunneling & Velocity Clamp Safety Guardian
    Events.on(engine, "beforeUpdate", () => {
      const maxSpeed = 24; // Prevent hyper-velocity escape

      bodies.forEach((body) => {
        const item = (body as unknown as { config: ItemConfig }).config;
        const halfSize = item ? item.size / 2 : 35;

        // Clamp maximum speed
        if (body.speed > maxSpeed) {
          Matter.Body.setSpeed(body, maxSpeed);
        }

        // Boundary safety check: If thrown past boundaries, bounce back cleanly
        const { x, y } = body.position;

        // Left Boundary
        if (x < halfSize) {
          Matter.Body.setPosition(body, { x: halfSize + 1, y });
          Matter.Body.setVelocity(body, { x: Math.abs(body.velocity.x) * 0.6, y: body.velocity.y });
        }
        // Right Boundary
        else if (x > width - halfSize) {
          Matter.Body.setPosition(body, { x: width - halfSize - 1, y });
          Matter.Body.setVelocity(body, { x: -Math.abs(body.velocity.x) * 0.6, y: body.velocity.y });
        }

        // Floor Boundary
        if (y > floorSurfaceY - halfSize) {
          Matter.Body.setPosition(body, { x: body.position.x, y: floorSurfaceY - halfSize - 1 });
          Matter.Body.setVelocity(body, { x: body.velocity.x * 0.8, y: -Math.abs(body.velocity.y) * 0.5 });
        }
        // Ceiling Boundary (allows drop from above at start, but prevents escape when thrown up)
        else if (y < halfSize && body.velocity.y < 0) {
          Matter.Body.setPosition(body, { x: body.position.x, y: halfSize + 1 });
          Matter.Body.setVelocity(body, { x: body.velocity.x, y: Math.abs(body.velocity.y) * 0.5 });
        }
      });
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    const ctx = canvas.getContext("2d");

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      bodies.forEach((body) => {
        const item = (body as unknown as { config: ItemConfig }).config;
        if (!item) return;

        const { x, y } = body.position;
        const angle = body.angle;
        const size = item.size;
        const halfSize = size / 2;
        const cornerRadius = 18;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Draw Card Flat Background Squircle (mp flat tonal model - no drop shadow)
        ctx.beginPath();
        ctx.roundRect(-halfSize, -halfSize, size, size, cornerRadius);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        // Crisp 1px Border Outline
        ctx.strokeStyle = "rgba(210, 210, 200, 0.9)";
        ctx.lineWidth = 1.25;
        ctx.stroke();

        // Draw Logo Image
        const img = loadedImages[item.id];
        if (img && img.complete) {
          const imgPadding = size * 0.22;
          const imgSize = size - (imgPadding * 2);
          ctx.drawImage(img, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
        }

        ctx.restore();
      });

      animFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      updateCanvasSize();
      bottomOffset = getBottomOffset();
      floorSurfaceY = height - bottomOffset;
      Matter.Body.setPosition(floor, { x: width / 2, y: floorSurfaceY + wallThickness / 2 });
      Matter.Body.setPosition(rightWall, { x: width + wallThickness / 2, y: height / 2 });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameId);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(world, false);
    };
  }, [resetKey]);

  return (
    <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4 pt-8 sm:pt-14 pb-8">
      {/* ---------------------------------------------------------------- Centered Hero Typography */}
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-1.5 text-[12px] font-medium text-navy">
          <MicrosoftLogo className="h-3.5 w-3.5" />
          <span className="font-semibold text-azure">★★★★★</span>
          <span className="text-muted">|</span>
          <span>Microsoft Solutions Partner · 20+ years in enterprise cloud</span>
        </div>

        <h1 className="font-display text-[clamp(38px,5.8vw,72px)] font-extrabold leading-[1.02] tracking-[-0.03em] text-navy">
          Microsoft consulting,
          <br />
          <span className="text-azure">minus the friction.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[16px] sm:text-[17.5px] leading-[1.65] text-ink-2">
          We plan and execute Microsoft 365 M&amp;A tenant migrations, Dynamics 365 and Power
          Platform implementations, and data governance for mid-market and enterprise teams —
          without the six-month discovery cycle of a traditional systems integrator.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact/"
            className="mp-press inline-flex items-center gap-2 rounded-full bg-azure px-8 py-4 text-sm font-medium text-white hover:bg-azure-hover"
          >
            Book a consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${settings.phone}`}
            className="mp-press inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-7 py-4 text-sm font-medium text-navy hover:bg-surface-light"
          >
            <Phone className="h-4 w-4 text-azure" />
            {settings.phoneDisplay}
          </a>
        </div>
      </div>

      {/* ---------------------------------------------------------------- Interactive Physics Ecosystem Stage */}
      <div
        ref={containerRef}
        className="relative mt-12 flex h-[380px] sm:h-[440px] lg:h-[480px] w-full flex-col justify-between overflow-hidden rounded-[28px] border border-line bg-surface-light/50 shadow-xs"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 h-full w-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
        />

        {/* Ambient lighting & subtle grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_20%,rgba(0,98,255,0.06),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] [background-image:linear-gradient(rgba(0,16,51,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(0,16,51,0.6)_1px,transparent_1px)] [background-size:40px_40px]"
        />

        {/* Stage Interactive Hint */}
        <div className="relative z-10 flex items-center justify-between p-5 pointer-events-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/90 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-navy backdrop-blur-xs">
            <span className="h-2 w-2 rounded-full bg-azure animate-pulse" />
            Interactive Microsoft Cloud Stack
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-muted backdrop-blur-xs">
            Drag and fling items to explore
          </span>
        </div>

        {/* Capability Highlights Bar at bottom of stage */}
        <div
          ref={bottomBarRef}
          className="relative z-10 mt-auto flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-line/60 bg-white/70 py-3.5 text-[12px] font-medium text-navy/85 backdrop-blur-xs pointer-events-none"
        >
          <span className="inline-flex items-center gap-2">
            <Users className="h-3.5 w-3.5 text-azure" />
            Senior architects, not a bench
          </span>
          <span className="inline-flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-azure" />
            Zero-downtime M&amp;A playbooks
          </span>
          <span className="inline-flex items-center gap-2">
            <Layers className="h-3.5 w-3.5 text-azure" />
            Entire Microsoft cloud surface
          </span>
        </div>
      </div>
    </section>
  );
}
