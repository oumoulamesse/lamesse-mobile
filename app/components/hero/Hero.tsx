'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const phones = [
  {
    model: 'iPhone 15 Pro',
    color: 'Bleu électrique',
    storage: '128 GB',
    price: '385 000 F CFA',
    badge: 'Nouveau',
    image: '/images/products/Iphone-13-pro-max.png',
    accent: '#2563eb',
    bg: 'bg-[#e7f0ff]',
    headlineAccent: 'text-blue-600',
    headlineWord: 'disponible',
  },
  {
    model: 'iPhone 14',
    color: 'Bleu ciel',
    storage: '128 GB',
    price: '265 000 F CFA',
    badge: 'Populaire',
    image: '/images/products/_iPhone14 Pro-Max.png',
    accent: '#38bdf8',
    bg: 'bg-[#f0f9ff]',
    headlineAccent: 'text-sky-500',
    headlineWord: 'authentique,',
  },
  {
    model: 'iPhone 13',
    color: 'Bleu azur',
    storage: '256 GB',
    price: '195 000 F CFA',
    badge: 'Meilleur prix',
    image: '/images/products/Iphone-13-pro-max.png',
    accent: '#0ea5e9',
    bg: 'bg-[#e0f2fe]',
    headlineAccent: 'text-sky-600',
    headlineWord: 'meilleur prix',
  },
  {
    model: 'iPhone 15',
    color: 'Bleu marine',
    storage: '128 GB',
    price: '310 000 F CFA',
    badge: 'Stock limité',
    image: '/images/products/iPhone-15-pro-MAX-bis.png',
    accent: '#1e3a8a',
    bg: 'bg-[#dbeafe]',
    headlineAccent: 'text-blue-800',
    headlineWord: 'en stock',
  },
]

const STORAGES = ['64 GB', '128 GB', '256 GB']

const STATS = [
  {
    raw: 100,
    suffix: '%',
    label: 'Authentique',
    sublabel: 'Produits certifiés Apple',
    accent: '#2563eb',
    ping: '#93c5fd',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    raw: 48,
    suffix: 'h',
    label: 'Livraison rapide',
    sublabel: 'Dakar & banlieue',
    accent: '#6c94f9',
    ping: '#6c94f9',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    raw: 1200,
    suffix: '+',
    label: 'Clients satisfaits',
    sublabel: 'Avis vérifiés',
    accent: '#044c8a',
    ping: '#044c8a',
    iconPath:
      'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
]

/* ─────────────────────────────────────────
   COUNTER HOOK
───────────────────────────────────────── */

function useCounter(target: number, started: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])
  return count
}

/* ─────────────────────────────────────────
   STAT CARD
───────────────────────────────────────── */

function StatCard({
  stat,
  index,
  started,
}: {
  stat: (typeof STATS)[0]
  index: number
  started: boolean
}) {
  const count = useCounter(stat.raw, started, 1600 + index * 200)
  const [hovered, setHovered] = useState(false)

  const displayNum =
    stat.raw >= 1000
      ? count >= 1000
        ? `${(Math.floor(count / 100) / 10).toFixed(1).replace('.0', '')}k`
        : `${count}`
      : `${count}`

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: started ? 1 : 0,
        transform: started
          ? hovered
            ? 'translateY(-6px) scale(1.03)'
            : 'translateY(0) scale(1)'
          : 'translateY(28px) scale(0.96)',
        transition: started
          ? `opacity 0.6s ease ${index * 150}ms, transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${index * 150}ms`
          : 'none',
      }}
      className="relative flex flex-col items-center justify-center
                 bg-white dark:bg-gray-900
                 border border-gray-100 dark:border-gray-800
                 rounded-2xl p-6 overflow-hidden cursor-default select-none"
    >
      {/* Hover glow */}
      <div
        style={{ background: stat.accent, opacity: hovered ? 0.06 : 0, transition: 'opacity .4s' }}
        className="absolute inset-0 rounded-2xl"
      />

      {/* Icon + ping ring */}
      <div className="relative mb-4">
        {started && (
          <div
            style={{
              background: stat.ping,
              animationDelay: `${index * 500}ms`,
              animationDuration: '2.6s',
            }}
            className="absolute inset-0 rounded-full opacity-30 animate-ping"
          />
        )}
        <div
          style={{ background: stat.accent + '22' }}
          className="relative w-11 h-11 rounded-full flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={stat.accent}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d={stat.iconPath} />
          </svg>
        </div>
      </div>

      {/* Number */}
      <div className="flex items-end gap-0.5 leading-none mb-1">
        <span className="text-4xl font-black tracking-tight text-gray-900 dark:text-white tabular-nums">
          {displayNum}
        </span>
        <span className="text-xl font-black mb-0.5" style={{ color: stat.accent }}>
          {stat.suffix}
        </span>
      </div>

      {/* Labels */}
      <div className="text-[13px] font-semibold text-gray-800 dark:text-gray-100 mt-1">
        {stat.label}
      </div>
      <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-0.5 text-center">
        {stat.sublabel}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          background: stat.accent,
          width: hovered ? '100%' : '0%',
          transition: 'width .45s ease',
        }}
        className="absolute bottom-0 left-0 h-0.5 rounded-full"
      />
    </div>
  )
}

