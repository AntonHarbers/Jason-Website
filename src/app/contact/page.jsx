'use client'

import { useId, useState } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  //const [status, setStatus] = useState(null)

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()

  //   try {
  //     const response = await fetch('/api/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(form),
  //     })
  //     const result = await response.json()
  //     setStatus(result.success ? 'success' : 'error')
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <FadeIn className="lg:order-last">
      <form className="bg-dark-blue">
        <h2 className="font-display text-base font-semibold text-white">
          Get in touch
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            onChange={handleChange}
            value={form.name}
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            value={form.email}
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            onChange={handleChange}
            value={form.company}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            onChange={handleChange}
            value={form.phone}
          />
          <TextInput
            label="Message"
            name="message"
            onChange={handleChange}
            value={form.message}
            required
          />
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="mt-10 cursor-pointer rounded-2xl bg-white p-2 font-semibold text-black transition hover:bg-[var(--color-light-blue)] hover:text-white"
          >
            Let’s work together
          </button>
        </div>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <Border className="mt-8">
        <h2 className="pt-6 font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Careers', 'careers@studioagency.com'],
            ['Press', 'press@studioagency.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <div className="mt-20 flex h-auto flex-col items-start justify-center gap-y-10 sm:mt-32 lg:flex-row lg:items-start lg:justify-around">
        <div className="mx-auto lg:mx-0 lg:w-[50%]">
          <PageIntro
            eyebrow="Contact us"
            title="Ready to enhance your communication capabilities?"
          >
            <p>
              Contact us today to learn how we can provide tailored language
              solutions to meet your business needs.
            </p>
          </PageIntro>
        </div>
        <div className="mx-auto w-full rounded-md bg-[var(--color-dark-blue)] p-8 lg:mx-0 lg:w-[40%]">
          <ContactForm />
        </div>
      </div>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-1">
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
