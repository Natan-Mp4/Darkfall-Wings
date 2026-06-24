import { useState, useEffect } from "react";
import shoeGrid from "@/imports/ChatGPT_Image_23_de_jun._de_2026__20_09_02.png";
import shoeSheet from "@/imports/ChatGPT_Image_23_de_jun._de_2026__19_46_53-1.png";

const sizes = ["38", "39", "40", "41", "42", "43", "44", "45", "46"];

/* ── Channels — each one a real shot from the product photos ── */
const channels = [
  {
    id: 0,
    num: "00",
    station: "DRKSHOW·TV",
    label: "OVERVIEW",
    src: shoeSheet,
    bgSize: "100%",
    bgPos: "center center",
    filter: "contrast(1.05) brightness(0.88) sepia(0.2)",
    anim: "chFloat",
    led: "#FF8C00",
    tint: "rgba(255,140,40,0.07)",
    vhs: true,
  },
  {
    id: 1,
    num: "01",
    station: "FRONT·VIEW",
    label: "FRONTAL",
    src: shoeGrid,
    bgSize: "300%",
    bgPos: "0% 0%",
    filter: "contrast(1.15) brightness(0.85)",
    anim: "chBreath",
    led: "#ffffff",
    tint: "rgba(255,255,255,0.03)",
    vhs: false,
  },
  {
    id: 2,
    num: "02",
    station: "WINGS·STUDY",
    label: "ASAS",
    src: shoeGrid,
    bgSize: "300%",
    bgPos: "0% 50%",
    filter: "grayscale(1) contrast(1.7) brightness(0.7)",
    anim: "chGlitch",
    led: "#aaaaaa",
    tint: "rgba(255,255,255,0.04)",
    vhs: false,
  },
  {
    id: 3,
    num: "03",
    station: "STRUCTURE·LAB",
    label: "SOLA",
    src: shoeGrid,
    bgSize: "300%",
    bgPos: "100% 100%",
    filter: "invert(0.85) hue-rotate(195deg) contrast(1.8) brightness(0.75)",
    anim: "chScan",
    led: "#4488FF",
    tint: "rgba(60,140,255,0.09)",
    vhs: false,
  },
  {
    id: 4,
    num: "04",
    station: "JEREMY·SCOTT™",
    label: "ON FOOT",
    src: shoeGrid,
    bgSize: "300%",
    bgPos: "0% 100%",
    filter: "saturate(2.8) contrast(1.2) brightness(0.95) hue-rotate(-8deg)",
    anim: "chPop",
    led: "#FF3300",
    tint: "rgba(255,40,0,0.1)",
    vhs: false,
  },
];

type Ch = (typeof channels)[0];

/* ─────────────────────────────────────────────────
   SCANLINES
───────────────────────────────────────────────── */
function Scanlines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        background:
          "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.22) 2px,rgba(0,0,0,0.22) 4px)",
      }}
    />
  );
}

/* ─────────────────────────────────────────────────
   VHS OVERLAY
───────────────────────────────────────────────── */
function VHSOverlay() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <div
        className="absolute left-0 right-0 h-[2px] z-20 pointer-events-none"
        style={{ background: "rgba(255,200,80,0.45)", animation: "vhsTrack 7s linear infinite" }}
      />
      <div className="absolute bottom-3 left-3 z-20 pointer-events-none font-mono text-[9px]"
        style={{ color: "rgba(255,200,80,0.75)", textShadow: "0 0 6px rgba(255,200,80,0.9)" }}>
        ● REC &nbsp;{time.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })} &nbsp; SP·T-160
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────
   SURVEILLANCE OVERLAY (CH02)
