import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    links: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Services', href: '/services' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="flex w-full justify-between">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex} className="">
            <ul role="list" className="flex gap-x-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => {
                if (!link.icon) {
                  return (
                    <li key={linkIndex} className="">
                      <Link
                        href={link.href}
                        className="transition hover:text-neutral-950"
                      >
                        {link.title}
                      </Link>
                    </li>
                  )
                }
              })}
              {section.links.map((link) => {
                if (link.icon) {
                  return (
                    <li key={link.title} className="ml-4">
                      <Link
                        href={link.href}
                        className="transition hover:text-neutral-950"
                      >
                        <link.icon className="h-6 w-6 fill-current" />
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <Navigation />
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Studio Agency Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
