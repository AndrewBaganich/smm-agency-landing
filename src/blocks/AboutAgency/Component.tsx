import { Media } from '@/components/Media'

type Stat = {
  value?: string | null
  label?: string | null
}

type Props = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  image?: any
  stats?: Stat[] | null
}

export const AboutAgencyBlock: React.FC<Props> = ({
  eyebrow,
  title,
  description,
  image,
  stats,
}) => {
  return (
    <section className="bg-[#F8F6F3] py-24 text-[#1E1E1E]">
      <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden bg-white">
          {image && typeof image === 'object' && (
            <Media resource={image} fill imgClassName="object-cover" />
          )}
        </div>

        <div>
          {eyebrow && (
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#6F1D2B]">
              {eyebrow}
            </p>
          )}

          {title && <h2 className="mb-6 max-w-xl text-5xl font-normal leading-tight">{title}</h2>}

          {description && (
            <p className="max-w-xl text-lg leading-8 text-[#4A4A4A]">{description}</p>
          )}

          {Array.isArray(stats) && stats.length > 0 && (
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#D8D2CC] pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-normal text-[#6F1D2B]">{stat.value}</p>
                  <p className="mt-2 text-sm text-[#4A4A4A]">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