───────────────────────────────────────────────── */
function SurveilOverlay() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {[25, 50, 75].map((p) => (
        <div key={p} className="absolute left-0 right-0 h-px" style={{ top: `${p}%`, background: "rgba(255,255,255,0.07)" }} />
      ))}
      <div className="absolute top-3 left-3 font-mono text-[8px]" style={{ color: "rgba(180,180,180,0.6)" }}>
        OWENS ARCHIVE / DOC·002<br />B&W STUDY · 2025
      </div>
      {/* crosshair */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <div className="relative w-14 h-14">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
          <div className="absolute inset-0 border border-white rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   X-RAY OVERLAY (CH03)
───────────────────────────────────────────────── */
function XRayOverlay() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      <div
        className="absolute left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg,transparent,rgba(60,140,255,0.9),transparent)",
          animation: "scanDown 2.4s linear infinite",
          boxShadow: "0 0 14px rgba(60,140,255,0.7)",
        }}
      />
      <div className="absolute top-3 left-3 font-mono text-[8px]" style={{ color: "rgba(80,160,255,0.8)" }}>
        STRUCTURE LAB v2.1<br />SOLE SCAN · ACTIVE
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[8px] text-right" style={{ color: "rgba(80,160,255,0.5)" }}>
        MATERIAL: RUBBER<br />DEPTH: 14mm
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   COMMERCIAL OVERLAY (CH04)
───────────────────────────────────────────────── */
function CommOverlay() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg,#FF3300,#FF9900,#FFee00,#FF3300)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg,#FF3300,#FF9900,#FFee00,#FF3300)" }} />
      <div className="absolute bottom-8 left-0 right-0 text-center"
        style={{ fontFamily: "'Barlow Condensed',sans-serif" }}>
        <span className="text-xl font-black uppercase tracking-widest px-2"
          style={{ color: "#FF3300", textShadow: "0 0 18px rgba(255,51,0,0.95),2px 2px 0 #000" }}>
          WEAR YOUR WINGS
        </span>
      </div>
      <div className="absolute top-3 right-3 font-black text-[9px] tracking-widest uppercase"
        style={{ color: "#FF3300", textShadow: "0 0 10px rgba(255,51,0,0.8)", fontFamily: "'Barlow Condensed',sans-serif" }}>
        JEREMY SCOTT™
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   CRT SCREEN CONTENT
───────────────────────────────────────────────── */
function Screen({ ch, power, brightness }: { ch: Ch; power: boolean; brightness: number }) {
  const [flash, setFlash] = useState(false);
  const [cur, setCur] = useState(ch);

  useEffect(() => {
    setFlash(true);
    const t = setTimeout(() => { setCur(ch); setFlash(false); }, 200);
    return () => clearTimeout(t);
  }, [ch.id]);

  return (
    <div
      className="relative overflow-hidden w-full h-full"
      style={{ background: power ? "#050302" : "#0a0a0e" }}
    >
      {/* Animated image */}
      {power && (
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `url(${cur.src})`,
            backgroundSize: cur.bgSize,
            backgroundPosition: cur.bgPos,
            backgroundRepeat: "no-repeat",
            filter: `brightness(${brightness / 100}) ${cur.filter}`,
            animation: `${cur.anim} ${
              cur.anim === "chGlitch" ? "9s" :
              cur.anim === "chPop" ? "3.5s" :
              cur.anim === "chBreath" ? "5s" :
              cur.anim === "chScan" ? "7s" : "4.5s"
            } ease-in-out infinite`,
          }}
        />
      )}

      {/* Phosphor tint */}
      {power && (
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{ background: cur.tint, mixBlendMode: "screen" }} />
      )}

      <Scanlines />

      {/* Overlays by channel */}
      {power && !flash && cur.id === 0 && <VHSOverlay />}
      {power && !flash && cur.id === 2 && <SurveilOverlay />}
      {power && !flash && cur.id === 3 && <XRayOverlay />}
      {power && !flash && cur.id === 4 && <CommOverlay />}

      {/* Channel badge */}
      {power && (
        <div className="absolute top-3 left-3 z-30 px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest border pointer-events-none"
          style={{ background: "rgba(0,0,0,0.8)", color: cur.led, borderColor: cur.led + "44", textShadow: `0 0 8px ${cur.led}` }}>
          CH.{cur.num} &nbsp; {cur.station}
        </div>
      )}

      {/* Static flash */}
      {flash && (
        <div className="absolute inset-0 z-40 pointer-events-none"
          style={{ background: "rgba(220,220,200,0.9)", mixBlendMode: "overlay" }} />
      )}

      {/* CRT vignette */}
      <div className="absolute inset-0 pointer-events-none z-20"
        style={{ background: "radial-gradient(ellipse 86% 86% at 50% 50%,transparent 48%,rgba(0,0,0,0.78) 100%)" }} />

      {/* OFF state: CRT glare dot */}
      {!power && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="w-40 h-1 rounded-full" style={{ background: "rgba(180,190,220,0.08)", filter: "blur(2px)" }} />
          {/* glare spot */}
          <div className="absolute" style={{ top: "38%", left: "52%", width: 28, height: 20, background: "radial-gradient(rgba(200,210,240,0.18),transparent 70%)", filter: "blur(3px)" }} />
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   TV SHELL — faithful recreation of the Sony CRT
   from the ll.jpg reference photo
───────────────────────────────────────────────── */
function CRTShell({ ch, onChannel, power, setPower, brightness, setBrightness }: {
  ch: Ch;
  onChannel: (c: Ch) => void;
  power: boolean;
  setPower: (v: boolean) => void;
  brightness: number;
  setBrightness: (v: number) => void;
}) {
  const [pressing, setPressing] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full max-w-[600px] mx-auto select-none">

      {/* ── OUTER HOUSING ─────────────────────────── */}
      <div
        className="relative w-full"
        style={{
          background: "linear-gradient(155deg,#505048 0%,#3e3e38 25%,#2e2e2a 65%,#1e1e1a 100%)",
          borderRadius: 10,
          border: "2px solid #555550",
          outline: "1px solid #18181400",
          boxShadow: `
            inset 1px 2px 4px rgba(255,255,255,0.09),
            inset -1px -2px 4px rgba(0,0,0,0.5),
            0 0 0 1px #111,
            0 28px 80px rgba(0,0,0,0.96),
            6px 8px 0 #0a0a08
          `,
          padding: "18px 20px 0",
        }}
      >

        {/* ── SCREEN BEZEL ─── */}
        <div
          style={{
            background: "#0c0c0a",
            borderRadius: 6,
            padding: "10px 12px",
            boxShadow: "inset 0 4px 24px rgba(0,0,0,0.98), inset 3px 3px 10px rgba(0,0,0,0.7), inset -2px -2px 6px rgba(0,0,0,0.5)",
          }}
        >
          {/* ── SCREEN ITSELF ─── */}
          <div
            style={{
              aspectRatio: "4/3",
              borderRadius: "5%/4%",
              overflow: "hidden",
              position: "relative",
              boxShadow: "inset 0 0 60px rgba(0,0,0,0.9), 0 0 0 1px rgba(0,0,0,0.8)",
            }}
          >
            <Screen ch={ch} power={power} brightness={brightness} />
          </div>
        </div>

        {/* ── BOTTOM PANEL ─── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 6px 14px",
            marginTop: 2,
          }}
        >
          {/* Speaker grill */}
          <div style={{ display: "flex", flexDirection: "column", gap: 3.5, marginLeft: 4 }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{ width: 48, height: 2, background: "#111", borderRadius: 1, boxShadow: "inset 0 1px 1px rgba(0,0,0,0.8)" }} />
            ))}
          </div>

          {/* Brand */}
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 900, letterSpacing: "0.45em", color: "rgba(195,180,140,0.45)", textTransform: "uppercase" }}>
            DRKSHOW
          </div>

          {/* Control buttons */}
          <div style={{ display: "flex", gap: 8, marginRight: 4, alignItems: "center" }}>
            {/* Power button */}
            <button
              onClick={() => setPower(!power)}
              style={{
                width: 14,
                height: 14,
                borderRadius: 2,
                background: power ? "#FF3300" : "#1a1008",
                border: "1px solid #333",
                boxShadow: power
                  ? "0 0 8px #FF3300, inset 0 1px rgba(255,255,255,0.15)"
                  : "inset 0 2px 3px rgba(0,0,0,0.7), 0 1px rgba(255,255,255,0.05)",
                cursor: "pointer",
              }}
            />
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                width: 8,
                height: 8,
                borderRadius: 1,
                background: "#111",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.9), 0 1px rgba(255,255,255,0.04)",
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CHANNEL BUTTONS ─────────────────────── */}
      <div
        className="w-full grid grid-cols-5 gap-0 mt-4"
        style={{ borderTop: "2px solid rgba(255,255,255,0.06)" }}
      >
        {channels.map((c) => {
          const isActive = ch.id === c.id && power;
          const isPressed = pressing === c.id;
          return (
            <button
              key={c.id}
              onMouseDown={() => setPressing(c.id)}
              onMouseUp={() => { setPressing(null); onChannel(c); }}
              onMouseLeave={() => setPressing(null)}
              onTouchStart={() => setPressing(c.id)}
              onTouchEnd={() => { setPressing(null); onChannel(c); }}
              className="flex flex-col items-center justify-center py-4 gap-2 border-r last:border-r-0 transition-none"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: isActive
                  ? `linear-gradient(180deg,rgba(0,0,0,0.6),${c.led}18)`
                  : isPressed
                  ? "rgba(0,0,0,0.8)"
                  : "rgba(12,10,8,0.95)",
                transform: isPressed ? "translateY(1px)" : "none",
                boxShadow: isPressed ? "none" : "inset 0 1px rgba(255,255,255,0.03)",
              }}
            >
              {/* LED indicator */}
              <div style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: isActive ? c.led : "rgba(255,255,255,0.06)",
                boxShadow: isActive ? `0 0 8px ${c.led}, 0 0 14px ${c.led}88` : "none",
              }} />
              <span style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: 9,
                fontWeight: 900,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: isActive ? c.led : "rgba(255,255,255,0.18)",
              }}>
                CH.{c.num}
              </span>
              <span style={{
                fontFamily: "monospace",
                fontSize: 7,
                color: isActive ? `${c.led}cc` : "rgba(255,255,255,0.1)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}>
                {c.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── BRIGHTNESS CONTROL ─────────────────── */}
      <div
        className="w-full mt-0 flex items-center gap-4 px-4 py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span style={{ fontFamily: "monospace", fontSize: 8, color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.3em", flexShrink: 0 }}>
          BRILHO
        </span>
        <input
          type="range" min={20} max={130} value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="flex-1 h-px cursor-pointer"
          style={{ accentColor: "#FF3300" }}
        />
        <span style={{ fontFamily: "monospace", fontSize: 9, color: "#FF3300", width: 24, textAlign: "right" }}>
          {brightness}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   ADIDAS TREFOIL
