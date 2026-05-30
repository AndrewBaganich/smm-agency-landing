import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { Media } from '@/components/Media'

type Props = {
  eyebrow?: string | null
  title?: string | null
}

export const TeamBlock: React.FC<Props> = async ({ eyebrow, title }) => {
  const payload = await getPayload({ config: configPromise })

  const team = await payload.find({
    collection: 'team',
    where: {
      featured: {
        equals: true,
      },
    },
    limit: 8,
    sort: 'createdAt',
  })

  return (
    <section className="bg-[#F8F6F3] py-24 text-[#1E1E1E]">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#6F1D2B]">
              {eyebrow}
            </p>
          )}

          {title && <h2 className="text-5xl font-normal leading-tight">{title}</h2>}
        </div>

        {team.docs.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {team.docs.map((member) => (
              <article key={member.id} className="group">
                <div className="relative mb-5 min-h-[420px] overflow-hidden bg-white">
                  {member.photo && typeof member.photo === 'object' && (
                    <Media
                      resource={member.photo}
                      fill
                      imgClassName="object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <h3 className="text-2xl font-normal">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#6F1D2B]">
                  {member.position}
                </p>

                {member.instagramUrl && (
                  <a
                    href={member.instagramUrl}
                    target="_blank"
                    className="mt-4 inline-block text-sm text-[#555] hover:text-[#6F1D2B]"
                  >
                    Instagram →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
