import configPromise from '@payload-config'
import { getPayload } from 'payload'

type Props = {
  eyebrow?: string | null
  title?: string | null
}

export const ServicesBlock: React.FC<Props> = async ({ eyebrow, title }) => {
  const payload = await getPayload({ config: configPromise })

  const services = await payload.find({
    collection: 'services',
    limit: 6,
    sort: 'createdAt',
  })

  return (
    <section className="bg-[#F8F6F3] py-24 text-[#1E1E1E]">
      <div className="container">
        <div className="mb-12 max-w-xl">
          {eyebrow && (
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#6F1D2B]">
              {eyebrow}
            </p>
          )}

          {title && <h2 className="text-5xl font-normal leading-tight">{title}</h2>}
        </div>

        {services.docs.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.docs.map((service, index) => (
              <article
                key={service.id}
                className="border border-[#DDD6D0] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#6F1D2B]"
              >
                <span className="mb-10 block text-sm text-[#6F1D2B]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mb-4 text-2xl font-normal">{service.title}</h3>

                <p className="leading-7 text-[#555]">{service.shortDescription}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
