import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({ children, className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="sm:before:absolutFe sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <ul className='flex flex-col list-disc gap-2 mx-5'>
            <li className='text-md font-normal text-[1.5rem]'>
            Trained & Certified Interpreters – Highlight any certifications or qualifications.
          </li>
          <li className='text-md font-normal text-[1.5rem]'>
        Fast & Reliable Service – Emphasize availability and efficiency.
          </li>
          <li className='text-md font-normal text-[1.5rem]'>
        Customized Solutions – Explain how you adapt to client needs.
          </li>
          </ul>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