/* ─────────────────────────────────────────
   STATS GRID
───────────────────────────────────────── */

function StatsGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); obs.disconnect() }
      },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full py-12 px-4">
      {/* Eyebrow */}
      <p
        style={{
          opacity: started ? 1 : 0,
          transform: started ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity .5s ease, transform .5s ease',
        }}
        className="text-center text-[10px] uppercase tracking-[.22em]
                   text-gray-400 dark:text-gray-600 mb-6 font-semibold"
      >
        Pourquoi nous choisir
      </p>

      {/* Grid 3 colonnes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} started={started} />
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   HERO (composant principal)
───────────────────────────────────────── */

export default function Hero() {
  const [cur, setCur] = useState(0)
  const [storage, setStorage] = useState('128 GB')
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  const goTo = (n: number) =>
    setCur(((n % phones.length) + phones.length) % phones.length)

  const resetTimer = () => {
    clearInterval(timer.current)
    timer.current = setInterval(() => setCur(c => (c + 1) % phones.length), 4000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timer.current)
  }, [])

  const p = phones[cur]

  return (
    <section className="bg-white dark:bg-[#0a0a0a] overflow-hidden">

      {/* ── HERO ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

        {/* LEFT */}
        <div className="flex flex-col justify-center px-8 md:px-12 py-16 gap-8">

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-gray-400 tracking-[.1em] uppercase">
              Boutique Apple · Sénégal
            </span>
          </div>

          <h1
            key={cur}
            className="font-black text-[clamp(42px,5vw,64px)] leading-[1.05] tracking-tight
                       text-gray-900 dark:text-white"
            style={{ animation: 'fadeSlideUp .45s ease both' }}
          >
            {p.model}<br />
            <span className={p.headlineAccent}>{p.headlineWord}</span><br />
            au Sénégal.
          </h1>

          <p
            key={`desc-${cur}`}
            className="text-[15px] md:text-[17px] leading-relaxed text-gray-500 max-w-sm"
            style={{ animation: 'fadeSlideUp .5s ease .1s both' }}
          >
            {p.color}, {storage} — original, testé et garanti.
            Livraison rapide à Dakar et partout au Sénégal.
          </p>

          <div className="flex items-center gap-5 pt-2">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white
                         text-white dark:text-gray-900 text-sm font-semibold
                         px-8 py-4 rounded-full transition-all
                         hover:opacity-80 hover:-translate-y-0.5"
            >
              Commander
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium text-gray-400
                         hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Voir tout →
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="relative flex flex-col items-center justify-end overflow-hidden"
    style={{
        background: `linear-gradient(135deg, #f2ededf0 0%, ${p.accent}18 45%, ${p.accent}40 100%)`,
        transition: 'background 0.5s ease',
  }}
        >
          {/* Glow */}
          <div className="absolute w-[320px] h-[320px] bg-blue-500/10 blur-3xl rounded-full" />

          {/* Info overlay */}
          <div
            key={`info-${cur}`}
            className="absolute top-10 left-10 z-10"
            style={{ animation: 'fadeSlideUp .4s ease both' }}
          >
            <div className="text-xl font-bold text-gray-900 dark:text-white">{p.model}</div>
            <div className="text-xs text-gray-400 mt-1">{p.color} · {storage}</div>
            <div className="text-xl font-black mt-2" style={{ color: p.accent }}>
              {p.price}
            </div>
          </div>

          {/* Badge */}
          <div
            key={`badge-${cur}`}
            className="absolute top-10 right-10 z-10"
            style={{ animation: 'popIn .4s cubic-bezier(0.34,1.56,0.64,1) .15s both' }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-widest
                         px-3 py-1.5 rounded-full text-white"
              style={{ background: p.accent }}
            >
              {p.badge}
            </span>
          </div>

          {/* Phone image */}
          <div
            key={cur}
            className="relative w-[260px] h-[420px] md:w-[300px] md:h-[480px] z-10"
            style={{ animation: 'riseIn .5s cubic-bezier(0.34,1.56,0.64,1) both' }}
          >
            <Image
              src={p.image}
              alt={p.model}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Storage selector */}
          <div className="absolute bottom-16 flex gap-2 z-20">
            {STORAGES.map(s => (
              <button
                key={s}
                onClick={() => setStorage(s)}
                className={`text-[11px] font-semibold px-3.5 py-1.5 rounded-md border
                            transition-all duration-200 ${
                              storage === s
                                ? 'bg-gray-900 text-white border-gray-900 scale-105'
                                : 'bg-white/80 text-gray-500 border-gray-200 hover:border-gray-400'
                            }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 flex gap-1.5 z-20">
            {phones.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetTimer() }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === cur ? 'w-6 bg-gray-900' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS GRID animée ── */}
      <StatsGrid />

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(24px) scale(.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);   }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(.7);  }
          to   { opacity: 1; transform: scale(1);   }
        }
      `}</style>
    </section>
  )
}