───────────────────────────────────────────────── */
function AdidasLogo({ fill = "white", h = 40 }: { fill?: string; h?: number }) {
  return (
    <svg viewBox="0 0 80 72" style={{ height: h, width: "auto" }} aria-label="adidas">
      <path d="M40 0 L80 69 H0 Z" fill="none" stroke={fill} strokeWidth="6" />
      <rect x="12" y="55" width="56" height="6" fill={fill} />
      <rect x="20" y="44" width="40" height="6" fill={fill} />
      <rect x="28" y="33" width="24" height="6" fill={fill} />
    </svg>
  );
}

/* ─────────────────────────────────────────────────
   APP
───────────────────────────────────────────────── */
export default function App() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [activeCh, setActiveCh] = useState(channels[0]);
  const [power, setPower] = useState(true);
  const [brightness, setBrightness] = useState(82);

  const handleAdd = () => {
    if (!selectedSize) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div
      className="min-h-screen bg-[#050505] text-white overflow-x-hidden"
      style={{ fontFamily: "'Barlow Condensed',sans-serif" }}
    >

      {/* ── TICKER ── */}
      <div className="overflow-hidden border-b border-white/10 py-1.5 bg-[#050505]">
        <div
          className="flex gap-10 whitespace-nowrap text-[9px] font-black tracking-[0.45em] uppercase"
          style={{ width: "max-content", animation: "marquee 22s linear infinite" }}
        >
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>WINGS 3.0</span>
              <span style={{ color: "#FF3300" }}>✦</span>
              <span>ADIDAS × RICK OWENS × JEREMY SCOTT</span>
              <span style={{ color: "#FF3300" }}>✦</span>
              <span>LIMITED EDITION</span>
              <span style={{ color: "#FF3300" }}>✦</span>
              <span>NOT FOR PRODUCTION</span>
              <span style={{ color: "#FF3300" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── NAV ── */}
      <nav className="grid grid-cols-3 items-center px-6 py-4 border-b border-white/10">
        <AdidasLogo />
        <div className="text-center text-[8px] font-black tracking-[0.5em] uppercase text-white/25">COLLAB / SS26</div>
        <div className="text-right text-[8px] font-black tracking-[0.4em] uppercase text-white/25 cursor-pointer hover:text-white transition-colors">BAG (0)</div>
      </nav>

      {/* ── HERO ── */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_440px] min-h-[94vh]">

        {/* LEFT: TV */}
        <div
          className="flex items-center justify-center border-r-0 lg:border-r border-white/10 py-10 px-4"
          style={{ background: "radial-gradient(ellipse 70% 70% at 50% 55%,#120f0a,#050505)" }}
        >
          <CRTShell
            ch={activeCh}
            onChannel={setActiveCh}
            power={power}
            setPower={setPower}
            brightness={brightness}
            setBrightness={setBrightness}
          />
        </div>

        {/* RIGHT: BUY PANEL */}
        <div className="flex flex-col border-t lg:border-t-0 border-white/10">

          {/* Collab header */}
          <div className="border-b-2 border-white px-6 pt-7 pb-5">
            <div className="text-[7px] font-black tracking-[0.55em] uppercase text-white/20 mb-3">[001] — COLLAB</div>
            <div className="text-[36px] font-black uppercase leading-none tracking-tight">ADIDAS ORIGINALS</div>
            <div className="text-[36px] font-black uppercase leading-none tracking-tight mt-0.5"
              style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
              × RICK OWENS
            </div>
            <div className="text-[36px] font-black uppercase leading-none tracking-tight mt-0.5" style={{ color: "#FF3300" }}>
              × JEREMY SCOTT
            </div>
          </div>

          {/* Product name */}
          <div className="border-b border-white/10 px-6 py-5">
            <div className="text-[7px] font-black tracking-[0.55em] uppercase text-white/20 mb-2">[002] — PRODUTO</div>
            <div className="text-[68px] font-black uppercase leading-none tracking-tighter">WINGS</div>
            <div className="flex items-baseline gap-4">
              <span className="text-[68px] font-black uppercase leading-none tracking-tighter" style={{ color: "#FF3300" }}>3.0</span>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/20 self-center">HIGH-TOP</span>
            </div>
          </div>

          {/* Quote */}
          <div className="border-b border-white/10 px-6 py-4" style={{ background: "rgba(255,255,255,0.015)" }}>
            <div className="text-[7px] font-black tracking-[0.55em] uppercase text-white/20 mb-2">[003] — MANIFESTO</div>
            <p className="text-[13px] leading-snug text-white/50 max-w-xs uppercase tracking-wide">
              ASAS ESCULPIDAS EM COURO. UMA FUSÃO ENTRE A ESCURIDÃO DE OWENS E O ESPETÁCULO DE SCOTT.
            </p>
          </div>

          {/* Specs row */}
          <div className="border-b border-white/10 px-6 py-4">
            <div className="text-[7px] font-black tracking-[0.55em] uppercase text-white/20 mb-3">[004] — SPECS</div>
            <div className="grid grid-cols-3 border-l border-t border-white/10">
              {[
                { k: "MATERIAL", v: "COURO WAX" },
                { k: "SOLA", v: "BORRACHA" },
                { k: "COLORWAY", v: "PRETO×3" },
              ].map((s) => (
                <div key={s.k} className="border-r border-b border-white/10 px-3 py-3">
                  <div className="text-[7px] font-mono text-white/20 mb-1">{s.k}</div>
                  <div className="text-sm font-black">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="border-b border-white/10 px-6 py-4">
            <div className="text-[7px] font-black tracking-[0.55em] uppercase text-white/20 mb-3">[005] — FEATURES</div>
            <div className="grid grid-cols-2 border-l border-t border-white/10">
              {[
                { code: "F01", v: "CO-BRANDING" },
                { code: "F02", v: "SCULPTED WINGS" },
                { code: "F03", v: "OWENS SIGNATURE" },
                { code: "F04", v: "DRKSHOW LACE LOCK" },
              ].map((f) => (
                <div key={f.code} className="border-r border-b border-white/10 px-3 py-3">
                  <div className="text-[7px] font-mono text-white/15 mb-1">{f.code}</div>
                  <div className="text-[11px] font-black uppercase tracking-widest">{f.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="border-b border-white/10 px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[7px] font-black tracking-[0.55em] uppercase text-white/20">[006] — TAMANHO (BR)</div>
              {!selectedSize && <div className="text-[7px] uppercase tracking-widest text-white/12">↓ SELECIONE</div>}
            </div>
            <div className="flex flex-wrap border-l border-t border-white/10">
              {sizes.map((s) => (
                <button key={s} onClick={() => setSelectedSize(s)}
                  className="border-r border-b border-white/10 py-3 font-black text-sm transition-none"
                  style={{
                    width: "11.11%",
                    background: selectedSize === s ? "#FF3300" : "transparent",
                    color: selectedSize === s ? "#fff" : "rgba(255,255,255,0.28)",
                  }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div className="mt-auto px-6 py-5">
            <div className="text-[7px] font-black tracking-[0.55em] uppercase text-white/20 mb-3">[007] — COMPRAR</div>
            <div className="border-2 border-white flex items-stretch">
              <div className="border-r-2 border-white px-5 py-4 min-w-[100px]">
                <div className="text-[7px] font-mono text-white/25 mb-1">PREÇO</div>
                <div className="text-[28px] font-black leading-none">R$15.420</div>
              </div>
              <button onClick={handleAdd} disabled={!selectedSize}
                className="flex-1 py-4 text-[10px] font-black uppercase tracking-[0.25em] disabled:opacity-25 disabled:cursor-not-allowed"
                style={{
                  background: added ? "#22c55e" : selectedSize ? "#FF3300" : "transparent",
                  color: added || selectedSize ? "#fff" : "rgba(255,255,255,0.18)",
                }}>
                {added ? "ADICIONADO ✓" : !selectedSize ? "ESCOLHA O NÚM." : "COMPRAR →"}
              </button>
            </div>
            <div className="mt-2 text-[7px] font-mono tracking-widest uppercase text-white/12">
              // EDIÇÃO LIM. · FRETE GRÁTIS · DEVOL. 30D
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE 1: RICK OWENS ── */}
      <section
        className="relative overflow-hidden border-t border-white/10 px-8 py-16 lg:py-20"
        style={{ background: "#030303" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.012) 60px,rgba(255,255,255,0.012) 61px)" }}
        />
        <div className="relative max-w-5xl">
          <div className="text-[7px] font-mono tracking-[0.5em] uppercase text-white/20 mb-6">— RICK OWENS</div>
          <blockquote
            className="text-[clamp(2.2rem,6vw,5.5rem)] font-black uppercase leading-[0.9] tracking-tighter"
          >
            A ESCURIDÃO<br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)", color: "transparent" }}>
              É O MEU
            </span>
            <br />
            <span style={{ color: "#FF3300" }}>CANVAS.</span>
          </blockquote>
        </div>
      </section>

      {/* ── PRODUCT DETAILS GRID ── */}
      <section className="border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            num: "01",
            title: "COURO WAX",
            body: "Couro bovino premium tratado com cera artesanal. Textura áspera que se molda ao corpo. Nenhum material inferior.",
            accent: "white",
          },
          {
            num: "02",
            title: "ASAS ESCULPIDAS",
            body: "Construção em camadas de couro rigidificado. Cada pena moldada à mão. A forma como declaração permanente.",
            accent: "#FF3300",
          },
          {
            num: "03",
            title: "SOLA BORRACHA",
            body: "Compound de borracha de alta resistência. Padrão de garra exclusivo DRKSHOW. Para andar como se voasse.",
            accent: "white",
          },
          {
            num: "04",
            title: "CO-BRANDING",
            body: "Três logos, três visões. Adidas Originals, Rick Owens, Jeremy Scott. Colaboração que só acontece uma vez.",
            accent: "#FF3300",
          },
        ].map((item, i) => (
          <div
            key={item.num}
            className="px-8 py-10 border-r last:border-r-0 border-b md:border-b-0 border-white/10"
          >
            <div
              className="text-[56px] font-black leading-none mb-5"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)", color: "transparent" }}
            >
              {item.num}
            </div>
            <div
              className="text-lg font-black uppercase tracking-tight mb-3"
              style={{ color: item.accent }}
            >
              {item.title}
            </div>
            <p className="text-xs text-white/35 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>

      {/* ── QUOTE 2: JEREMY SCOTT ── */}
      <section
        className="relative overflow-hidden border-t border-white/10 px-8 py-16 lg:py-20"
        style={{ background: "#080404" }}
      >
        {/* Color bars left accent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-2"
          style={{ background: "linear-gradient(180deg,#FF3300,#FF9900,#FFEE00,#FF3300)" }}
        />
        <div className="relative pl-8 max-w-5xl">
          <div className="text-[7px] font-mono tracking-[0.5em] uppercase text-white/20 mb-6">— JEREMY SCOTT</div>
          <blockquote className="text-[clamp(2rem,5.5vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter">
            <span style={{ color: "#FF3300" }}>POR QUE ANDAR</span><br />
            <span style={{ WebkitTextStroke: "1px white", color: "transparent" }}>QUANDO VOCÊ</span><br />
            PODE VOAR?
          </blockquote>
          <div
            className="mt-8 text-sm font-black uppercase tracking-[0.3em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            WINGS 3.0 — EDIÇÃO LIMITADA — 2025
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="border-t border-white/10 grid grid-cols-1 md:grid-cols-3">
        {[
          {
            label: "A FUSÃO",
            body: "Duas forças opostas se encontram: a escuridão monástica de Rick Owens e a exuberância carnavalesca de Jeremy Scott. O resultado não é compromisso — é combustão.",
          },
          {
            label: "A FORMA",
            body: "As asas não são enfeite. São arquitetura. Cada ângulo foi estudado como escultura, cada costura como traço de pintura. O tênis como objeto de arte.",
          },
          {
            label: "O OBJETO",
            body: "Limited Edition. Not For Production. Uma peça que não deveria existir — mas existe. Use com a consciência de que está carregando algo que transcende a moda.",
          },
        ].map((item, i) => (
          <div
            key={item.label}
            className="px-8 py-12 border-b md:border-b-0 border-white/10"
            style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : undefined }}
          >
            <div className="text-[7px] font-mono tracking-[0.5em] uppercase text-white/15 mb-4">
              {String(i + 1).padStart(2, "0")} /
            </div>
            <div className="text-2xl font-black uppercase tracking-tight mb-4" style={{ color: i === 1 ? "#FF3300" : "white" }}>
              {item.label}
            </div>
            <p className="text-sm text-white/40 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>

      {/* ── FINAL QUOTE ── */}
      <section
        className="border-t border-white/10 px-8 py-14 flex flex-col items-center text-center"
        style={{ background: "#030303" }}
      >
        <div
          className="text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-none tracking-tighter"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)", color: "transparent" }}
        >
          WINGS
        </div>
        <div
          className="text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-none tracking-tighter -mt-3"
          style={{ color: "#FF3300" }}
        >
          3.0
        </div>
        <div className="mt-8 text-xs font-black tracking-[0.5em] uppercase text-white/20">
          ADIDAS ORIGINALS × RICK OWENS × JEREMY SCOTT
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <AdidasLogo fill="rgba(255,255,255,0.18)" h={32} />
          <div className="text-[7px] font-mono tracking-widest uppercase text-white/15">
            CONCEPT / AI / 2025<br />NOT FOR SALE
          </div>
        </div>
        {[
          { label: "COLLAB", items: ["Rick Owens", "Jeremy Scott", "Adidas Originals"] },
          { label: "PRODUTO", items: ["Wings 3.0", "High-Top", "Triple Black", "Ed. Limitada"] },
          { label: "LEGAL", items: ["Conceito / AI", "Not for production", "Design especulativo", "© 2025"] },
        ].map((col) => (
          <div key={col.label}>
            <div className="text-[7px] font-mono tracking-[0.4em] uppercase text-white/15 mb-3">{col.label}</div>
            {col.items.map((item) => (
              <div key={item} className="text-[11px] font-black uppercase tracking-wide text-white/25 mb-1.5">{item}</div>
            ))}
          </div>
        ))}
      </footer>

      <style>{`
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        @keyframes chFloat {
          0%,100%{transform:scale(1.1) translateY(0)}
          50%{transform:scale(1.1) translateY(-14px)}
        }
        @keyframes chBreath {
          0%,100%{transform:scale(1.05)}
          50%{transform:scale(1.16)}
        }
        @keyframes chGlitch {
          0%,87%,100%{transform:scale(1.12) translate(0,0) skewX(0deg)}
          88%{transform:scale(1.12) translate(-5px,2px) skewX(-2deg)}
          89%{transform:scale(1.12) translate(6px,-3px) skewX(2.5deg)}
          90%{transform:scale(1.14) translate(-2px,1px) skewX(0deg)}
          91%{transform:scale(1.12) translate(0,0)}
          93%{transform:scale(1.12) translate(4px,0) skewX(0.5deg)}
          94%{transform:scale(1.12) translate(0,0) skewX(0deg)}
        }
        @keyframes chScan {
          0%,100%{transform:scale(1.08) translateY(0)}
          33%{transform:scale(1.1) translateY(-12px)}
          66%{transform:scale(1.07) translateY(8px)}
        }
        @keyframes chPop {
          0%,100%{transform:scale(1.08);filter:saturate(2.8) contrast(1.2) brightness(0.95) hue-rotate(-8deg)}
          50%{transform:scale(1.14);filter:saturate(3.5) contrast(1.3) brightness(1.05) hue-rotate(-14deg)}
        }
        @keyframes vhsTrack {
          0%{top:-4px;opacity:0}
          5%{opacity:0.5}
          92%{opacity:0.3}
          100%{top:105%;opacity:0}
        }
        @keyframes scanDown {
          0%{top:-4px}
          100%{top:105%}
        }
      `}</style>
    </div>
  );
}
