import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-[var(--color-dark-blue)] py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Excellence" invert>
            We provide only the most qualified interpreters, ensuring
            professionalism and accuracy.
          </GridListItem>
          <GridListItem title="Reliability" invert>
            Our interpreters are available when and where you need them,
            offering consistent, high-quality service.
          </GridListItem>
          <GridListItem title="Cultural Competence" invert>
            More than just language fluency, our interpreters understand
            cultural nuances that enhance communication.
          </GridListItem>

          <GridListItem title="Partnership" invert>
            We work closely with our clients to align with their needs and
            deliver exceptional results.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <div className="mt-20">
      <PageIntro eyebrow="About us" title="At Relio Group">
        <p>
          We understand that clear communication is the foundation of successful
          relationships
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We are an outsourcing company dedicated to delivering exceptional
            interpretation services to businesses across the United States. Our
            team comprises experienced interpreters who are not only fluent in
            Spanish and English but also well-versed in various industry
            terminologies.
          </p>
          <p>
            We are committed to facilitating accurate and culturally sensitive
            communication, enabling our clients to operate efficiently in a
            globalized market.
          </p>
        </div>
      </PageIntro>

      <Culture />
    </div>
  )
}
