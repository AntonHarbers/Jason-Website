import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-[var(--color-dark-blue)] py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex flex-col-reverse items-center justify-between gap-x-8 gap-y-10 lg:flex-row">
          <div className="flex h-auto w-full flex-col items-center gap-y-6 font-display text-lg font-semibold text-white sm:text-left lg:w-[70%]">
            <h2>
              Welcome to Relio Group/Interpreza, your trusted partner in
              delivering exceptional Spanish interpretation services.
            </h2>
            <h2>
              We specialize in connecting U.S. businesses with highly qualified
              interpreters, ensuring clear and accurate communication across
              diverse industries.
            </h2>
            <h2>
              Our commitment to excellence and cultural understanding makes us
              the ideal choice for organizations seeking reliable language
              solutions.
            </h2>
          </div>

          <div className="h-auto w-[50%] lg:w-[20%]">
            <StylizedImage
              src={imageLaptop}
              sizes="(min-width: 50px) 20rem, 20rem"
              className="justify-center lg:justify-center"
            />
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

const caseStudies = [
  {
    title: 'Trained & Certified Interpreters',
    href: '1',
    description:
      'Our team consists of professionally trained interpreters with industry-experience, ensuring accuracy, cultural competence, and confidentiality in every interaction.',
  },
  {
    title: 'Fast & Reliable Service',
    href: '2',
    description:
      'We understand the importance of timely communication. Our interpreters are available on demand, providing efficient and seamless language support whenever you need it.',
  },
  {
    title: 'Customized Solutions',
    href: '3',
    description:
      'Every client has unique needs, and we tailor our services accordingly. Whether you require on-site, over-the-phone, or video remote interpretation, we adapt to your industry, workflow, and preferences to deliver the best possible experience.',
  },
]

function CaseStudies() {
  return (
    <>
      <SectionIntro
        title=" Why Choose us?"
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Highly skilled Spanish interpreters"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="mt-4 flex items-center justify-center text-base text-neutral-600">
          Whether you need on-demand phone interpreters, video remote
          interpreters, or in-person professionals, we connect you with the best
          talent.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="flex items-center justify-center">
          <div className="flex justify-center">
            <FadeIn className="w-[20rem] flex-none lg:w-[35rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 500px) 20rem, 20rem"
                className="justify-center lg:justify-center"
              />
            </FadeIn>
          </div>
        </div>
        <div className="my-10 flex items-center">
          <Button href="/services" className="mx-auto">
            To our Services
          </Button>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Breaking Language Barriers, Building Stronger Connections
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Providing top-tier Spanish interpretation professionals to ensure
            seamless communication for U.S. businesses.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Services />

      <ContactSection />
    </>
  )
}
