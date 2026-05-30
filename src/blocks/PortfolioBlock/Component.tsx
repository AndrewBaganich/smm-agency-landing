import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { Media } from '@/components/Media'

type Props = {
  eyebrow?: string | null
  title?: string | null
}

export const PortfolioBlock: React.FC<Props> = async ({ eyebrow, title }) => {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    where: {
      featured: {
        equals: true,
      },
    },
    limit: 6,
    sort: '-createdAt',
  })

  return (
    <section className="bg-[#F8F6F3] py-24 text-[#1E1E1E]">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            {eyebrow && (
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#6F1D2B]">
                {eyebrow}
              </p>
            )}

            {title && <h2 className="text-5xl font-normal leading-tight">{title}</h2>}
          </div>

          <a href="/portfolio" className="text-sm font-medium text-[#6F1D2B]">
            Дивитися всі →
          </a>
        </div>

        {projects.docs.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {projects.docs.map((project) => (
              <article key={project.id} className="group">
                <div className="relative mb-5 min-h-[360px] overflow-hidden bg-white">
                  {project.coverImage && typeof project.coverImage === 'object' && (
                    <Media
                      resource={project.coverImage}
                      fill
                      imgClassName="object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#6F1D2B]">
                  {project.category}
                </p>

                <h3 className="text-2xl font-normal">{project.title}</h3>

                {project.shortDescription && (
                  <p className="mt-3 leading-7 text-[#555]">{project.shortDescription}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
