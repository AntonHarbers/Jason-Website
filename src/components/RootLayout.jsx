'use client'

import { createContext, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo } from '@/components/Logo'
import { FadeIn } from './FadeIn'

const RootLayoutContext = createContext(null)

function BurgerMenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path
        fill="currentColor"
        d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"
      />
    </svg>
  )
}

function Header({ invert = false }) {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Logo className="hidden h-8 sm:block" />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden"
        >
          <BurgerMenuIcon />
        </button>
        <div className="hidden items-center gap-x-8 md:flex">
          <Button href="/about" invert={invert}>
            About Us
          </Button>
          <Button href="/services" invert={invert}>
            Services
          </Button>

          <Button href="/contact" invert={invert}>
            Contact us
          </Button>
        </div>
      </div>
      {open && (
        <FadeIn>
          <div className="mt-5 flex items-center justify-center gap-x-8 md:hidden">
            <Link
              className="rounded-md bg-[var(--color-dark-blue)] px-2 text-white"
              href="/about"
            >
              About
            </Link>
            <Link
              className="rounded-md bg-[var(--color-dark-blue)] px-2 text-white"
              href="/about"
            >
              Services
            </Link>
            <Link
              className="rounded-md bg-[var(--color-dark-blue)] px-2 text-white"
              href="/about"
            >
              Contact us
            </Link>
          </div>
        </FadeIn>
      )}
    </Container>
  )
}

function RootLayoutInner({ children }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef(null)
  let closeRef = useRef(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute top-2 right-0 left-0 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-sky-300/10 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
